var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eduardoqmarangon@gmail.com',
    pass: 'lcnz blgp pslr pyfi'
  }
});

var mailOptions = {
  from: 'eduardoqmarangon@gmail.com',
  to: 'joedio.borges@ifc.edu.br,',
  subject: 'Enviando email usando o Node.Js',
  text: 'Eduardo Quartiero Marangon'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});