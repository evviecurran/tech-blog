const router = require('express').Router();
const { User } = require('../../models');


// creates a new user 
router.post("/", async (req, res) => {
  try {
    // const userData = await User.create(req.body);   check to see if this is right
    const userData = await User.create(req.body);


    // ({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    // });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id= userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in."});

      // res
      //   .status(200)
      //   .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Logout which destroys the session to logout the user 
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// checks if the user is logged in - CHECK WHAT THIS IS 
router.get("/logincheck", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      return true;
    }
    return false;
  });

module.exports = router;
