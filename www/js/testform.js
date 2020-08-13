/*var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})*/




/*var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
   console.log("Got a POST request for the homepage");
   res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   console.log("Got a GET request for /list_user");
   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
   console.log("Got a GET request for /ab*cd");
   res.send('Page Pattern Match');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

*/

/////post form/////


var express = require('express');
var app = express();


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemydb"
});




app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.use(express.static('public'));
app.get('/home.html', function (req, res) {
   res.sendFile( __dirname + "/" + "home.html" );
})

app.get('/process_get', function (req, res) {


	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO customers (name, address) VALUES ("+"'"+req.query.first_name+"'"+","+ "'"+req.query.user_address+"'"+")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});

	
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      Address:req.query.user_address
   };
   console.log(response);
   res.end(JSON.stringify(response));
})




app.get('/register_submit', function (req, res) {
alert('hello');exit;

	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

 var sql = "INSERT INTO customers (first_name, last_name, email, password,address) VALUES ("+"'"+req.query.first_name+"'"+","+ "'"+req.query.last_name+"'"+","+ "'"+req.query.email+"'"+","+ "'"+req.query.password+"'"+","+ "'"+req.query.address+"'"+")";
 
 //var sql = "INSERT INTO user (username, password) VALUES ("+"'"+req.query.user_name+"'"+","+ "'"+req.query.req.password+"'"+")";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

});

	
   // Prepare output in JSON format
   response = {
      Name:req.query.first_name+req.query.last_name,
      Email:req.query.email
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
   //console.log("Got a GET request for /list_user");
   //res.send('Page Listing');

   con.query("SELECT first_name,last_name,address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //res.end(JSON.stringify(result));
	
	/////for row wise/////
	
	res.send(result);
	
	// result.forEach(function(user){
		// {user.name}
		// {user.address}
	// });
	
  });
})


///get a single user////

app.get('/edit_user/:id', function (req, res) {
   //console.log("Got a GET request for /list_user");
   //res.send('Page Listing');

   con.query("SELECT name,address FROM customers WHERE id = ?",[req.params.id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //res.end(JSON.stringify(result));
	
	/////for row wise/////
	
	res.send(result);	
	
  });
})

///delete user by id////

app.get('/deleteuser/:id', function (req, res) {
   //console.log("Got a GET request for /list_user");
   //res.send('Page Listing');

   con.query("DELETE FROM customers WHERE id = ?",[req.params.id], function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //res.end(JSON.stringify(result));
	
	res.send('Deleted Successfully..');
		
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})