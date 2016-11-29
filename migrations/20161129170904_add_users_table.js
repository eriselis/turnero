exports.up = function(knex, Promise) {
 return Promise.all([
   knex.schema.createTable('users', function(table) {
     table.increments('id').primary().unsigned();
     table.string('slack_id');
     table.string('slack_username');
     table.timestamps(true, true);
   })
 ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
   knex.schema.dropTable('users')
 ]);
};