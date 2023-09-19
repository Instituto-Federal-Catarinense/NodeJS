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
  to: 'ifcphrw@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'inter diabo!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 