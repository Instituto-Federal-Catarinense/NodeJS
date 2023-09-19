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
  to: 'dianadenezrosso02@gmail.com',
  subject: 'PODE ABRIR',
  text: 'Nunca ganhou de mim no xadraz'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});