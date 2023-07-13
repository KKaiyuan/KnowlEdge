// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server

var express = require('express');
var router = express.Router();
const {Announcement} = require('../database/model');

var announcements = [


]



router.get('/:course', async function (req, res, next) {
	var announcements = [];
	if (req.params.course === "all") {
		announcements = await Announcement.find({});

	} else {
		announcements = await Announcement.find({ announcementCourse: req.params.course});
	}
    res.status(200).send(announcements);
})

router.post('/', function(req, res, next) {
	// announcements = [...announcements, req.body];
	const announcementToServer = new Announcement(req.body);
	announcementToServer.save();
	res.status(201).send(req.body);
})

router.delete('/:id', function(req, res, next) {
	Announcement.findOneAndRemove(
		{
			announcementId: Number(req.params.id)
		}
	).then((response) => {
		console.log(response);
	})
	res.status(204).send();
})
module.exports = router;
