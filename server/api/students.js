const router = require('express').Router();
const { Students, Campuses } = require('../db/index');

router.get('/', async (req, res) => {
  try {
    const students = await Students.findAll({ include: Campuses });
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
    const student = await Students.findByPk(req.params.id, {
      include: Campuses,
    });
    //console.log('here is students', studentss);
    res.send(student);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the single student',
      error: err.message,
    });
  }
});

//delete one student
router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);
    await student.destroy();
    res.send(student);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
