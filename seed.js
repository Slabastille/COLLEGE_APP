const db = require('./server/db/database');
const { Students, Campuses } = require('./server/db/');

//console.log('this is student before', Students);
const studentsArr = [
  {
    firstName: 'Moe',
    lastName: 'Moe',
    email: 'moe@gmail.com',
    imgUrl: null,
    gpa: 2.5,
  },
  {
    firstName: 'Lucy',
    lastName: 'Lucy',
    email: 'lucy@gmail.com',
    imgUrl: null,
    gpa: 2.5,
  },
  {
    firstName: 'Ethyl',
    lastName: 'Ethyl',
    email: 'ethyl@gmail.com',
    imgUrl: null,
    gpa: 2.5,
  },
  {
    firstName: 'Larry',
    lastName: 'Larry',
    email: 'larry@gmail.com',
    imgUrl: null,
    gpa: 2.5,
  },
];

const campusesArr = [
  {
    name: 'NYU',
    imgUrl: null,
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'NYCCT',
    imgUrl: null,
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'NYIT',
    imgUrl: null,
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'City College',
    imgUrl: null,
    address: 'NY',
    description: 'insert description here',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [moe, lucy, ethyl, larry] = await Promise.all([
      Students.create(studentsArr[0]),
      Students.create(studentsArr[1]),
      Students.create(studentsArr[2]),
      Students.create(studentsArr[3]),
    ]);

    const [nyu, nycct, nyit, city] = await Promise.all([
      Campuses.create(campusesArr[0]),
      Campuses.create(campusesArr[1]),
      Campuses.create(campusesArr[2]),
      Campuses.create(campusesArr[3]),
    ]);

    await Promise.all([
      moe.setCampus(nyu),
      lucy.setCampus(nyu),
      ethyl.setCampus(city),
      larry.setCampus(nyit),
    ]);

    console.log('Seeding success!');
    db.close();
  } catch (err) {
    console.error('FIX DIS');
    console.error(err);
    db.close();
  }
};

seed();
//module.exports = { seed };
