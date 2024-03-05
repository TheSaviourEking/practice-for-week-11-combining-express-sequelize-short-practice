module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: 'sqlite',
    seedersStorage: 'sequelize',
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    //logging: false
  }
}
