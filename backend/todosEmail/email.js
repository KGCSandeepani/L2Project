const nodemailer=require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'parkheresl@gmail.com',
      pass: 'Parkherechuru'
    }
  });

  module.exports.puttoken=(req,res)=>{console.log(req)
    User.findOne({email:req.params.email}).select().exec((err,user)=>{console.log(user)
        if(err) throw err;
        if(!user){
            res.json({sucsess:false,message:'user was not found'})
        }
        else{
            user.temptoken= user.generateJwt();
            user.save((err)=>{
                if(err){
                    res.json({sucsess:false,message:err})
                }
                else{console.log(user.temptoken);
                    res.json({sucsess:true,message:'message was send to your email'})
                    var email={
                        from:'text',
                        to:"text1",
                        subject:"text2",
                        text:'text3'
                    };
                    transporter.sendMail(email, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                          res.json({sucsess:true,message:'message was send to your email'})
                        }
                      });
                }
            })
        }
    })
}