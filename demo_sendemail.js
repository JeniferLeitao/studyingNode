var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'jenifer.leitao@gmail.com',
        pass: 'Pennylane'
    }
});

var mailOptions = {
    from: 'jenifer.leitao@gmail.com',
    to: 'rafabandim@gmail.com',
    subject: 'Sending email using Node.js',
    text: 'Mano do ceu, olha o que eu sei fazer'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent: ' + info.response);
    }
});