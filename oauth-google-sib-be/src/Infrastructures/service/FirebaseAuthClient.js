const AuthClient = require('../../Applications/service/AuthClient');
const AuthClientUser = require('../../Domains/user_accounts/entities/AuthClientUser');
const InvariantError = require('../../Commons/exceptions/InvariantError');
const NotFoundError = require('../../Commons/exceptions/NotFoundError');

class FirebaseAuthClient extends AuthClient {
  constructor(auth) {
    super();
    this._auth = auth;
  }

  async verifyToken(authIdToken) {
    try {
      const decodedToken = await this._auth.verifyIdToken(authIdToken);
      return decodedToken.uid;
    } catch (error) {
      if (error.code === 'auth/id-token-expired' || error.code === 'auth/invalid-id-token'
        || error.code === 'auth/argument-error') {
        throw new InvariantError(error.message);
      }

      throw error;
    }
  }

  async getUserByAuthId(authId) {
    try {
      const user = await this._auth.getUser(authId);

      const { displayName: name, email, photoUrl: profilePhotoUrl } = user;

      return new AuthClientUser({ name, email, profilePhotoUrl });
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        throw new NotFoundError(error.message);
      }

      throw error;
    }
  }
}

module.exports = FirebaseAuthClient;
