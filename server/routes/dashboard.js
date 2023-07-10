var express = require('express');
var router = express.Router();
const { Course } = require('../database/model');

router.get('/courses', async function (req, res, next) {
  try {
    const courses = await Course.find();
    const courseNames = courses.map((course) => course.courseName);
    return res.status(200).json(courseNames);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
