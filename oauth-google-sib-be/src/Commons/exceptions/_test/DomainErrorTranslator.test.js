const DomainErrorTranslator = require('../DomainErrorTranslator');
const InvariantError = require('../InvariantError');

describe('DomainErrorTranslator', () => {
  it('should transalte error correctly', () => {
    expect(DomainErrorTranslator.translate(new Error('ADD_USER_ACCOUNT.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity add user account karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('ADD_USER_ACCOUNT.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity add user account karena tipe data tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('AUTH_CLIENT_USER.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity auth client user karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('AUTH_CLIENT_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity auth client user karena tipe data tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('AUTH_ID_TOKEN.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity auth id token karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('AUTH_ID_TOKEN.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity auth id token karena tipe data tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity new auth karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity new auth karena tipe data tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('ADD_USER.NOT_CONTAIN_NEEDED_PROPERTY')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity add user karena properti yang dibutuhkan tidak ada'));
    expect(DomainErrorTranslator.translate(new Error('ADD_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('tidak dapat membuat entity add user karena tipe data tidak sesuai'));
  });

  it('should return original error when error message is not needed to translate', () => {
    const error = new Error('some_error_message');
    const translatedError = DomainErrorTranslator.translate(error);

    expect(translatedError).toStrictEqual(error);
  });
});
