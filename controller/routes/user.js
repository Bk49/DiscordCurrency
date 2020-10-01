const express = require('express')
const { route, response } = require('../app')
const router = express.Router()
const userDB = require("../model/userModel")

// Path ./user/money
router.route("/money")
    .get((req,res)=>{
        const usertag = req.query.usertag
        userDB.getUserMoney(usertag).then(response =>{
            res.status(200).send(response)
        }).catch(err=>{
            console.log(err)
        })
    })
    .put((req,res)=>{
        const usertag = req.query.usertag
        const money = req.query.money
        userDB.addMoreMoney(usertag, money).then(response =>{
            res.status(200).send({"status" : "sucess"})
        }).catch(err=>{
            console.log(err)
        })
    })

    // DEFAULT ROUTE
// router.route("/")
//     .get((req, res)=>{
//         res.status.send
//     })



module.exports = router