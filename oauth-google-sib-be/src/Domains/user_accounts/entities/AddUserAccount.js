class AddUserAccount {
  constructor(payload) {
    this._verifyPayload(payload);

    const { userId, email, authId } = payload;

    this.userId = userId;
    this.email = email;
    this.authId = authId;
  }

  _verifyPayload({ userId, email, authId }) {
    if (!userId || !authId) {
      throw new Error('ADD_USER_ACCOUNT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof userId !== 'number' || (!!email && typeof email !== 'string')
      || typeof authId !== 'string') {
      throw new Error('ADD_USER_ACCOUNT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddUserAccount;
