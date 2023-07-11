var express = require('express');
var router = express.Router();
const { User } = require('../database/model');
const { Student } = require('../database/model');
// Step 3: Extract user information from Firebase (Assuming Firebase Authentication is set up)

// Example endpoint for saving user information
router.get('/:uid', (req, res) => {
  const { uid } = req.params;
  User.findOne({ uid })
    .then((existingUser) => {
      if (existingUser) {
        res.status(200).send(existingUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error: 'Failed to retrieve user from the database' });
    });
});

router.post('/', async (req, res) => {
  try {
    const { uid, email, displayName, profilePicture } = req.body; // Assuming you have a route that receives this data from Firebase
    console.log(req.body);
    // Step 4: Retrieve the user from MongoDB by UID using Mongoose

    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      return res.status(200).send(existingUser);
    }

    const newUser = new User({
      uid: uid,
      email: email,
      displayName: displayName,
    });
    var preferredName = displayName || '';
    var faculty = 'Not specified';
    var major = 'Not specified';
    var contact = email;
    var image =
      profilePicture || 'https://freesvg.org/img/abstract-user-flat-4.png';
    var aboutMe = 'Not specified';

    const student = new Student({
      uid,
      preferredName,
      faculty,
      major,
      contact,
      image,
      aboutMe,
    });
    console.log('saving student model');
    console.log(student);
    student.save();
    console.log('saving user model');
    newUser.save();

    res.status(200).send(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Failed to save user information' });
  }
});

module.exports = router;
