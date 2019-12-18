const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../modelos/usuarioModel');
const key = require('./secretKey');
const { check, validationResult } = require('express-validator');
const passport = require('../auth/passport');

var bcryptjs = require('bcryptjs');

router.get(
    "/user/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      usuarioModel
        .findOne({ _id: req.user.id })
        .then(user => {
          res.json(user);
        })
        .catch(err => res.status(404).json({ error: "User does not exist!" }));
    }
  )

router.post('/user/login', function (req, res) {
    
    const userName = req.body.userName;
    var password = req.body.password;
    var salt = bcryptjs.genSaltSync(10);
    var hash = bcryptjs.hashSync(password, salt);
    bcryptjs.compareSync(password, hash);
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

router.post('/user/createAccount',
    [
        check('email').isEmail(),
        check('checkbox').not().isIn([false]),
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
            country: req.body.country,
            checkbox: req.body.checkbox
        })
        newModel.save()
            .then(
                function (datos) {
                    return res.send(datos)
                }
            )
    })

module.exports = router;