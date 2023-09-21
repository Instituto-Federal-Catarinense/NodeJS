var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabriel36pp@gmail.com',
    pass: 'vssk lcfw unjg vizr'
  }
});

var mailOptions = {
  from: 'gabriel36pp@gmail.com',
  to: 'joedio.borge@ifc.edu.br',
  subject: 'Gabriel Alburquerque Espanhol 2A',
  text: 'vssk lcfw unjg vizr!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});