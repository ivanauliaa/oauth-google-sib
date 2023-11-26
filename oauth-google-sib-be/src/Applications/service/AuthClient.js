class AuthClient {
  async verifyToken(authIdToken) {
    throw new Error('AUTHENTICATION_CLIENT.METHOD_NOT_IMPLEMENTED');
  }

  async getUserByAuthId(authId) {
    throw new Error('AUTHENTICATION_CLIENT.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = AuthClient;
