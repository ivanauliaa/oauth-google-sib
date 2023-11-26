const AddUser = require('../../Domains/users/entities/AddUser');
const NewAuth = require('../../Domains/user_accounts/entities/NewAuth');
const AuthIdToken = require('../../Domains/user_accounts/entities/AuthIdToken');
const AddUserAccount = require('../../Domains/user_accounts/entities/AddUserAccount');

class LoginUserUseCase {
  constructor({
    userRepository,
    userAccountRepository,
    authTokenManager,
    authClient,
  }) {
    this._userRepository = userRepository;
    this._userAccountRepository = userAccountRepository;
    this._authTokenManager = authTokenManager;
    this._authClient = authClient;
  }

  async execute(useCasePayload) {
    const authIdToken = new AuthIdToken(useCasePayload);

    const authId = await this._authClient.verifyToken(authIdToken.authIdToken);

    const isExists = await this._userAccountRepository
      .getUserAccountExistenceByAuthId(authId);

    let userId;

    if (isExists) {
      userId = await this._userAccountRepository.getUserIdByAuthId(authId);
    } else {
      const authClientUser = await this._authClient.getUserByAuthId(authId);

      const {
        firstName, lastName, profilePhotoUrl, email,
      } = authClientUser;

      const addUser = new AddUser({ firstName, lastName, profilePhotoUrl });
      userId = await this._userRepository.addUser(addUser);

      const addUserAccount = new AddUserAccount({ userId, email, authId });
      await this._userAccountRepository.addUserAccount(addUserAccount);
    }

    const accessToken = await this._authTokenManager
      .createAccessToken({ userId });
    const refreshToken = await this._authTokenManager
      .createRefreshToken({ userId });

    return new NewAuth({ accessToken, refreshToken });
  }
}

module.exports = LoginUserUseCase;
