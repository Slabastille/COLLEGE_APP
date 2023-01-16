const router = require('express').Router();
const { Students } = require('../db/index');

router.get('/', async (req, res) => {
  try {
    const students = await Students.findAll();
    //console.log('here is students', studentss);
    res.send(students);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting students', error: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const student = await Students.findByPk(req.params.id);
    //console.log('here is students', studentss);
    res.send(student);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the single student',
      error: err.message,
    });
  }
});
module.exports = router;
