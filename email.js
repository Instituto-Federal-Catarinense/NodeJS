var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fernandoalbinoo11@gmail.com',
    pass: 'lhzs mjcl tqqx dane '
  }
});

var mailOptions = {
  from: 'fernandoalbinoo11@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'lhzs mjcl tqqx dane'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});