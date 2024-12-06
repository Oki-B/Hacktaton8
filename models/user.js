'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Profile)
    }
  }
  User.init({
    username:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: `Name is required`
        },
        notNull:{
          msg:`Name must be submitted`
        }
      }
    }, 
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: `Email is required`
        },
        notNull:{
          msg:`Email must be submitted`
        }
      }
    }, 
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: `Password is required`
        },
        notNull:{
          msg:`Password must be submitted`
        }
      }
    }, 
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg: `Role is required`
        },
        notNull:{
          msg:`Role must be submitted`
        }
      }
    }, 
    ProfileId:{
      type: DataTypes.STRING,
      references:{
        model: 'Profiles',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(instance,options){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password= hash

        
      }
    }
  });
  return User;
};