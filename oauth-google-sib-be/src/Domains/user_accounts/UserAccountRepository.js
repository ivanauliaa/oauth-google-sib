class UserAccountRepository {
  async getUserAccountExistenceByAuthId(authId) {
    throw new Error('USER_ACCOUNT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getUserIdByAuthId(authId) {
    throw new Error('USER_ACCOUNT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async addUserAccount(addUserAccountEntity) {
    throw new Error('USER_ACCOUNT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = UserAccountRepository;
