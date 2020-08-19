
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    }
 
  });

  Item.associate = function(models) {

    Item.belongsTo(models.Search, {
      foreignKey: {
        allowNull: false
      }
    });
    };


return Item;

};

