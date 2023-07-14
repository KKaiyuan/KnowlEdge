var express = require('express');
var router = express.Router();
const { Event, User } = require('../database/model');

var events = [
  {
    id: '0',
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0).toISOString(),
    end: new Date(2015, 3, 1).toISOString(),
    location: 'Conference Room A',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },
  {
    id: '1',
    title: 'Long Event',
    start: new Date(2015, 3, 7).toISOString(),
    end: new Date(2015, 3, 10).toISOString(),
    location: 'Conference Room A',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },

  {
    id: '2',
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0).toISOString(),
    end: new Date(2016, 2, 20, 0, 0, 0).toISOString(),
    location: 'Conference Room A',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },

  {
    id: '3',
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0).toISOString(),
    end: new Date(2016, 10, 13, 0, 0, 0).toISOString(),
    location: 'Conference Room B',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },

  {
    id: '4',
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 10, 0, 0, 0).toISOString(),
    location: 'Room 12',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },
  {
    id: '5',
    title: 'Conference',
    start: new Date(2015, 3, 11).toISOString(),
    end: new Date(2015, 3, 13).toISOString(),
    desc: 'Big conference for important people',
    location: 'LSC Room 1129',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },
  {
    id: '6',
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 12, 30, 0, 0).toISOString(),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    location: 'Koerner Room 1146',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },
  {
    id: '7',
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 13, 0, 0, 0).toISOString(),
    desc: 'Power lunch',
    location: 'Mahoneys',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
    type: 'event',
  },
  {
    id: '8',
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 15, 0, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '9',
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 17, 30, 0, 0).toISOString(),
    desc: 'Most important meal of the day',
    type: 'event',
  },
  {
    id: '10',
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 21, 0, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '11',
    title: 'Planning Meeting with Paige',
    start: new Date(2015, 3, 13, 8, 0, 0).toISOString(),
    end: new Date(2015, 3, 13, 10, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '11.1',
    title: 'Inconvenient Conference Call',
    start: new Date(2015, 3, 13, 9, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 12, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '11.2',
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2015, 3, 13, 11, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 14, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '11.3',
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2015, 3, 13, 15, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 16, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '12',
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 18, 2, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '12.5',
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 17, 23, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '13',
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 22, 2, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '14',
    title: 'Today',
    start: new Date(
      new Date().setHours(new Date().getHours() - 3)
    ).toISOString(),
    end: new Date(new Date().setHours(new Date().getHours() + 3)).toISOString(),
    type: 'event',
  },
  {
    id: '16',
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 19, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '17',
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '18',
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '19',
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '20',
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0).toISOString(),
    end: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '21',
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0).toISOString(),
    end: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '22',
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 19, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '23',
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 0, 0).toISOString(),
    type: 'event',
  },
  {
    id: '24',
    title: 'DST ends on this day (Europe)',
    start: new Date(2022, 9, 30, 0, 0, 0).toISOString(),
    end: new Date(2022, 9, 30, 4, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '25',
    title: 'DST ends on this day (America)',
    start: new Date(2022, 10, 6, 0, 0, 0).toISOString(),
    end: new Date(2022, 10, 6, 4, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '26',
    title: 'DST starts on this day (America)',
    start: new Date(2023, 2, 12, 0, 0, 0).toISOString(),
    end: new Date(2023, 2, 12, 4, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '27',
    title: 'DST starts on this day (Europe)',
    start: new Date(2023, 2, 26, 0, 0, 0).toISOString(),
    end: new Date(2023, 2, 26, 4, 30, 0).toISOString(),
    type: 'event',
  },
  {
    id: '28',
    title: 'Assignment A Part 1 Due',
    course: 'FNH 322',
    published: new Date(2023, 1, 26, 0, 0, 0).toISOString(),
    deadline: new Date(2023, 2, 26, 4, 30, 0).toISOString(),
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '29',
    title: 'Project Progress Part 1',
    course: 'CPSC 455',
    published: new Date(2015, 3, 1, 14, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 3, 12, 15, 0, 0, 0).toISOString(),
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '30',
    title: 'Written Response 1',
    course: 'GRSJ 300',
    published: new Date(2015, 1, 12, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 3, 12, 17, 30, 0, 0).toISOString(),
    desc: '300 word essay response to posted videos',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '31',
    title: 'Written Response 3',
    course: 'GRSJ 300',
    published: new Date(2015, 4, 12, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 5, 12, 17, 30, 0, 0).toISOString(),
    desc: '300 word essay response to posted videos',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '32',
    title: 'Quiz 3',
    course: 'GRSJ 300',
    published: new Date(2015, 4, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 5, 10, 17, 30, 0, 0).toISOString(),
    desc: 'Quiz for readings 3 to 5',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '32',
    title: 'Quiz 2',
    course: 'GRSJ 300',
    published: new Date(2015, 3, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 4, 10, 17, 30, 0, 0).toISOString(),
    desc: 'Quiz for readings 1 & 2',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '33',
    title: 'Scrum Report I',
    course: 'CPSC 455',
    published: new Date(2015, 3, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 4, 10, 17, 30, 0, 0).toISOString(),
    desc: 'Scrum report for the first sprint',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '34',
    title: 'Scrum Report II',
    course: 'CPSC 455',
    published: new Date(2015, 4, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 5, 10, 17, 30, 0, 0).toISOString(),
    desc: 'Scrum report for the second sprint',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '35',
    title: 'Progress Report II',
    course: 'CPSC 455',
    published: new Date(2015, 2, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 3, 10, 17, 30, 0, 0).toISOString(),
    desc: 'Progress report for the second workshop.',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '36',
    title: 'Workshop I Survey',
    course: 'CPSC 455',
    published: new Date(2015, 1, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 1, 13, 17, 30, 0, 0).toISOString(),
    desc: 'Workshop I survey',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '37',
    title: 'Workshop II Survey',
    course: 'CPSC 455',
    published: new Date(2015, 1, 24, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 1, 27, 17, 30, 0, 0).toISOString(),
    desc: 'Workshop II Survey',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
  {
    id: '38',
    title: 'Progress Report III',
    course: 'CPSC 455',
    published: new Date(2015, 4, 10, 17, 0, 0, 0).toISOString(),
    deadline: new Date(2015, 4, 15, 17, 30, 0, 0).toISOString(),
    desc: 'Progress report for the third workshop.',
    type: 'task',
    links: [
      { name: 'Google Maps', url: 'https://maps.google.com' },
      { name: 'Zoom Meeting', url: 'https://zoom.us' },
    ],
  },
];

router.get('/:userId', (req, res) => {
  const { userId } = req.params;

  Event.find({ userId: userId })
    .then((userEvents) => {
      console.log(userEvents);
      res.status(200).send(userEvents);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(404).json({ error: 'Failed to retrieve events' });
    });
});

router.post('/:userId', (req, res) => {
  console.log(req.body);
  const { userId } = req.params;
  const eventData = {
    userId: userId,
    title: req.body.title || '',
    start: req.body.start || '',
    end: req.body.end || '',
    location: req.body.location || '',
    links: req.body.links || [],
    type: req.body.type || '',
    course: req.body.course || '',
    published: req.body.published || '',
    deadline: req.body.deadline || '',
    desc: req.body.desc || '',
  };

  console.log(eventData);
  const newEvent = new Event({ userId, ...eventData });
  console.log(newEvent);
  newEvent
    .save()
    .then(() => {
      Event.find({ userId }).then((events) => {
        res.status(200).send(events);
      });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create new Event' });
    });
});

router.put('/:userId/:eventId', (req, res) => {
  const { userId, eventId } = req.params;
  const eventData = req.body;

  Event.findOneAndUpdate({ _id: eventId, userId }, eventData)
    .then((event) => {
      res.status(200).send(event);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to update event' });
    });
});

router.delete('/:userId/:eventId', (req, res) => {
  const { userId, eventId } = req.params;
  Event.findOneAndDelete({ _id: eventId })
    .then(() => {
      res.status(200).send(eventId);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to delete event' });
    });
});

module.exports = router;
