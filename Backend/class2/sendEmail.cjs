const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'rawatrishab007@gmail.com', 
      pass: 'nytx fcjw rhii rizx', 
    },
  });

  const mailOptions = {
    from: 'rawatrishab007@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };