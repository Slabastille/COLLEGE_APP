const router = require('express').Router();
const { Campuses } = require('../db/index');

router.get('/', async (req, res) => {
  try {
    const campusess = await Campuses.findAll();
    //console.log('here are the campuses', campusess);
    res.json(campusess);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error getting the campuses', error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const campus = await Campuses.findByPk(req.params.id);
    //console.log('here is campus', campussss);
    res.send(campus);
  } catch (err) {
    res.status(500).json({
      message: 'Error getting the single campus',
      error: err.message,
    });
  }
});

module.exports = router;
