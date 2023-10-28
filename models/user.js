const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'minimum password length is six']
    },
});


userSchema.post('save', (doc, next) => {
    console.log('new user created and saved', doc);
    next();
})


// before save database
userSchema.pre('save', function (next) {
    console.log('user about created & save', this)
    next();
})

const User = mongoose.model('user', userSchema);
module.exports = User;