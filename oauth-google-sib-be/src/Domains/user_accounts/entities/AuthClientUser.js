class AuthClientUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, email, profilePhotoUrl } = payload;

    const splittedName = name.split(' ');

    const [firstName] = splittedName;
    this.firstName = firstName;
    this.lastName = splittedName.slice(1).join(' ');
    this.email = email;
    this.profilePhotoUrl = profilePhotoUrl;
  }

  _verifyPayload({ name, email, profilePhotoUrl }) {
    if (!name) {
      throw new Error('AUTH_CLIENT_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || (!!email && typeof email !== 'string')
      || (!!profilePhotoUrl && typeof profilePhotoUrl !== 'string')) {
      throw new Error('AUTH_CLIENT_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AuthClientUser;
