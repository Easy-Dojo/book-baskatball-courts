const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const backendHost = process.env.API_ENDPOINT || 'http://localhost:8080';
const backendConfig = {
    headers: {
        'x-api-key': process.env.X_API_KEY || 'testApiKey',
    },
}
const sessionAge = 60 * 60 * 1000;
const loginSkippedPaths = [
    '/login',
    '/static',
    '/manifest.json',
    '/favicon.ico',
    '/logo',
    '/api/authorize'
];
const isAuthorized = (session) => (!!session.username && session.expire > Date.now());
const loginSkipped = (path) => (loginSkippedPaths.some((skippedPath) => (path.startsWith(skippedPath))));
const simpleLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] user: ${req.session.username || 'unauthorized'} ${req.method} ${req.path}`);
    next();
}
const loginRequired = (req, res, next) => {
    if (isAuthorized(req.session) || loginSkipped(req.path)) {
        next();
    } else {
        res.redirect('/login');
    }
}

const app = express();
app.use(bodyParser());
app.use(cookieSession({
    secret: process.env.COOKIE_SECRET || 'testCookieSecret',
    maxAge: sessionAge,
    name: 'sipu-session',
    cookie: {
        secure: true,
        httpOnly: true,
    },
}));

app.use(simpleLogger);
app.use(loginRequired);

app.post('/api/authorize', createProxyMiddleware({
    target: backendHost,
    ...backendConfig,
    onProxyRes: (proxyRes, req, res) => {
        req.session = {username: req.body.username, expire: Date.now() + sessionAge};
    }
}));

app.use('/api', createProxyMiddleware({
    target: backendHost,
    ...backendConfig
}));

app.use(express.static(path.join(__dirname, './build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(process.env.PORT || 3000);
