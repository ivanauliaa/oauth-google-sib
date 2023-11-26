/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('user_accounts', {
    user_id: {
      type: 'INT',
      primaryKey: true,
    },
    email: {
      type: 'VARCHAR(50)',
      unique: true,
    },
    auth_id: {
      type: 'TEXT',
      notNull: true,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.addConstraint(
    'user_accounts',
    'fk_user_accounts.user_id_users.id',
    'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE',
  );
};

exports.down = (pgm) => {
  pgm.dropTable('user_accounts');
};
