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
        profile_picture:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F6157254766001%2F2ec96597-1cc9-4403-a2d1-b6fba8deb6d5%2F352a8289-837c-4e31-bab9-dd475b098d8d%2F1280x720%2Fmatch%2Fimage.jpg',
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
          'https://www.petlandflorida.com/wp-content/uploads/2019/09/Petland_Florida_Cavalier_King_Charles_Spaniel_puppy.jpg',
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
        profile_picture:
          'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mini-2-top100.jpg?itok=O4YUUqo0',
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
        profile_picture:
          'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F04%2F15%2Fgoldendoodle-taking-selfie-1305913764-2000.jpg',
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
        profile_picture:
          'https://media1.popsugar-assets.com/files/thumbor/YXV-1X-ni-0i2Lrry7fInDIcVBY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/30/739/n/44701584/2bce52550de3dc2c_GettyImages-547467978/i/Cutest-Dachshund-Photos.jpg',
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
