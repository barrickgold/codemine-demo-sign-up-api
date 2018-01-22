const knex = require('../connection');

function getAllDemoEntries(demo_day_id) {
  return knex('demo_entry')
  .select('*')
  .where({ demo_day_id });
};

function getSingleDemoEntry(demo_day_id, demo_entry_id) {
  return knex('demo_entry')
  .select('*')
  .where({demo_day_id, demo_entry_id }).first();
};

function addEntry(entry) {
  return knex('demo_entry')
  .insert(entry)
  .returning('*');
};

module.exports = {
    getAllDemoEntries,
    getSingleDemoEntry,
    addEntry
};