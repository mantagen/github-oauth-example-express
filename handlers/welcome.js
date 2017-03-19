const github = require('./../services/github');

module.exports = (req, res) => {
    github.fetchToken(req.query.code, (access_token) => {
        github.getResource('user', access_token, (err, user) => {
            res.render('welcome', {err, user});
        })
    })
}
