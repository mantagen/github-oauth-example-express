const express = require('express');
const qs = require('querystring');
const welcome = require('./handlers/welcome');

const router = express.Router();

router.route('/login').get((req, res) => {
    const query = qs.stringify({
        client_id: process.env.CLIENT_ID,
        redirect_uri: process.env.BASE_URL + '/welcome',
        scope: 'user',
    });
    res.redirect('https://github.com/login/oauth/authorize?' + query);
});

router.route('/welcome').get(welcome);

module.exports = router;
