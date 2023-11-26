const InvariantError = require('./InvariantError');

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  'ADD_USER_ACCOUNT.NOT_CONTAIN_NEEDED_PROPERTY':
    new InvariantError('tidak dapat membuat entity add user account karena properti yang dibutuhkan tidak ada'),
  'ADD_USER_ACCOUNT.NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('tidak dapat membuat entity add user account karena tipe data tidak sesuai'),
  'AUTH_CLIENT_USER.NOT_CONTAIN_NEEDED_PROPERTY':
    new InvariantError('tidak dapat membuat entity auth client user karena properti yang dibutuhkan tidak ada'),
  'AUTH_CLIENT_USER.NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('tidak dapat membuat entity auth client user karena tipe data tidak sesuai'),
  'AUTH_ID_TOKEN.NOT_CONTAIN_NEEDED_PROPERTY':
    new InvariantError('tidak dapat membuat entity auth id token karena properti yang dibutuhkan tidak ada'),
  'AUTH_ID_TOKEN.NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('tidak dapat membuat entity auth id token karena tipe data tidak sesuai'),
  'NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY':
    new InvariantError('tidak dapat membuat entity new auth karena properti yang dibutuhkan tidak ada'),
  'NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('tidak dapat membuat entity new auth karena tipe data tidak sesuai'),
  'ADD_USER.NOT_CONTAIN_NEEDED_PROPERTY':
    new InvariantError('tidak dapat membuat entity add user karena properti yang dibutuhkan tidak ada'),
  'ADD_USER.NOT_MEET_DATA_TYPE_SPECIFICATION':
    new InvariantError('tidak dapat membuat entity add user karena tipe data tidak sesuai'),
};

module.exports = DomainErrorTranslator;
