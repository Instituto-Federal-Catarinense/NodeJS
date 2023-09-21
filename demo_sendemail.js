var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mrzbldefreitas@gmail.com',
    pass: 'tbsy afms rral gevp'
  }
});

var mailOptions = {
  from: 'mrzbldefreitas@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js. Maria Izabel de Freitas - 2A',
  text: 'tbsy afms rral gevp'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});