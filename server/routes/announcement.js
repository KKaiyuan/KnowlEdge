// Code inpsired from Workshop 3's cs455-express-demo repo: https://github.com/svmah/cs455-express-demo/tree/add-server

var express = require('express');
var router = express.Router();


var announcements = [
    {
		announcement: "Hey class! Remember to submit your CPSC 455 Workshop 2 Survey by 11:59 PM Wednesday.",
		announcementId: -1,
		announcementTitle: "Workshop 2 Survey Reminder"
	},
	{
		announcement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Id cursus metus aliquam eleifend mi. Commodo nulla facilisi nullam vehicula. Habitant morbi tristique senectus et netus. Mollis aliquam ut porttitor leo. Elementum nibh tellus molestie nunc. Tincidunt eget nullam non nisi est sit amet facilisis magna. Sed turpis tincidunt id aliquet risus. Sollicitudin ac orci phasellus egestas. Nisl suscipit adipiscing bibendum est. Nam aliquam sem et tortor consequat. Velit aliquet sagittis id consectetur purus. Massa vitae tortor condimentum lacinia quis vel eros. Turpis cursus in hac habitasse platea. Sed euismod nisi porta lorem mollis aliquam. Tincidunt vitae semper quis lectus nulla.",
		announcementId: -2,
		announcementTitle: "Announcement 2"
	}

]



router.get('/', function (req, res, next) {
    res.status(200).send(announcements);
})

router.post('/', function(req, res, next) {
	// announcements = [...announcements, req.body];
	console.log(req.body);
	announcements.push(req.body);
	const announcement = announcements.filter((announcement) => announcement.announcementId === req.body.announcementId);
	res.status(201).send(announcement[0]);
})

router.delete('/:id', function(req, res, next) {
	announcements = announcements.filter((announcement) => announcement.announcementId !== Number(req.params.id));
	res.status(204).send();
})
module.exports = router;
