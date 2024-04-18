const {model,Schema} = require('mongoose')

const userShema = new Schema({
    name : String,
    password : Number
});


const User = model('user',userShema);

module.exports = User;