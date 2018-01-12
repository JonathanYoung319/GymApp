const express      = require('express'),
      app          = express(),
      routes       = require('./routes/routes');
      // bodyParser   = require('body-parser');
   

// Embedded JavaScript (allows use of js in html templates unlike vanilla markup )
app.set("view engine", "ejs");

// Parses request body triggered from HTML to Node
// Extract info from POST requests
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// Declaring which files are accessible via views
app.use(express.static(__dirname + '/public'));
app.use(routes);

// Start HTTP Server
app.listen(8080, function() {
  console.log('HTTP server listening on localhost:8080 from ' + new Date);
});





