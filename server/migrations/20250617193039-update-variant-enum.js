'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Step 1: Remove old ENUM
    await queryInterface.changeColumn('reservations', 'variant', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    // Step 2: Re-add updated ENUM
    await queryInterface.changeColumn('reservations', 'variant', {
      type: Sequelize.ENUM(
        'bouncecastle',
        'bubblehouse',
        'minibouncecastle',
        'paket1',
        'paket2',
        'paket3',
        'paket4'
      ),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    // Optional rollback
    await queryInterface.changeColumn('reservations', 'variant', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn('reservations', 'variant', {
      type: Sequelize.ENUM('bouncecastle', 'bubblehouse', 'both'),
      allowNull: false,
    });
  }
};