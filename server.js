const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const path = require('path');
const axios = require("axios");
const {createProxyMiddleware} = require('http-proxy-middleware');

const backendHost = process.env.API_ENDPOINT || 'http://localhost:8080';
const backendConfig = {
    headers: {
        'x-api-key': process.env.X_API_KEY || 'testApiKey',
    },
}

const app = express();
app.use(bodyParser());
app.use(cookieSession({
    secret: process.env.COOKIE_SECRET || 'testCookieSecret',
    maxAge: 60 * 60 * 1000,
    name: 'sipu-session',
    cookie: {
        secure: true,
        httpOnly: true,
    },
}));

app.use((req, res, next) => {
    console.log(`${new Date()} ${req.session.username || 'unauthorized'} ${req.method} ${req.path}`);
    const skipLogin = [
        '/login',
        '/static',
        '/manifest.json',
        '/favicon.ico',
        '/logo',
        '/authorize'
    ];
    if (!!req.session.username || skipLogin.some((skipPath) => (req.path.startsWith(skipPath)))) {
        next();
    } else if (req.path === '/logout') {
        req.session.destroy((error) => {
            console.log(`logout failed: ${error}`)
        })
        res.redirect('/login');
    } else {
        res.redirect('/login');
    }
});

app.use('/api', createProxyMiddleware({
    target: backendHost,
    ...backendConfig
}));

app.post('/authorize', (req, res) => {
    return axios.post(`${backendHost}/api/authorize`, req.body, backendConfig).then(() => {
        res.session = {username: req.body.username};
        res.redirect('/home');
    }).catch(() => {
        res.status(403);
        res.send('Invalid username or password')
    });
});

app.use(express.static(path.join(__dirname, './build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});
app.listen(process.env.PORT || 3000);

