const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    uid: { type: String, ref: 'User' },
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

const Student = mongoose.model('Student', studentSchema);

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    displayName: { type: String, required: true },
  })
);

const eventSchema = new mongoose.Schema(
  {
    userId: { type: String, ref: 'User' },
    title: String,
    start: String,
    end: String,
    location: String,
    links: [
      {
        name: String,
        url: String,
      },
    ],
    type: String,
    course: String,
    published: String,
    deadline: String,
    desc: String,
    course: String,
  },
  { versionKey: false }
);

const Event = mongoose.model('Event', eventSchema);

const Course = mongoose.model('Course', courseSchema);

module.exports = { Student, Course, User, Event };

