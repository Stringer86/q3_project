'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('user_name').unique().notNullable();
    table.string('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)');
    table.string('photo_url');
    table.text('bio').defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
