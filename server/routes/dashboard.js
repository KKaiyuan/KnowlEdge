var express = require('express');
var router = express.Router();
const { Course, Comment } = require('../database/model');
const ObjectId = require('mongoose').Types.ObjectId;

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

router.get('/comments/:resourceId', async function (req, res, next) {
  const { resourceId } = req.params;

  try {
    const comments = await Comment.findById({
      _id: new ObjectId(resourceId),
    });
    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
