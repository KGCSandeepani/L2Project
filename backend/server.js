// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const router = express.Router();
// const request = require('request');
// const nodemailer = require('nodemailer');
// const app = express();
// // CORS Middleware
// app.use(cors());
// // Port Number
// //const port = process.env.PORT || 3000
// // Run the app by serving the static files
// // in the dist directory
// app.use('company-view-stu-full',express.static(path.join(__dirname, 'company-view-stu-full')));
// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


// // For all GET requests, send back index.html
// // so that PathLocationStrategy can be used
// app.get('/', (req, res) => {
//   res.render(path.join(__dirname + 'company-view-stu-full.html'));
// });

// app.post('/send',(req, res)=>{
//   console.log(req.body);
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: false,
//     port: 25,
//     auth: {
//         user: 'ishara199506@gmail.com',
//         pass: '8#Isha43'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

//  let HelperOptions = {
//      from: '"nodemailer contact" <ishara199506@gmail.com>',
//      to: 'isharasandeepani38@gmail.com',
//     subject: 'Majeni Contact Request',
//      text: 'Hello',
//      html: outputData
//  };



// transporter.sendMail(HelperOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log("The message was sent!");
//     console.log(info);
// });

// });





//routes
// const contact = require('./app/routes/contact');
// app.use('/contact', contact);
// // If an incoming request uses
// // a protocol other than HTTPS,
// // redirect that request to the
// // same url but with HTTPS
// const forceSSL = function () {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//         ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }

// Instruct the app
// to use the forceSSL
// middleware
//app.use(forceSSL());
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   if ('OPTIONS' == req.method) {
//     res.sendStatus(200);
//     } else {
//       next();
//     }

// });

// Start Server
// app.listen(port, () => {
//     console.log('Server started on port '+port);
//   });