var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'analauraborgesmartins64@gmail.com',
    pass: 'mpqc eddx bxag eozp'
  }
});

var mailOptions = {
  from: 'analauraborgesmartins64@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Ana Laura 2B',
  text: 'A senha é: mpqc eddx bxag eozp'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

//multiplos envios
/*
var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  } 

  // enviar html

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  } */