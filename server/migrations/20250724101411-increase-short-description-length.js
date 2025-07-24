module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("destination", "short_description", {
      type: Sequelize.TEXT,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("destination", "short_description", {
      type: Sequelize.STRING(255),
      allowNull: false,
    });
  },
};
