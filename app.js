
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);


app.post('/login', function(req, res) {
	user = req.body["name"];
	res.json({
		user : user
		, page : user == 'u1' ? '#/page1' : '#/page2'
	})
})

app.get('/logout', function(req, res) {
	user = null;
	res.json({ success : true });
})

app.get('/session', function(req, res) {
	res.json({
		login : !!user,
		user : user,
		page : user == 'u1' ? '#/page1' : '#/page2'
	});
})


var user = null;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
