var express = require('express');
var passport = require('passport');
var Strategy = require('passport-github').Strategy;
var org = require('./models/access');
var data = require("./userData.json");
var rename =require('./models/rename')
var pertenece;

rename.renameIndex();

passport.use(new Strategy({
        clientID: "91d8ed8041800a52daeb",
        clientSecret: "4faed6ee3b9d88a0a34903290d78cc72b12cad76",
        callbackURL: 'http://localhost:3000/login/github/return'
    },
    (accessToken, refreshToken, profile, cb) => {
        pertenece = org.access(profile.username);
        return cb(null, profile);
    }));

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});



var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/gh-pages'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({
    extended: true
}));
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/libro', (req, res) => {
    if (pertenece) {
        res.sendFile(__dirname + '/gh-pages/readme.html');

    } else {
        res.render('fallo', {
            user: req.user
        });
    }
});

app.get('/', (req, res) => {
    res.render('home', {
        user: req.user
    });
});

app.get('/fallo', (req, res) => {
    res.render('fallo', {
        user: req.user
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/login/github', passport.authenticate('github'));

app.get('/login/github/return', passport.authenticate('github', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/');
});

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), (req, res) => {
    res.render('profile', {
        user: req.user
    });
});

console.log("App running on localhost:3000");
app.listen(3000);
