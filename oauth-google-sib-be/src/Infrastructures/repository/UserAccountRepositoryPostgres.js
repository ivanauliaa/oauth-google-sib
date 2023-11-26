const UserAccountRepository = require('../../Domains/user_accounts/UserAccountRepository');
const NotFoundError = require('../../Commons/exceptions/NotFoundError');

class UserAccountRepositoryPostgres extends UserAccountRepository {
  constructor(pool) {
    super();

    this._pool = pool;
  }

  async getUserAccountExistenceByAuthId(authId) {
    const stmt = {
      text: 'SELECT user_id FROM user_accounts WHERE auth_id = $1',
      values: [authId],
    };

    const result = await this._pool.query(stmt);

    return result.rowCount > 0;
  }

  async getUserIdByAuthId(authId) {
    const stmt = {
      text: 'SELECT user_id FROM user_accounts WHERE auth_id = $1',
      values: [authId],
    };

    const result = await this._pool.query(stmt);

    if (!result.rowCount) {
      throw new NotFoundError('user account tidak ditemukan');
    }

    return result.rows[0].user_id;
  }

  async addUserAccount(addUserAccountEntity) {
    const { userId, email, authId } = addUserAccountEntity;

    const stmt = {
      text: `INSERT INTO user_accounts(user_id, email, auth_id)
        VALUES($1, $2, $3)`,
      values: [userId, email, authId],
    };

    await this._pool.query(stmt);
  }
}

module.exports = UserAccountRepositoryPostgres;
