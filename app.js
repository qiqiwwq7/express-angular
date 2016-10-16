var express = require('express');
var app = express();

var path = require('path');

var juicer = require('juicer');

var juicerExpressAdapter = require('juicer-express-adapter');

app.engine('html', juicerExpressAdapter);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.render('index');
})


app.set('port',process.env.PORT || 9000);
app.set('env', 'production');

app.listen(app.get('port'), function () {
  console.log('http://localhost:' + app.get('port') + '已启动' );
});
