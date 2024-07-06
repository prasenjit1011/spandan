
const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const authuserSchema = new Schema({
    salutation:{
        type: String, 
        required: true
    },
    first_name:{
        type: String, 
        required: true
    },
    middle_name:{
        type: String, 
        required: false
    },
    last_name:{
        type: String, 
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    place_of_birth:{
        type: String, 
        required: false
    },
    gender:{
        type: String, 
        required: true
    },
    email_id:{
        type: String, 
        required: true
    },
    mobile_number:{
        type: String, 
        required: true
    },
    alternate_contact_number:{
        type: String, 
        required: false  
    },
    user_photo:{
        type: Object, 
        required: false
    },
    address_line_1:{
        type: String, 
        required: true
    },
    address_line_2:{
        type: String, 
        required: true
    },
    city:{
        type: String, 
        required: true
    },
    state:{
        type: String, 
        required: true
    },
    pin_code:{
        type: String, 
        required: true
    },
    aadhaar_number:{
        type: String, 
        required: true
    },
    aadhaar_card_photo:{
        type: Array,
        required: false,
        default: []
    },
    pan_number:{
        type: String, 
        required: true
    },
    pan_photo:{
        type: Array,
        required: false,
        default: []
    }
});

module.exports = mongoose.model('users', authuserSchema);


