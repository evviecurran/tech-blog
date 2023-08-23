const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// DO I NEED THIS ? 

const sess = {
    secret: "supes secret",
    cookie: {
        // does maxage need to be a specific number ? 
        maxAge: 430000,
        httpOnly: true, 
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true, 
    store: new SequelizeStore({
        db: dequelize,
    }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extrended: true }));
app.use(express.status(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("now listening"));
});