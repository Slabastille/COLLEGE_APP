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

module.exports = router;
