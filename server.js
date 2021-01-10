const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
const path = require('path');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require('dotenv').config();


const app = express();
      app.use(cors());
      app.use(express.json());
      app.use(express.static(path.join(__dirname, "client", "build")));
      app.use(router);

router.use(bodyParser.urlencoded({ limit: '52428800', extended: true }));
router.use(bodyParser.json({limit: '52428800'}));

const myOAuth2Client = new OAuth2(
  process.env.CLIENTID,
  process.env.CLIENTSECRET,
  process.env.REDIRECTURL
  )

  myOAuth2Client.setCredentials({
    refresh_token: process.env.REFRESHTOKEN
    });

    const myAccessToken = myOAuth2Client.getAccessToken()

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
           type: "OAuth2",
           user: process.env.USER,
           clientId: process.env.CLIENTID,
           clientSecret: process.env.CLIENTSECRET,
           refreshToken: process.env.REFRESHTOKEN,
           accessToken: myAccessToken
      }});

      router.post('/sendemail', (req, res, next) => {
        var name = req.body.name
        var email = req.body.email
        var subject = req.body.subject
        var message = req.body.message
        var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `

        const mailOptions = {
          from: name,
          to: process.env.USER,
          subject: subject,
          text: content
          }
        transport.sendMail(mailOptions,function(err, data){
            if(err){
            res.send({
            message:err
            })
            }else{
            transport.close();
            res.send({
            message:'Email has been sent: check your inbox!'
            })
            }
            })
      })

      router.get('/',function(req,res){
        res.send('Hello to cindys api')
        });
      

     

const PORT = process.env.PORT || 5000;

app.listen(PORT, function (req, res) {
    console.log(`Listening on port ${PORT}`);
    })