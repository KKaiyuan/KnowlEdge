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
      /*.populate({
        path: 'comments.reply_to',
        model: 'User',
      })*/
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
    _id: new ObjectId(),
    content,
    sender,
    upvotes: 1,
  };

  try {
    let updatedComment;
    if (reply_to) {
      comment.reply_to = reply_to.person_id;

      const getAllComments = await Comment.findOne({
        _id: new ObjectId(resourceId),
        'comments._id': new ObjectId(reply_to.comment_id),
      }).lean({ toJSON: { virtuals: true } });

      let allComments = getAllComments.comments;

      for (let i = 0; i < allComments.length; i++) {
        if (new ObjectId(reply_to.comment_id).equals(allComments[i]._id)) {
          if (!allComments[i].replies) {
            allComments[i].replies = [];
          }
          allComments[i].replies.push(comment);
          break;
        }
      }

      updatedComment = await Comment.findOneAndUpdate(
        { _id: new ObjectId(resourceId) },
        { $set: { comments: allComments } },
        { new: true }
      );
    } else {
      updatedComment = await Comment.findOneAndUpdate(
        { _id: new ObjectId(resourceId) },
        { $push: { comments: comment } },
        { new: true, upsert: true }
      );
    }

    await Comment.populate(updatedComment, {
      path: 'comments.sender',
      model: 'User',
    });

    await Comment.populate(updatedComment, {
      path: 'comments.replies.sender',
      model: 'User',
    });

    await Comment.populate(updatedComment, {
      path: 'comments.replies.reply_to',
      model: 'User',
    });

    return res.status(200).json(updatedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
