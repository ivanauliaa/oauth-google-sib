class AddUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { firstName, lastName, profilePhotoUrl } = payload;

    this.firstName = firstName;
    this.lastName = lastName;
    this.profilePhotoUrl = profilePhotoUrl;
  }

  _verifyPayload({ firstName, lastName, profilePhotoUrl }) {
    if (!firstName) {
      throw new Error('ADD_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof firstName !== 'string' || (!!lastName && typeof lastName !== 'string')
      || (!!profilePhotoUrl && typeof profilePhotoUrl !== 'string')) {
      throw new Error('ADD_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddUser;
