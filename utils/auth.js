const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
        //  does it need double ""
        res.redirect('/login');
    }
    else {
        next();
    }
};

module.exports = withAuth; 