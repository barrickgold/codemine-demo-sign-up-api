const uuidv4 = require('uuid/v4');
const demo_day_uuid = uuidv4();

exports.seed = async (knex, Promise) => {
  await knex('demo_entry').del();
  await knex('demo_day').del();
  await knex('demo_day').insert({
      demo_day_id: demo_day_uuid,
      demo_date: '01/12/2018 12:00:00 PM'
    });
  const rows = [
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Todd',
      demo_title: 'Diagramming Tools',
      position: 1,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Joel',
      demo_title: 'Memoization Tools',
      position: 2,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Nick',
      demo_title: 'BI and Data Visualization Best and Worst Practices',
      position: 3,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Jed',
      demo_title: 'Terraform',
      position: 4,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Jim',
      demo_title: 'AWS Glacier',
      position: 5,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Junda',
      demo_title: 'Meautiful Features',
      position: 6,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Mario',
      demo_title: 'Expo',
      position: 7,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Shawn',
      demo_title: 'Bitbucket Commits',
      position: 8,
      is_deleted: false,
    },
    {
      demo_entry_id: uuidv4(),
      demo_day_id: demo_day_uuid,
      presenter_name: 'Alan',
      demo_title: 'Incremental Data Upload to S3',
      position: 9,
      is_deleted: false,
    },
  ]; 
  await knex.batchInsert('demo_entry', rows)
};