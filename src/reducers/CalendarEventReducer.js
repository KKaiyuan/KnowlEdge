import { v4 as uuid } from 'uuid';

const initialState = [
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
  },
  {
    id: '8',
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 15, 0, 0, 0).toISOString(),
  },
  {
    id: '9',
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 17, 30, 0, 0).toISOString(),
    desc: 'Most important meal of the day',
  },
  {
    id: '10',
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0).toISOString(),
    end: new Date(2015, 3, 12, 21, 0, 0, 0).toISOString(),
  },
  {
    id: '11',
    title: 'Planning Meeting with Paige',
    start: new Date(2015, 3, 13, 8, 0, 0).toISOString(),
    end: new Date(2015, 3, 13, 10, 30, 0).toISOString(),
  },
  {
    id: '11.1',
    title: 'Inconvenient Conference Call',
    start: new Date(2015, 3, 13, 9, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 12, 0, 0).toISOString(),
  },
  {
    id: '11.2',
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2015, 3, 13, 11, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 14, 0, 0).toISOString(),
  },
  {
    id: '11.3',
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2015, 3, 13, 15, 30, 0).toISOString(),
    end: new Date(2015, 3, 13, 16, 0, 0).toISOString(),
  },
  {
    id: '12',
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 18, 2, 0, 0).toISOString(),
  },
  {
    id: '12.5',
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 17, 23, 30, 0).toISOString(),
  },
  {
    id: '13',
    title: 'Multi-day Event',
    start: new Date(2015, 3, 20, 19, 30, 0).toISOString(),
    end: new Date(2015, 3, 22, 2, 0, 0).toISOString(),
  },
  {
    id: '14',
    title: 'Today',
    start: new Date(
      new Date().setHours(new Date().getHours() - 3)
    ).toISOString(),
    end: new Date(new Date().setHours(new Date().getHours() + 3)).toISOString(),
  },
  {
    id: '16',
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 19, 0, 0).toISOString(),
  },
  {
    id: '17',
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 0, 0).toISOString(),
  },
  {
    id: '18',
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
  },
  {
    id: '19',
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 30, 0).toISOString(),
  },
  {
    id: '20',
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0).toISOString(),
    end: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
  },
  {
    id: '21',
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0).toISOString(),
    end: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
  },
  {
    id: '22',
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 19, 0, 0).toISOString(),
  },
  {
    id: '23',
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0).toISOString(),
    end: new Date(2015, 3, 14, 20, 0, 0).toISOString(),
  },
  {
    id: '24',
    title: 'DST ends on this day (Europe)',
    start: new Date(2022, 9, 30, 0, 0, 0).toISOString(),
    end: new Date(2022, 9, 30, 4, 30, 0).toISOString(),
  },
  {
    id: '25',
    title: 'DST ends on this day (America)',
    start: new Date(2022, 10, 6, 0, 0, 0).toISOString(),
    end: new Date(2022, 10, 6, 4, 30, 0).toISOString(),
  },
  {
    id: '26',
    title: 'DST starts on this day (America)',
    start: new Date(2023, 2, 12, 0, 0, 0).toISOString(),
    end: new Date(2023, 2, 12, 4, 30, 0).toISOString(),
  },
  {
    id: '27',
    title: 'DST starts on this day (Europe)',
    start: new Date(2023, 2, 26, 0, 0, 0).toISOString(),
    end: new Date(2023, 2, 26, 4, 30, 0).toISOString(),
  },
];

const CalendarEventReducer = (calendarEvents = initialState, action) => {
  switch (action.type) {
    case 'ADD_EVENT': {
      var id = uuid();
      action.payload.id = id;
      return [...calendarEvents, action.payload];
    }
    case 'DELETE_EVENT': {
      return calendarEvents.filter((event) => event.id !== action.payload);
    }
    default: {
      return calendarEvents;
    }
  }
};

export default CalendarEventReducer;