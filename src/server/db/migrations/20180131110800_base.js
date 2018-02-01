module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface
        .sequelize.query('create extension if not exists "uuid-ossp"');
  
      await queryInterface.createTable('demos', {
        id: {
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('now()'),
        },
      });
  
      await queryInterface.createTable('entries', {
        id: {
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        demoId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              key: 'id',
              model: 'demos',
            },
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          position: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          isDeleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('entries');
      await queryInterface.dropTable('demos');
    },
  };
