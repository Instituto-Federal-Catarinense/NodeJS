var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joaopiresmachadonunes@gmail.com',
    pass: 'nbxr lcyd spnq fana '
  }
});

var mailOptions = {
  from: 'joaopiresmachadonunes@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Teste de enviar email com node para eu mesmo',
  text: 'texto muito legal uau'
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
  } 
  */