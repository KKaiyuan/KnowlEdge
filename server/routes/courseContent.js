var express = require('express');
var router = express.Router();
const { CourseDocuments } = require('../database/model');
const ObjectId = require('mongoose').Types.ObjectId;




router.get('/:courseIdentifier', async function (req, res, next) {
    
         const [firstPart, secondPart, thirdPart] = req.params.courseIdentifier.split("-");
         console.log(firstPart)
        
         console.log(secondPart + "-" + thirdPart)
        try {
          const content = await CourseDocuments.find({pageType: firstPart, courseName: secondPart + "-" + thirdPart}).then();
          return res.status(200).send(content[0]);
    
        } catch (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal server error' });
        }
      });


  module.exports = router;
