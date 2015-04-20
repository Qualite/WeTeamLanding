var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  var nodemailer = require('nodemailer');

  var cfg = {
    host:'smtp.yandex.ru',
    port: 465,
    auth: {
      "user": "no-reply@weteam.pro",
      "pass": "no-replyno-reply"
    },
    secureConnection: true
  };

  var subject =  'WeTeam - Заявка';
  var transport = nodemailer.createTransport("SMTP", cfg);
  console.log(req.body);
  transport.sendMail({
    secureConnection: true,
    from: cfg.auth.user,
    to: "alexey@weteam.pro",
    subject: subject,
    text: 'Имя: ' + req.body.name + '\nЭл. адрес: ' + req.body.email + '\nТелефон: ' + req.body.phone + '\nКомментарий: ' + req.body.comment
  }, function(err, response) {
    if(err) {
      console.log(err);
    } else {
      console.log("Message sent: " + response.message);
    }

    res.send('{"status": "ok"}');
  });
});

module.exports = router;
