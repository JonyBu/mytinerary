const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../modelos/usuarioModel');
const key = require('./secretKey');

const { check, validationResult } = require('express-validator');

router.post('/user/login', function (req, res) {
    const userName = req.body.userName;

    usuarioModel.findOne({ userName: userName })
        .then(user => {
            if (!user) {
                res.send({ message: 'userName no existe' })
            }
            if (user.password === req.body.password) {
                const payload = {
                    id: user._id,
                    userName: user.userName
                };
                const options = { expiresIn: 2592000 };
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,
                    (err, token) => {
                        if (err) {
                            res.json({
                                secess: false,
                                token: 'There was an error'
                            })
                        } else {
                            res.json({
                                secess: true,
                                token: token
                            })
                        }
                    }
                )
            } else {
                res.send({ message: 'password incorrecto' })
            }
        })
        .catch(err => {
            return res.send(err)
        })
})

router.post('/user/createAccount', [
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
    ], function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

    var newModel = new usuarioModel({
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        profilePic: req.body.profilePic,
        firsName: req.body.firsName,
        lastName: req.body.lastName,
        country: req.body.country
    })
    newModel.save()
        .then(
            function (datos) {
                return res.send(datos)
            }
        )
})


module.exports = router;