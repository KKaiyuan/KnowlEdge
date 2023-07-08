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
    const comments = await Comment.findOne({})
      .populate({
        path: 'comments.sender',
        model: 'User',
      })
      .populate({
        path: 'comments.replies.sender',
        model: 'User',
      })
      .populate({
        path: 'comments.replies.reply_to',
        model: 'User',
      });

    return res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/comments/', async function (req, res, next) {
  const { resourceId, content, sender, reply_to } = req.body;

  // Check if any required variables are null
  if (!resourceId || !content || !sender) {
    return res.status(400).json({ error: 'Missing required data' });
  }

  const comment = {
    content,
    sender,
    upvotes: 1,
  };

  if (reply_to) {
    comment.reply_to = reply_to;
  }
  if (replies) {
    comment.replies = [];
  }

  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: new ObjectId(resourceId) },
      { $push: { comments: comment } },
      { new: true, upsert: true }
    );
    return res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
