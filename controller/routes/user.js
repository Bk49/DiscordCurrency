const express = require('express')
const { route, response } = require('../app')
const router = express.Router()
const userDB = require("../model/userModel")
const ERROR = require('../response/errors')
const SUCCESS = require('../response/success')

// Path ./user/money
router.route("/money")
    .get((req,res)=>{
        const usertag = req.query.usertag
        if(usertag == undefined) return res.status(400).send(ERROR.badReq())
        userDB.getUserMoney(usertag).then(response =>{
            if(response.length == 0) res.status(404).send(ERROR.notFound())
            else res.status(200).send(response)
        })
    })
    .put((req,res)=>{
        const usertag = req.query.usertag
        const money = req.query.money
        if(usertag == undefined || money == undefined) return res.status(400).send(ERROR.badReq())
        userDB.addMoreMoney(usertag, parseFloat(money)).then(response =>{
            if(response != 1) res.status(404).send(ERROR.notFound())
            else res.status(201).send(SUCCESS.noContent())
        })
    })

router.route('/')
    .get((req,res)=>{
        const usertag = req.query.usertag
        if(usertag == undefined || usertag == "") usertag = '%'
        userDB.findUser(usertag).then(res=>{
            res.status(201).send(SUCCESS.noContent())
        })
    })

    // DEFAULT ROUTE
// router.route("/")
//     .get((req, res)=>{
//         res.status.send
//     })



module.exports = router