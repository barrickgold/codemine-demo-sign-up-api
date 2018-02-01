module.exports = (sequelize, DataTypes) => {
    const Demos = sequelize.define('Demos', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.UUID,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      tableName: 'demos',
      timestamps: false,
    });

  Demos.associate = (models) => {
    Demos.hasMany(models.Entries, {
      foreignKey: 'demoId',
      as: 'entries',
    });
  };

  Demos.getAll = function () {
    return this.findAll({
      include: [
        { model: sequelize.models.Entries, as: 'entries' },
      ],
    });
  };

  Demos.getById = function (id) {
    return this.find({
      where: {
        id,
      },
      include: [
        { model: sequelize.models.Entries, as: 'entries' },
      ],
    });
  };

  Demos.add = function (demoObject) {
    return this.create(
      {
        date: demoObject.date
      }
    );
  };

  return Demos;
};