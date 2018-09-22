module.exports = (sequelize, DataTypes) => {
    var Rolls = sequelize.define('Rolls', {
        roll: DataTypes.STRING,
        number: DataTypes.STRING,
        time: DataTypes.STRING,
        username: DataTypes.STRING
    });
    return Rolls;
};