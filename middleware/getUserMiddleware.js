getUser = (req, res, next) => {
    let id = req.params.id;
    if(id.length != 24){
        return res.send({status:false, msg:"Please enter valid user id.....", data : []});
    }
    next();
}

module.exports = getUser;