module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE reservations 
      MODIFY COLUMN variant ENUM(
        'bouncecastle', 
        'bubblehouse', 
        'minibouncecastle', 
        'hobotnica', 
        'softplay',
        'paket1', 
        'paket2', 
        'paket3', 
        'paket4'
      ) NOT NULL;
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE reservations 
      MODIFY COLUMN variant ENUM(
        'bouncecastle', 
        'bubblehouse', 
        'minibouncecastle', 
        'hobotnica', 
        'paket1', 
        'paket2', 
        'paket3', 
        'paket4'
      ) NOT NULL;
    `);
  }
};
