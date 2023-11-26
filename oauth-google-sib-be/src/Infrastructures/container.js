/* istanbul ignore file */

const { createContainer } = require('instances-container');

const Jwt = require('@hapi/jwt');
const pool = require('./database/postgres/pool');
const auth = require('./auth/firebase/auth');

const UserRepositoryPostgres = require('./repository/UserRepositoryPostgres');
const UserAccountRepositoryPostgres = require('./repository/UserAccountRepositoryPostgres');
const FirebaseAuthClient = require('./service/FirebaseAuthClient');
const JwtAuthTokenManager = require('./service/JwtAuthTokenManager');

const UserRepository = require('../Domains/users/UserRepository');
const UserAccountRepository = require('../Domains/user_accounts/UserAccountRepository');
const AuthClient = require('../Applications/service/AuthClient');
const AuthTokenManager = require('../Applications/service/AuthTokenManager');

const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');

const container = createContainer();

container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
      ],
    },
  },
  {
    key: UserAccountRepository.name,
    Class: UserAccountRepositoryPostgres,
    parameter: {
      dependencies: [
        {
          concrete: pool,
        },
      ],
    },
  },
  {
    key: AuthClient.name,
    Class: FirebaseAuthClient,
    parameter: {
      dependencies: [
        {
          concrete: auth,
        },
      ],
    },
  },
  {
    key: AuthTokenManager.name,
    Class: JwtAuthTokenManager,
    parameter: {
      dependencies: [
        {
          concrete: Jwt.token,
        },
      ],
    },
  },
]);

container.register([
  {
    key: LoginUserUseCase.name,
    Class: LoginUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'userAccountRepository',
          internal: UserAccountRepository.name,
        },
        {
          name: 'authTokenManager',
          internal: AuthTokenManager.name,
        },
        {
          name: 'authClient',
          internal: AuthClient.name,
        },
      ],
    },
  },
]);

module.exports = container;
