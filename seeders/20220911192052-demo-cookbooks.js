module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cookbooks', [
      {
        id: 1,
        user_id: 1,
        title: 'Comfort Food',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        user_id: 1,
        title: 'Family Gatherings',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        user_id: 1,
        title: 'Holiday Menu',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        user_id: 1,
        title: 'Meal Prep',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        user_id: 5,
        title: 'Night In',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        user_id: 6,
        title: 'Special Occasions',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        user_id: 7,
        title: 'Birthday Dinner',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        user_id: 8,
        title: 'Bulking Food',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        user_id: 9,
        title: 'Lazy Day',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        user_id: 10,
        title: 'Big Events',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        user_id: 11,
        title: 'My Favs',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        user_id: 12,
        title: 'Grandmas Cooking',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cookbooks', null, {});
  },
};
