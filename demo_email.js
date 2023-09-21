var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emanuelaveronezdasilva@gmail.com',
    pass: 'nzps afgx rzzv hrmv'
  }
});

var mailOptions = {
  from: 'emanuelaveronezdasilva@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'nzps afgx rzzv hrmv'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});