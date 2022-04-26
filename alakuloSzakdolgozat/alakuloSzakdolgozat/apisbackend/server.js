var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

const mongoose = require('mongoose');
const Product = require('./product');

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const MONGODB_URI =
    'mongodb+srv://Erik:s0Lyom11@cluster0.j7dn4.mongodb.net/shop?retryWrites=true&w=majority';

//onst app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});


mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
       
    })
    .catch(err => {
        console.log(err);
    });





app.get('/', function (req, res) {
   Product.find()
   .then(products => {
     //console.log(products);
    res.end( JSON.stringify(products ));
   })
   .catch(err => {
     console.log(err);
   });
   //  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   //        console.log( data );
   //        res.end( data );
   //     });
    })

    app.post('/add', function (req, res) {
      // First read existing users.
      let a = req.body;
      console.log(a);
      res.end(a);
   })
   


var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("A backend szerver a 3001-es porton fut.")
})
