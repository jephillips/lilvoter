/**
 * Created by josh on 8/24/15.
 */

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/data'));
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(request, response) {
    response.render('/client/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});