const UserRepository = require('../../Domains/users/UserRepository');

class UserRepositoryPostgres extends UserRepository {
  constructor(pool) {
    super();

    this._pool = pool;
  }

  async addUser(addUserEntity) {
    const { firstName, lastName, profilePhotoUrl } = addUserEntity;

    const stmt = {
      text: `INSERT INTO users(first_name, last_name, profile_photo_url)
        VALUES($1, $2, $3) RETURNING id`,
      values: [firstName, lastName, profilePhotoUrl],
    };

    const result = await this._pool.query(stmt);

    return result.rows[0].id;
  }
}

module.exports = UserRepositoryPostgres;
