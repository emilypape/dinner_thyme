module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('followers', [
      {
        id: 1,
        follower_id: 1,
        following_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        follower_id: 2,
        following_id: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        follower_id: 3,
        following_id: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        follower_id: 4,
        following_id: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        follower_id: 5,
        following_id: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        follower_id: 6,
        following_id: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        follower_id: 7,
        following_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        follower_id: 8,
        following_id: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        follower_id: 9,
        following_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        follower_id: 10,
        following_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        follower_id: 11,
        following_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        follower_id: 12,
        following_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('followers', null, {});
  },
};
