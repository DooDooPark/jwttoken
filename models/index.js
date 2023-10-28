const mongoose = require('mongoose');
const connect = require('../dbconfig');
// database 유저정보 + 비밀번호를 설정.

const url = 'mongodb://' + connect.username + ':' + connect.password
    + '@' + connect.url + '/' + connect.dbname;

const dbconnect = () => {
    mongoose.connect(
        url,
        error => {
            if (error) {
                console.log("mongodb connect error", error);
            } else {
                console.log('mongodb-connect-succes');
            }
        }
    )
}

mongoose.connection.on('error', error => {
    console.log('mongodb connection error', error);
})

mongoose.connection.on('disconnected', () => {
    console.error('mongodb disconnected');
})

module.exports = dbconnect;