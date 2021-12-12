const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {jwtSecret , jwtExpire} = require('../config/keys')



exports.signupController = async (req, res) => {
    const { username, email, password, age, weight, height } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email already exists',
            });
        }

        const newUser = new User();
        newUser.username = username;
        newUser.age = age;
        newUser.weight = weight;
        newUser.height = height;
        newUser.email = email;

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        res.json({
            successMessage: 'Registration success. Please signin.',
        });
    } catch (err) {
        console.log('signupController error: ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};
exports.signinController = async (req, res) => {
    
    const {email, password} = req.body;
    

    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                errorMessage : 'User is not exists'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({
                errorMessage : 'Password is not correct'
            })
        }

        const payload = {
            user: {
                _id: user._id
            },
        };

        jwt.sign(payload, jwtSecret, {expiresIn : jwtExpire}, (err,token) =>{
            if(err) console.log('jwt error', err);
            const {_id, username, email, role,age,weight,height} = user;

            res.json({
                token, 
                user : {_id, username, email, role,age,weight,height}
            })
        })

    } catch (err) {
        console.log('sigin in controller error:', err)
        res.status(500).json({
            errorMessage:'Server error'
        })
    }
};