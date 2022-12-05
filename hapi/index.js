const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
// const routes = require('./routes/user');
const controllerRoute = require('./controller/user');

// const userData = require('./userData/userData');
const init = async () => {

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.API_HOST
  });

  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected....'))
    .catch(err => console.log(err));

  server.route({
    method: 'POST',
    path: '/v1/users',
    handler: controllerRoute.save,
  });
 
  await server.start();
  console.log('Server running on port',process.env.PORT);

};

process.on('unhandledRejection', (err) => {
  console.log(err, "This is duplicate email");
  process.exit(1);
});

init();
