const db = require('./server/db/database');
const { Students, Campuses } = require('./server/db/');

//console.log('this is student before', Students);
const studentsArr = [
  {
    firstName: 'Moe',
    lastName: 'Moe',
    email: 'moe@gmail.com',
    imgUrl:
      'https://imgix.ranker.com/user_node_img/105/2098976/original/stewie-griffin-tv-characters-photo-u14?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125',
    gpa: 3.2,
  },
  {
    firstName: 'Lucy',
    lastName: 'Lucy',
    email: 'lucy@gmail.com',
    imgUrl:
      'https://imgix.ranker.com/user_node_img/3157/63135616/original/linda-tv-characters-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&h=90&w=90',
    gpa: 2.7,
  },
  {
    firstName: 'Ethyl',
    lastName: 'Ethyl',
    email: 'ethyl@gmail.com',
    imgUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2022-09/27/16/asset/2c2ccdaafdc3/anigif_sub-buzz-764-1664296545-17_preview.gif',
    gpa: 3.9,
  },
  {
    firstName: 'Larry',
    lastName: 'Larry',
    email: 'larry@gmail.com',
    imgUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-image-1662104014.jpg?crop=0.315xw:0.560xh;0.351xw,0.168xh&resize=480:*',
    gpa: 4,
  },
];

const campusesArr = [
  {
    name: 'NYU',
    imgUrl:
      'https://media.istockphoto.com/id/1326661966/vector/back-to-school-concept-group-of-multicultural-pupils-walking-to-school-happy-kids-with.jpg?s=612x612&w=0&k=20&c=JUy1BPU9oZvrM7fqiCVbstkozmL9hy9ZMX42q_QBMRU=',
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'NYCCT',
    imgUrl:
      'https://preview.redd.it/lzi7iueuzva41.png?auto=webp&s=79f226d1a9f78a4d9b276a7a7c469f0fab51ee4f',
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'NYIT',
    imgUrl: 'https://media1.giphy.com/media/9Sgbz4qFrDm0RNZSCy/giphy.gif',
    address: 'NY',
    description: 'insert description here',
  },
  {
    name: 'City College',
    imgUrl:
      'https://media.tenor.com/0CbrpuB0dZEAAAAC/fairly-odd-parents-school.gif',
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
