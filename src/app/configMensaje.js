


const nodemailer = require('nodemailer');
module.exports = (formulario, carrito) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'guido23acuna@gmail.com', // Cambialo por tu email
 pass: 'guido230497' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: 'guido23acuna@gmail.com',
 to: `guido23acuna@gmail.com`,
 subject: formulario.asunto,
 text: formulario.mensaje + formulario.carro.nombre + carrito.precio,
 };

transporter.sendMail(mailOptions, function (err, info) {
 if (err)
 console.log(err)
 else
 console.log(info);
 });
}