const express = require('express');
const route = express.Router();
const personsController = require('../controllers/persons.controller');

route
    .get('/', personsController.get)
    .get('/:id', personsController.getById)
    .post('/', personsController.create)
    .put('/:id', personsController.update)
    .delete('/:id', personsController._delete)

module.exports = route;
