/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'INT',
      primaryKey: true,
      sequenceGenerated: {
        precedence: 'ALWAYS'
      },
    },
    first_name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    last_name: {
      type: 'VARCHAR(50)',
    },
    profile_photo_url: {
      type: 'TEXT',
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
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
