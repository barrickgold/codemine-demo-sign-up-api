module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
      id: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
      },
      demoId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    }, {
      tableName: 'entries',
      timestamps: false,
    });
  
    Entries.associate = (models) => {
      Entries.belongsTo(models.Demos, {
        foreignKey: 'demoId',
        onDelete: 'CASCADE',
      });
    };

    Entries.getAll = function (demoId) {
      return this.findAll({
        where: {
          demoId,
        },
      })
    };

    Entries.getById = function (demoId, id) {
      return this.find(
        {
          where: {
          id,
          demoId,
          },
        }
      )
    };

    Entries.add = function (entryObject) {
      return this.create(
        {
          demoId: entryObject.demoId,
          name: entryObject.name,
          title: entryObject.title,
          position: entryObject.position,
          isDeleted: entryObject.isDeleted
        }
      );
    };

    Entries.edit = async function (entryObject) {
      const [count, updatedEntry] = await this.update(
        {
          demoId: entryObject.demoId,
          name: entryObject.name,
          title: entryObject.title,
          position: entryObject.position,
          isDeleted: entryObject.isDeleted
        }, {
          where: {
            id: entryObject.id,
          },
          returning: true,
        }
      );
      return updatedEntry;
    };
  
    return Entries;
  };
