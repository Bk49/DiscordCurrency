const { query } = require('express')
const db = require('../../promisify/databaseConfig')

const userDB = {
    async getUserMoney(usertag){
        const conn = db.getConnection()
        const queryStr = 'SELECT money FROM user WHERE usertag = ?'
        return conn.query(queryStr, usertag).then(rows =>{
            return rows
        }).catch(err =>{
            return err
        }).finally(()=>conn.close())
    },

    async addMoreMoney(usertag, money){
        const conn = db.getConnection()
        const queryStr1 = `SELECT money FROM user WHERE usertag = ?`
        const queryStr2 = `UPDATE user SET money = ? WHERE usertag = ? `
        return conn.query(queryStr1, usertag).then((rows)=>{
            return rows[0].money
        }).then((moneyLeft)=>{
            const total = moneyLeft+money
            return conn.query(queryStr2, [total, usertag])
        }).then(rows=>{
            return rows.affectedRows
        }).catch(err=>{
            return err   
        }).finally(()=>{conn.close()})
    },

    async findUser(usertag){
        const conn = db.getConnection()
        const queryStr = `SELECT * FROM user WHERE usertag = ?`
        return conn.query(queryStr, usertag).then(rows=>{
            return rows[0].usertag
        }).catch(err=>{
            return err
        }).finally(()=> conn.close())
    },
    
    async addUser(usertag){
        const conn = db.getConnection()
        const queryStr = `INSERT INTO user(usertag) VALUES (?)`
        return conn.query(queryStr, usertag).then(rows=>{
            return rows
        }).catch(err=>{
            return err
        }).finally(()=> conn.close())
    }
}

module.exports = userDB