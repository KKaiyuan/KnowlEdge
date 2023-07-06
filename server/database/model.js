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

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
