exports.up = function(knex, Promise) {
 return Promise.all([
   knex.schema.createTable('matches', function(table) {
     table.increments('id').primary().unsigned();
     table.string('player1_id');
     table.string('player2_id');
     table.integer('player1_score');
     table.integer('player2_score');
     table.timestamps(true, true);
   })
 ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
   knex.schema.dropTable('matches')
 ]);
};