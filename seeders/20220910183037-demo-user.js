'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: 'Emily',
        last_name: 'Pape',
        profile_picture:
          'https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560',
        username: 'eap6787',
        email: 'eap6787@gmail.com',
        hashed_password: bcrypt.hashSync('Atlas-2021', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        first_name: 'Grace',
        last_name: 'Pape',
        profile_picture:
          'https://imageio.forbes.com/specials-images/imageserve/5db4c7b464b49a0007e9dfac/Photo-of-Maltese-dog/960x0.jpg?fit=bounds&format=jpg&width=960',
        username: 'gap2003',
        email: 'gpape@gmail.com',
        hashed_password: bcrypt.hashSync('cooper2022', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        first_name: 'Christopher',
        last_name: 'Pape',
        profile_picture: 'https://www.cdc.gov/healthypets/images/pets/angry-dog.jpg?_=03873',
        username: 'cpape1998',
        email: 'cpape@gmail.com',
        hashed_password: bcrypt.hashSync('rocky-2022', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        first_name: 'Shannon',
        last_name: 'Pape',
        profile_picture:
          'https://www.news18.com/news/lifestyle/what-you-should-consider-before-deciding-to-get-a-pet-dog-4786160.html',
        username: 'spape1970',
        email: 'sstream1970@gmail.com',
        hashed_password: bcrypt.hashSync('noxisthebest2022', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        first_name: 'Michael',
        last_name: 'Pape',
        profile_picture: 'https://www.dreamstime.com/photos-images/dog.html',
        username: 'mpape1967',
        email: 'mpape@gmail.com',
        hashed_password: bcrypt.hashSync('buckthedog2022', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        first_name: 'Kaitlyn',
        last_name: 'Lush',
        profile_picture: 'https://www.pinterest.com/pin/206039751686433484/',
        username: 'klush1997',
        email: 'klush@gmail.com',
        hashed_password: bcrypt.hashSync('dukethedog2022', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        first_name: 'Warren',
        last_name: 'Tamagri',
        profile_picture: 'https://www.pexels.com/search/dogs/',
        username: 'wtamagri1995',
        email: 'tamagrijr@gmail.com',
        hashed_password: bcrypt.hashSync('emily-atlas', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 8,
        first_name: 'Judene',
        last_name: 'Huffman',
        profile_picture:
          'https://www.countrylife.co.uk/out-and-about/the-best-chicken-breeds-for-first-time-owners-224270',
        username: 'jhuffman2022',
        email: 'jhuffman@gmail.com',
        hashed_password: bcrypt.hashSync('emily-rocks', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 9,
        first_name: 'Charles',
        last_name: 'Huffman',
        profile_picture: 'https://www.autocar.co.uk/car-news/100-best-british-cars-ever-built',
        username: 'chuffman2022',
        email: 'chuffman@gmail.com',
        hashed_password: bcrypt.hashSync('judene-rocks', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 10,
        first_name: 'Jessica',
        last_name: 'Tsu',
        profile_picture: 'https://www.istockphoto.com/photos/goldendoodle',
        username: 'jtsu2022',
        email: 'jtsu@gmail.com',
        hashed_password: bcrypt.hashSync('charlie-the-dog', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 11,
        first_name: 'Allison',
        last_name: 'Smith',
        profile_picture: 'https://www.cuteness.com/article/dachshund-dogs-shed',
        username: 'asmith2022',
        email: 'asmith@gmail.com',
        hashed_password: bcrypt.hashSync('allison-lifts', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 12,
        first_name: 'Bridget',
        last_name: 'Schaefer',
        profile_picture: 'https://imgur.com/gallery/fAEI6',
        username: 'bschaefer',
        email: 'bschaefer@gmail.com',
        hashed_password: bcrypt.hashSync('koda-the-dog', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
