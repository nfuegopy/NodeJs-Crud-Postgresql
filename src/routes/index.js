const express = require('express');

const personsRouter = require('./persons.router');

function routerApi(app) {
    const route = express.Router();
    app.use('/api/v1', route);
    route.use('/persons', personsRouter);
}

module.exports = routerApi;