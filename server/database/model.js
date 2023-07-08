const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    preferredName: String,
    faculty: String,
    major: String,
    contact: String,
    image: String,
    aboutMe: String,
    courses: [String],
  },
  { versionKey: false }
);

const courseSchema = new mongoose.Schema(
  {
    courseName: String,
  },
  { versionKey: false }
);

const commentSchema = new mongoose.Schema({
  comments: {
    content: String,
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    upvotes: Number,
    replies: [
      {
        content: String,
        sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        reply_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        upvotes: Number,
      },
    ],
  },
});

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    displayName: String,
    uid: String,
  },
  { versionKey: false }
);

const Student = mongoose.model('Student', studentSchema);

const Course = mongoose.model('Course', courseSchema);

const Comment = mongoose.model('Comment', commentSchema);

const User = mongoose.model('User', userSchema);

module.exports = { Student, Course, Comment, User };
