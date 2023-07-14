import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/AddCircleOutline';
import AddCalendarIcon from '@mui/icons-material/Today';
import AddContactIcon from '@mui/icons-material/PermContactCalendar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarPage from './Calendar';
import AddEventModal from './AddEventModal';
import { useSelector, useDispatch } from 'react-redux';
import TaskIcon from '@mui/icons-material/TaskAltRounded';
import { useEffect } from 'react';
import { getEventsAsync } from './CalendarEventThunks';

const drawerWidth = 240;

const TaskEvent = ({ event }) => {
  const bulletStyle = {
    display: 'inline-block',
    marginRight: '5px',
    verticalAlign: 'middle',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: '#0074d9',
  };

  const eventStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor:
      event.type === 'task' ? 'transparent' : 'rgb(0 116 217 / 89%)', // Set background color based on event type
    borderRadius: '5px',
    color: event.type === 'task' ? 'black' : 'white',
    padding: '5px',
  };

  const iconStyle = {
    fontSize: '14px',
    marginLeft: '6px',
  };

  if (event.length > 1) {
    const remainingEvents = event.slice(1); // Get the remaining events excluding the first two
    return (
      <div>
        <div>{event[0].title}</div>
        <div>{event[1].title}</div>
        <div>
          <a href="#">{`+${remainingEvents.length} more`}</a>
        </div>
      </div>
    );
  }

  return (
    <div style={eventStyle}>
      {event.type === 'task' && <span style={bulletStyle}></span>}
      {event.title}
      {event.type === 'task' && (
        <TaskIcon fontSize="xsmall" style={iconStyle} />
      )}
    </div>
  );
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function SideMenu() {
  const userId = useSelector((state) => state.user.currentUser.uid);
  console.log(userId);
  const dispatch = useDispatch();
  const myEventsList = useSelector((state) => state.event.events);
  console.log(myEventsList);
  const tasks =
    myEventsList.length > 0
      ? myEventsList.filter((event) => event.type === 'task')
      : [];
  const events =
    myEventsList.length > 0
      ? myEventsList.filter((event) => event.type === 'event')
      : [];

  // Need to map tasks to fit the big-react-calendar events, model them as all they events so that they can be displayed

  useEffect(() => {
    dispatch(getEventsAsync(userId));
  }, [dispatch, userId]);

  const eventComponents = {
    event: TaskEvent, // Use TaskEvent component for task events
  };

  const taskEvents = tasks.map((task) => ({
    _id: task._id,
    title: task.title,
    course: task.course,
    published: task.published,
    allDay: true, // Set the allDay property to true for all-day events
    start: task.deadline, // Convert the task's date to a JavaScript Date object
    end: task.deadline,
    deadline: task.deadline,
    desc: task.desc,
    links: task.links,
    type: task.type,
  }));

  const finalEventsList = [...events, ...taskEvents];

  const [open, setOpen] = React.useState(false);
  const [taskPaneOpen, setTaskPaneOpen] = React.useState(false);
  const [isAddEventModalOpen, setAddEventModal] = React.useState(false);
  const handleCloseAddEventModal = () => setAddEventModal(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  const handleToggleTaskDrawer = () => {
    setTaskPaneOpen(!taskPaneOpen);
  };

  const handleClickAddEvents = () => {
    console.log('In handle click add Events');
    setAddEventModal(true);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleToggleDrawer}>
            {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Create', 'Add Calendar', 'Contacts', 'Notifications'].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={index === 0 ? handleClickAddEvents : undefined}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? (
                      <AddIcon />
                    ) : index === 1 ? (
                      <AddCalendarIcon />
                    ) : index === 2 ? (
                      <AddContactIcon />
                    ) : (
                      <NotificationsIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <CalendarPage events={finalEventsList} components={eventComponents} />
      {isAddEventModalOpen && (
        <AddEventModal
          isOpen={isAddEventModalOpen}
          handleClose={handleCloseAddEventModal}
        />
      )}
    </Box>
  );
}
