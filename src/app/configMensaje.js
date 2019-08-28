


const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars')
module.exports = (formulario, mercado) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'guido23acuna@gmail.com', // Cambialo por tu email
 pass: 'guido230497' // Cambialo por tu password
 }
 });

 transporter.use('complie', hbs({
     viewEngine: 'express-handlebars',
     viewPath: './models/'

 }))
const mailOptions = {
 from: 'guido23acuna@gmail.com',
 to: `guido23acuna@gmail.com`,
 subject: formulario.asunto,
 template: 'index'
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}