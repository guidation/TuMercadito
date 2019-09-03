


const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'guido23acuna@gmail.com', // Cambialo por tu email
 pass: 'guido230497' // Cambialo por tu password
 }
 });

 transporter.use('compile', hbs({
     viewEngine: 'express-handlebars',
     viewPath: './views/',
     extname: '.hbs',
 }));

const mailOptions = {
 from: 'guido23acuna@gmail.com',
 to: `guido23acuna@gmail.com`,
 subject: 'nknknk',
 text: formulario.asunto ,
 template: 'index'
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}