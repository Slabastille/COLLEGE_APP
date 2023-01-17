const router = require('express').Router();
const { Campuses, Students } = require('../db/index');

//retrieve all campuses
router.get('/', async (req, res) => {
  try {
    const campusess = await Campuses.findAll({ include: [Students] });
    //console.log('here are the campuses', campusess);
    res.json(campusess);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the campuses', error: err.message });
  }
});
//retrieve one campus
router.get('/:id', async (req, res) => {
  try {
    const campus = await Campuses.findByPk(req.params.id, {
      include: [Students],
    });
    //console.log('here is campus', campussss);
    res.send(campus);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the single campus',
      error: err.message,
    });
  }
});

//delete one campus
router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.id);
    await campus.destroy();
    res.send(campus);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
