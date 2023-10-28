const User = require('../models/user');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered'
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        // console.log(Object.values(err.errors))
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors
}

exports.signup_get = (req, res) => {
    res.render('signup')
}

exports.login_get = (req, res) => {
    res.render('login')
}

exports.signup_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

    // res.send('new signup')
}

exports.login_post = (req, res) => {
    const { email, password } = req.body;

    res.send('user login')
}