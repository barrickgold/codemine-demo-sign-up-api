const uuidv4 = require('uuid/v4');
const demo_day_uuid = uuidv4();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('demos', [
      {
        id: demo_day_uuid,
        date: '01/12/2018 12:00:00 PM',
      },
    ]);

    await queryInterface.bulkInsert('entries', [
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Todd',
        title: 'Diagramming Tools',
        position: 1,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Joel',
        title: 'Memoization Tools',
        position: 2,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Nick',
        title: 'BI and Data Visualization Best and Worst Practices',
        position: 3,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Jed',
        title: 'Terraform',
        position: 4,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Jim',
        title: 'AWS Glacier',
        position: 5,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Junda',
        title: 'Meautiful Features',
        position: 6,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Mario',
        title: 'Expo',
        position: 7,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Shawn',
        title: 'Bitbucket Commits',
        position: 8,
        isDeleted: false,
      },
      {
        id: uuidv4(),
        demoId: demo_day_uuid,
        name: 'Alan',
        title: 'Incremental Data Upload to S3',
        position: 9,
        isDeleted: false,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('entries', null, {});
    await queryInterface.bulkDelete('demos', null, {});
  },
};