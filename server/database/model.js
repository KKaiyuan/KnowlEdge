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

const commentSchema = new mongoose.Schema(
  {
    comments: [Object],
  },
  { versionKey: false }
);

const Student = mongoose.model('Student', studentSchema);

const Course = mongoose.model('Course', courseSchema);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Student, Course, Comment };
