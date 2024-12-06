'use strict';
const {
  Model,Op 
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User,{ foreignKey: "UserId" })
    }
  }
  Profile.init({
    name:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`Name is required`
        },
        notNull:{
          msg:`Name must be submitted`
        }
      }
    },
    age:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
         msg:`Age is required`
        }, isInt: {
          msg: 'Age must be an integer'
        },
        min: {
          args: [7],
          msg: 'Age must be greater than 6'
        },
      }
    },
    phone_number: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`Phone number is required`
        },
        notNull:{
          msg:`Phone number Must be submitted`
        }
      }
    },
    profile_picture:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:`Profile Picture is required`
        },
        notNull:{
          msg:`Profile picture must be submitted`
        }
      }
    } ,
    UserId:{
      type:DataTypes.INTEGER,
      references:{
        model:'Users',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};