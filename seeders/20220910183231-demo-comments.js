module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [
      {
        id: 1,
        recipe_id: 1,
        user_id: 12,
        comment_text: 'Wow, this looks delicious!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        recipe_id: 2,
        user_id: 11,
        comment_text: 'Making this for dinner!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        recipe_id: 3,
        user_id: 10,
        comment_text: 'I could eat the whole thing!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        recipe_id: 4,
        user_id: 9,
        comment_text: 'Will this serve a family of 5?',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        recipe_id: 5,
        user_id: 8,
        comment_text: 'Cant wait to try!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        recipe_id: 6,
        user_id: 7,
        comment_text: 'Delicious!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        recipe_id: 7,
        user_id: 6,
        comment_text: 'Going to the store for ingredients now!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        recipe_id: 8,
        user_id: 5,
        comment_text: 'Bringing this to Thanksgiving!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        recipe_id: 9,
        user_id: 4,
        comment_text: 'Adding this to my diet!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        recipe_id: 10,
        user_id: 3,
        comment_text: 'Amazing Recipe!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        recipe_id: 11,
        user_id: 2,
        comment_text: 'I made this and wow!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        recipe_id: 12,
        user_id: 1,
        comment_text: 'An everyday staple!',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {});
  },
};
