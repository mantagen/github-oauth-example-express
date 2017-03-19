const express = require('express');
const handlebars = require('express-handlebars');

require('env2')('./config.env');

const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

app.engine('html', handlebars({
    defaultLayout: 'default',
    layoutsDir: 'views/layout',
    partialsDir: 'views/partials',
    extname: '.html',
}));
app.set('view engine', 'html');

app.use(express.static('public'));
app.use('/', routes);

app.listen(port, (err) => {

    if (err) {
        throw err;
    }

    console.log('Now listening on port: ' + port);
});
