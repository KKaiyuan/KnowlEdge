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

const instructorSchema = new mongoose.Schema(
  {
    preferredName: String,
    faculty: String,
    field: String,
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
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    upvotes: Number,
    /*reply_to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },*/
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

const announcementSchema = new mongoose.Schema(
  {
    announcement: String,
    announcementId: Number,
    announcementTitle: String,
    announcementCourse: String,
  },
  { versionKey: false }
);

const courseDocumentsSchema = new mongoose.Schema(
  {
    courseName: String,
    pageType: String,
    courseInformation: String,
  },
  { versionKey: false }
);

const Student = mongoose.model('Student', studentSchema);

const Instructor = mongoose.model('Instructor', instructorSchema);
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

const Comment = mongoose.model('Comment', commentSchema);

const Announcement = mongoose.model('Announcement', announcementSchema);

const CourseDocuments = mongoose.model('CourseDocument', courseDocumentsSchema);

module.exports = {
  Student,
  Course,
  Comment,
  User,
  Announcement,
  CourseDocuments,
  Instructor,
  Event,
};
