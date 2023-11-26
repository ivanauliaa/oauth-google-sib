class AuthIdToken {
  constructor(payload) {
    this._verifyPayload(payload);

    const { authIdToken } = payload;

    this.authIdToken = authIdToken;
  }

  _verifyPayload({ authIdToken }) {
    if (!authIdToken) {
      throw new Error('AUTH_ID_TOKEN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof authIdToken !== 'string') {
      throw new Error('AUTH_ID_TOKEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AuthIdToken;
