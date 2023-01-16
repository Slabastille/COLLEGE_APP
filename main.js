const { db } = require('./server/db');
const app = require('./server');
const PORT = 3000;
// const { seed } = require('./seed');

db.sync().then(() => {
  // seed();
  // console.log('db synced');
  app.listen(PORT, () => console.log(`We up on ${PORT}`));
});
