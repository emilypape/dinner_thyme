module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('likes', [
      {
        id: 1,
        recipe_id: 1,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        recipe_id: 2,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        recipe_id: 3,
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        recipe_id: 4,
        user_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        recipe_id: 5,
        user_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        recipe_id: 6,
        user_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        recipe_id: 7,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        recipe_id: 8,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        recipe_id: 9,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        recipe_id: 10,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        recipe_id: 11,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        recipe_id: 12,
        user_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('likes', null, {});
  },
};
