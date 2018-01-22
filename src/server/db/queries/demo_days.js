const knex = require('../connection');

function getAllDemoDays() {
  return knex('demo_day')
  .select('*');
};

function getSingleDemoDay(demo_day_id) {
  return knex('demo_day')
  .select('*')
  .where({ demo_day_id }).first();
};

function addDemo(demo) {
  return knex('demo_day')
  .insert(demo)
  .returning('*');
};

module.exports = {
    getAllDemoDays,
    getSingleDemoDay,
    addDemo
};