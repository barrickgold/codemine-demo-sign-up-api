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

function updateEntry(entry) {
  console.log("queries",entry);
  return knex('demo_entry')
  .update(entry)
  .where({ demo_entry_id: entry.demo_entry_id })
  .returning('*');
};

module.exports = {
    getAllDemoEntries,
    getSingleDemoEntry,
    addEntry,
    updateEntry
};