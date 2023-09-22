var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ofcsmurilo@gmail.com',
    pass: 'lggu jmwq twhe zbmv '
  }
});

var mailOptions = {
  from: 'ofcsmurilo@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Murilo Rocha da rosa, 2 ano b - lggu jmwq twhe zbmv'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 