const AuthHandler = require('./handler');
const routes = require('./routes');

const plugin = {
  name: 'auth',
  register: async (server, { container }) => {
    const authHandler = new AuthHandler(container);
    server.route(routes(authHandler));
  },
};

module.exports = plugin;
