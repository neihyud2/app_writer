var connect = require('../models/db.model')

const { nanoid } = require('nanoid')
module.exports.show = function (req, res) {
    res.render('posts/editor')
}

module.exports.save = function (req, res) {
    if (!req.body.title) {
        req.body.title = 'Name Doc'
    }
    let sql = 
        `INSERT INTO posts (title, content) VALUES 
        ('${req.body.title}', '${req.body.myTextarea}')`
    connect.query(sql, function(err, result) {})
    res.redirect('/editor?sucsess=true')
}