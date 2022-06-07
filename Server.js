const express = require('express')
const mysql = require('mysql')
const e = require("express");

/*
 * database must be given
 */

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'coredb'
})

database.connect((error) => {
    if (error)
        throw error
    console.log("Connected to database")
})

const app = express()

/*
 * create database table
 */
function create() {
    console.log("Try to create tables")
    app.get('createpoststable', (req, res) => {
        let sql = 'CREATE TABLE IF NOT EXISTS users(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(2255), email VARCHAR(255), PRIMARY KEY (id))'
        database.query(sql, (error, result) => {
            if (error)
                throw error
            console.log("Posts created")
        })
    })
}
create()

app.listen('3000', () => {
    console.log("Server started on port " + 3000)
})