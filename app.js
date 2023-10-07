
/* 
 * File: script.js
 * Author: [Your Name]
 * StudentID: [Your StudentID]
 * Date: [Current Date]
 * Description: This file contains the JavaScript functions for the portfolio site.
*/









const express = require("express");


const app = express()
const port = 3000;



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.use("/public/", express.static(__dirname + "/public/"));



// Define routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);




app.listen(port, () => {
    console.log("Server Running on Port " + "http://localhost:3000")
})




// npm install
// npm install nodemon
// npx nodemon app.js
// npm install ejs
// npm install -D node-sass nodemon
// npx nodemon app.js
