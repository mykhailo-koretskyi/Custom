
/**
 * Module dependencies.
 */
var swig = require('swig');
var config = require('./conf/config');
var express = require('express');
var routes = require('./routes');
var i18n = require('i18n');
var user = require('./lib/model/user');
var control = require('./lib/control');
var http = require('http');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

// all environments
app.engine('html', swig.renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

i18n.configure({
    locales:['ua', 'en'],
    directory: __dirname + '/locales'
});

app.configure(function() {
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.methodOverride());
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(express.session(config.session));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(config.media.path));
});

passport.use(new LocalStrategy(
     function(username, password, done) {
        user.load(username, password, function (err, user) {
			console.log(user);
            if (err) { return done(err); }
            if (!user.id) {
                return done(null, false, { message: 'Incorrect username or password.' }); 
            }
            return done(null, user);
        }); 
    }  
));
passport.serializeUser(function(user, done){
	done(null, user.id);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', control.starting.home);
app.get('/login', control.starting.login);
app.post('/login', 
		passport.authenticate('local', 
			{ 
				successRedirect: '/', 
				failureRedirect: '/login' 
			}));
app.get('/logout', function(req,res){
	req.logout();
	res.redirect('/');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
