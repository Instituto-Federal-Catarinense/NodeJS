var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fernandoalbinoo11@gmail.com',
    pass: 'tzjb rqrb cqnk dwr'
  }
});

var mailOptions = {
  from: 'fernandoalbinoo11@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'tzjb rqrb cqnk dwr'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});