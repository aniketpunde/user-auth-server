const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const _authuser = require('../config/userConfig');

exports.signup = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ first_name, last_name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Oops something went wrong', error });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }

    generateToken(email).then((token)=>{
        res.status(200).send({ message: 'Sign in successful', token });
    }).catch((error)=>{
        res.status(400).send({ message: 'Error signing in', error });
    })
  } catch (error) {
    res.status(400).send({ message: 'Oops something went wrong', error });
  }
};

const generateToken = (email) => {
    return new Promise((resolve, reject) => {
        let today = new Date().toJSON().split('T');
        var env = process.env.NODE_ENV || 'local';
        let encryptedCode = _authuser.encodeEmail(`${email}`);
        const Token = jwt.sign({
            email: encryptedCode.toString(),
            platform: env.toString(),
            date: today[0] // only date
        }, config.project.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        let encryptedToken = _authuser.dataencryption.encryptedString(Token);
        resolve(encryptedToken);
    })
}