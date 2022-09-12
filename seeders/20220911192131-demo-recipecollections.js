module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipecollections', [
      {
        id: 1,
        cookbook_id: 1,
        recipe_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        cookbook_id: 2,
        recipe_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        cookbook_id: 3,
        recipe_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        cookbook_id: 4,
        recipe_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        cookbook_id: 5,
        recipe_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        cookbook_id: 6,
        recipe_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        cookbook_id: 7,
        recipe_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        cookbook_id: 8,
        recipe_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        cookbook_id: 9,
        recipe_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        cookbook_id: 10,
        recipe_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        cookbook_id: 11,
        recipe_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        cookbook_id: 12,
        recipe_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipecollections', null, {});
  },
};
