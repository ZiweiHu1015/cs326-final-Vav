

'use strict';
exports.__esModule = true;
//var PORT = process.env.PORT || 8080;
var mongo_database_1 = require("./mongo-database");
var myserver_post_1 = require("./myserver-post");
var theDatabase = new mongo_database_1.Database('perryguo98'); // CHANGE THIS
var theServer= new myserver_post_1.MyServer(theDatabase);
theServer.listen(8080);