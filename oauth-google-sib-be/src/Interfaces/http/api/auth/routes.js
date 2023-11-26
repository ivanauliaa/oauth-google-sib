const routes = (handler) => [
  {
    method: 'POST',
    path: '/auth',
    handler: handler.loginUserHandler,
  },
];

module.exports = routes;
