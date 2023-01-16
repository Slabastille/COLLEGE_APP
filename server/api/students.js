const router = require('express').Router();
const { Students } = require('../db/index');

router.get('/', async (req, res) => {
  try {
    const studentss = await Students.findAll();
    //console.log('here is students', studentss);
    res.send(studentss);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting students', error: err.message });
  }
});
module.exports = router;
