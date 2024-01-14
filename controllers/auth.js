const mongodb   = require('mongodb');
const bcrypt    = require('bcryptjs');
const User      = require('../models/authuser');

exports.getLogin = (req, res, next) => {
    console.log('-: isLoggedIn Form :-');
    res.render('./auth/loginfrm', {csrfToken:req.csrfToken()});
    //res.redirect('/loginsbmt');
}

exports.getLogout = (req, res, next) => {
    //req.session.isLoggedIn = false;
    req.session.destroy();
    console.log('-: isLoggedOut :-')
    res.redirect('/');
}

exports.getSignup = (req, res, next) => {
    res.render('./auth/signupfrm', {csrfToken:req.csrfToken()});
}

exports.postLogin = (req, res, next) => {
    const username    = req.body.username;
    const password    = req.body.password;

    return User.findOne({username:username})
        .then(data=>{
            if(!data){
                return res.redirect('/login');
            }

            return bcrypt.compare(password, data.password)
                        .then(result=>{
                            if(!result){
                                return res.redirect('/login');
                            }

                            req.session.isLoggedIn  = true;
                            req.session.user        = data;
                            return res.redirect('/');
                        })
                        .catch(err=>console.log(err));

        })
        .catch(err=>console.log(err));

}


exports.postSignup = (req, res, next) => {
    
    const fullname    = req.body.fullname;
    const username    = req.body.username;
    const password    = req.body.password;

    return bcrypt.hash(password, 12)
            .then(pwd=>{
                const authuser = new User({fullname: fullname, username: username, password: pwd});
                authuser.save()
                        .then(result=>{
                            console.log(result);
                            return res.redirect('/');
                        })
                        .catch(err=>{
                            console.log(err);
                        });
                
            })
            .catch(err=>console.log(err));
}


