var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bbasgvd123@gmail.com',
    pass: 'nacu lgtv nqof audi'
  }
});

var mailOptions = {
  from: 'bbasgvd123@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Caio Henrique Pietsch 2B - nacu lgtv nqof audi'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});