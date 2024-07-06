addUser = (req, res, next) => {
   
    //console.log('-- Middleware --',req);
    
    if(req.body.salutation == undefined){
        return res.send({status:false, msg:"Please enter salutation", data : []});
    }

    
    if(req.body.first_name == undefined){
        return res.send({status:false, msg:"Please enter first name", data : []});
    }
    
    if(req.body.last_name == undefined){
        return res.send({status:false, msg:"Please enter last name", data : []});
    }

    if(req.body.dob == undefined){
        return res.send({status:false, msg:"Please enter date of birth", data : []});
    }
    
    if(req.body.gender == undefined){
        return res.send({status:false, msg:"Please enter gender", data : []});
    }

    if(req.body.email_id == undefined){
        return res.send({status:false, msg:"Please enter email id", data : []});
    }

    if(req.body.mobile_number == undefined){
        return res.send({status:false, msg:"Please enter mobile number", data : []});
    }
    
    // if(req.files.user_photo == undefined){
    //     return res.send({status:false, msg:"Please enter user photo", data : []});
    // }

    if(req.body.address_line_1 == undefined){
        return res.send({status:false, msg:"Please enter address line 1", data : []});
    }

    if(req.body.address_line_2 == undefined){
        return res.send({status:false, msg:"Please enter address line 2", data : []});
    }
        
    if(req.body.city == undefined){
        return res.send({status:false, msg:"Please enter city", data : []});
    }
        
    if(req.body.state == undefined){
        return res.send({status:false, msg:"Please enter state", data : []});
    }

    if(req.body.pin_code == undefined){
        return res.send({status:false, msg:"Please enter pin code", data : []});
    }

    if(req.body.aadhaar_number == undefined){
        return res.send({status:false, msg:"Please enter aadhaar number", data : []});
    }

    // if(req.files.aadhaar_card_photo == undefined){
    //     return res.send({status:false, msg:"Please enter aadhaar card photo", data : []});
    // }

    if(req.body.pan_number == undefined){
        return res.send({status:false, msg:"Please enter pan number", data : []});
    }

    // console.log('--Here--',req.files,'--Files ');
    // if(req.files.pan_photo == undefined){
    //     return res.send({status:false, msg:"Please enter pan photo", data : []});
    // }
    /** */

    next();
}

module.exports = addUser;