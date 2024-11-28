const user = require('../model/user');

module.exports.user_signup = function(req,res){
    return res.render('userSignin',{title:"codial|signin"});
}

module.exports.create = async function(req,res){
    console.log(req.body);
     if(req.body.password != req.body.confirm_password)
     {
        return res.redirect('back');
     }
     const answer = await user.findOne({email: req.body.email}).exec();

     if(!answer)
     {
        user.create(req.body).then((user)=>{
            if(user)
                return res.redirect('users/user_signup');
            return res.redirect('back');
        }) 
     }
     else{
        res.redirect('back');
     }
}

module.exports.Login = function(req,res){
    return res.render('userSignup',{title:"codial|signin"});
}

module.exports.create_session= function(req,res){
    const user = user.findOne({email:req.body.email}).exec();
    if(user)
    {
        console.log("ok");
    }
}
