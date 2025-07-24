module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("destination", "gallery", {
      type: Sequelize.JSON,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("destination", "gallery");
  },
};
