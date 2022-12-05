const Hapi = require('@hapi/hapi');
const controllerRoute = require('../controller/user');

Hapi.server('/save', controllerRoute.save);

module.exports = { Hapi };