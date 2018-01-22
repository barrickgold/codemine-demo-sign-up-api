
exports.up = async function(knex, Promise) {
    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    await knex.schema.createTable('demo_day', (table) => {
        table.uuid('demo_day_id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.dateTime('demo_date').notNullable();
      });
   await knex.schema.createTable('demo_entry', (table) => {
        table.uuid('demo_entry_id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.uuid('demo_day_id').unsigned().references('demo_day_id').inTable('demo_day');
        table.string('presenter_name',255).notNullable();
        table.string('demo_title',255).notNullable();
        table.integer("position",11);
        table.boolean("is_deleted").notNullable();
      });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable('demo_entry')
    await knex.schema.dropTable('demo_day');
 };
