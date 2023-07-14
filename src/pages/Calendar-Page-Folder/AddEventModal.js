import { TextField, Tabs, Tab } from '@mui/material';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Box } from '@mui/material';
import TimeIcon from '@material-ui/icons/AccessTime';
import EventIcon from '@material-ui/icons/Event';
import {
  MobileDatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from '@mui/x-date-pickers';
import CloseIcon from '@material-ui/icons/Close';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IconButton } from '@mui/material';
import LocationIcon from '@material-ui/icons/LocationOn';
import NotesIcon from '@material-ui/icons/Notes';
import LinkIcon from '@material-ui/icons/Link';
import { useDispatch, useSelector } from 'react-redux';
import { getEventsAsync, postEventAsync } from './CalendarEventThunks';
import { Typography } from '@material-ui/core';
import BookIcon from '@mui/icons-material/Book';

const AddEventModalStyled = styled('div')`
  #event-title:focus,
  #datepicker:focus,
  #timepicker:focus,
  #datepicker:active,
  #timepicker:active {
    outline: none;
    box-shadow: none;
    z-index: 20;
  }

  #addlink {
    display: flex;
    justify-self: flex-end;
    margin-left: 20%;
    margin-right: 2%;
  }

  #event-title {
    margin: 2%;
    padding: 12px 8px;
    width: 100%;
  }

  #event-time {
    margin: 2%;
    padding: 12px 8px;
    width: 100%;
  }
  .icon-field {
    display: flex;
    align-items: center;
    width: 100%;
  }

  #close-modal {
    position: absolute;
    top: 2%;
    right: 2%;
  }
`;

const style = {
  position: 'absolute',
  margin: '1%',
  padding: '12px 8px',
  zIndex: 20,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '5px',
  p: 4,
};

export default function AddEventModal({ isOpen, handleClose }) {
  const open = isOpen;
  const [eventTitle, setEventTitle] = useState('');
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedStartTime, setSelectedStartTime] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedEndTime, setSelectedEndTime] = useState(new Date());
  const [location, setLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [links, setLinks] = useState([{ name: '', url: '' }]);
  const [taskTitle, setTaskTitle] = useState('');
  const [selectedPublishedDate, setSelectedPublishedDate] = useState(
    new Date()
  );
  const [selectedPublishedTime, setSelectedPublishedTime] = useState(
    new Date()
  );
  const [selectedDeadlineDate, setSelectedDeadlineDate] = useState(new Date());
  const [selectedDeadlineTime, setSelectedDeadlineTime] = useState(new Date());
  const [eventCourse, setEventCourse] = useState('');
  const [taskCourse, setTaskCourse] = useState('');
  const [taskLocation, setTaskLocation] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasklinks, setTaskLinks] = useState([{ name: '', url: '' }]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser.uid);

  useEffect(() => {
    dispatch(getEventsAsync(userId));
  }, [dispatch, userId]);

  const handleClickAddTask = () => {
    var newTask = {
      title: taskTitle,
      published: new Date(
        selectedPublishedDate.getFullYear(),
        selectedPublishedDate.getMonth(),
        selectedPublishedDate.getDate(),
        selectedPublishedTime.getHours(),
        selectedPublishedTime.getMinutes()
      ).toISOString(),
      deadline: new Date(
        selectedDeadlineDate.getFullYear(),
        selectedDeadlineDate.getMonth(),
        selectedDeadlineDate.getDate(),
        selectedDeadlineTime.getHours(),
        selectedDeadlineTime.getMinutes()
      ).toISOString(),
      course: taskCourse,
      type: 'task',
      location: taskLocation,
      description: taskDescription,
      links: tasklinks,
    };

    dispatch(postEventAsync({ userId: userId, event: newTask }));
  };

  const handleClickAddEvent = () => {
    var newEvent = {
      title: eventTitle,
      start: new Date(
        selectedStartDate.getFullYear(),
        selectedStartDate.getMonth(),
        selectedStartDate.getDate(),
        selectedStartTime.getHours(),
        selectedStartTime.getMinutes()
      ).toISOString(),
      end: new Date(
        selectedEndDate.getFullYear(),
        selectedEndDate.getMonth(),
        selectedEndDate.getDate(),
        selectedEndTime.getHours(),
        selectedEndTime.getMinutes()
      ).toISOString(),
      type: 'event',
      course: eventCourse,
      description: eventDescription,
      location: location,
      links: links,
    };
    console.log(newEvent);
    dispatch(postEventAsync({ userId: userId, event: newEvent }));
    //dispatch(getEventsAsync(userId));
  };

  const handleTaskTitleChange = (event) => {
    const inputValue = event.target.value;
    setTaskTitle(inputValue);
  };

  const handleTaskPublishedDateChange = (date) => {
    setSelectedPublishedDate(date);
  };

  const handleTaskPublishedTimeChange = (time) => {
    setSelectedPublishedTime(time);
  };

  const handleTaskDeadlineDateChange = (date) => {
    setSelectedDeadlineDate(date);
  };

  const handleTaskDeadlineTimeChange = (time) => {
    setSelectedDeadlineTime(time);
  };

  const handleTaskCourseChange = (event) => {
    const inputValue = event.target.value;
    setTaskCourse(inputValue);
  };

  const handleTaskDescriptionChange = (description) => {
    const inputValue = description.target.value;
    setTaskDescription(inputValue);
  };

  const handleTaskLocationChange = (event) => {
    const inputValue = event.target.value;
    setTaskLocation(inputValue);
  };

  const handleTaskLinksChange = (index, event) => {
    const { name, value } = event.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setTaskLinks(newLinks);
  };

  const handleEventTitleChange = (event) => {
    const inputValue = event.target.value;
    setEventTitle(inputValue);
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleLinkChange = (index, event) => {
    const { name, value } = event.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setLinks(newLinks);
  };

  const handleEndDateChange = (date) => {
    console.log('in handle End Date Change');
    setSelectedEndDate(date);
  };

  const handleStartTimeChange = (time) => {
    console.log(time);
    setSelectedStartTime(time);
  };

  const handleEventCourseChange = (event) => {
    const inputValue = event.target.value;
    setEventCourse(inputValue);
  };

  const handleEndTimeChange = (time) => {
    setSelectedEndTime(time);
  };

  const handleLocationChange = (location) => {
    const locationValue = location.target.value;
    setLocation(locationValue);
  };

  const handleEventDescriptionChange = (description) => {
    const descriptionValue = description.target.value;
    setEventDescription(descriptionValue);
  };

  const handleAddLink = () => {
    const newLinks = [...links, {}];
    setLinks(newLinks);
  };

  const handleDeleteLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AddEventModalStyled
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={[
            style,
            {
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            },
          ]}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Event" />
            <Tab label="Task" />
          </Tabs>

          {value === 0 && (
            <div value={value} index={0}>
              <IconButton id="close-modal" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <div className="icon-field">
                <EventIcon />
                <TextField
                  id="event-title"
                  value={eventTitle}
                  onChange={handleEventTitleChange}
                  variant="standard"
                  placeholder="Add title"
                />
              </div>
              <div className="icon-field">
                <BookIcon />
                <TextField
                  id="event-title"
                  value={eventCourse}
                  onChange={handleEventCourseChange}
                  variant="standard"
                  placeholder="Add Course"
                />
              </div>
              <div className="icon-field">
                <TimeIcon />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                    label="Start Date"
                    renderInput={(props) => (
                      <TextField
                        id="datepicker"
                        {...props}
                        helperText="valid mask"
                        variant="standard"
                      />
                    )}
                  />
                  <MobileTimePicker
                    label="Start Time"
                    value={selectedStartTime}
                    onChange={handleStartTimeChange}
                    renderInput={(props) => (
                      <TextField
                        id="timepicker"
                        {...props}
                        helperText="valid mask"
                        variant="standard"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="icon-field">
                <TimeIcon />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileDatePicker
                    label="End Date"
                    onChange={handleEndDateChange}
                    value={selectedEndDate}
                    renderInput={(props) => (
                      <TextField
                        id="datepicker"
                        {...props}
                        helperText="valid mask"
                        variant="standard"
                      />
                    )}
                  />
                  <MobileTimePicker
                    label="End Time"
                    onChange={handleEndTimeChange}
                    value={selectedEndTime}
                    renderInput={(props) => (
                      <TextField
                        id="timepicker"
                        {...props}
                        helperText="valid mask"
                        variant="standard"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div className="icon-field">
                <LocationIcon />
                <TextField
                  id="event-title"
                  value={location}
                  onChange={handleLocationChange}
                  variant="standard"
                  placeholder="Add location"
                />
              </div>
              <div className="icon-field">
                <NotesIcon />
                <TextField
                  id="event-title"
                  value={eventDescription}
                  onChange={handleEventDescriptionChange}
                  multiline
                  maxRows={5}
                  placeholder="Add description"
                />
              </div>
              {links.map((link, index) => (
                <div className="icon-field" key={index}>
                  <LinkIcon />
                  <TextField
                    value={link.name}
                    name="name"
                    onChange={(event) => handleLinkChange(index, event)}
                    variant="outlined"
                    label={`Link ${index + 1} Name`}
                    placeholder="Add link name"
                  />
                  <TextField
                    value={link.url}
                    name="url"
                    onChange={(event) => handleLinkChange(index, event)}
                    variant="outlined"
                    label={`Link ${index + 1} URL`}
                    placeholder="Add link url"
                  />
                  <CloseIcon onClick={(event) => handleDeleteLink(index)} />
                </div>
              ))}
              <div className="icon-field">
                <Button
                  id="addlink"
                  variant="contained"
                  onClick={handleAddLink}
                >
                  Add Link
                </Button>
                <Button
                  id="createevent"
                  variant="contained"
                  type="submit"
                  onClick={handleClickAddEvent}
                >
                  Create Event
                </Button>
              </div>
            </div>
          )}
          {value === 1 && (
            <div>
              <div value={value} index={1}>
                <IconButton id="close-modal" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <div className="icon-field">
                  <EventIcon />
                  <TextField
                    id="event-title"
                    value={taskTitle}
                    onChange={handleTaskTitleChange}
                    variant="standard"
                    placeholder="Add title"
                  />
                </div>
                <div className="icon-field">
                  <BookIcon />
                  <TextField
                    id="event-title"
                    value={taskCourse}
                    onChange={handleTaskCourseChange}
                    variant="standard"
                    placeholder="Add Course"
                  />
                </div>
                <div className="icon-field">
                  <TimeIcon />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      value={selectedStartDate}
                      onChange={handleTaskPublishedDateChange}
                      label="Published Date"
                      renderInput={(props) => (
                        <TextField
                          id="datepicker"
                          {...props}
                          helperText="valid mask"
                          variant="standard"
                        />
                      )}
                    />
                    <MobileTimePicker
                      label="Published Time"
                      value={selectedStartTime}
                      onChange={handleTaskPublishedTimeChange}
                      renderInput={(props) => (
                        <TextField
                          id="timepicker"
                          {...props}
                          helperText="valid mask"
                          variant="standard"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="icon-field">
                  <TimeIcon />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      label="Deadline Date"
                      onChange={handleTaskDeadlineDateChange}
                      value={selectedEndDate}
                      renderInput={(props) => (
                        <TextField
                          id="datepicker"
                          {...props}
                          helperText="valid mask"
                          variant="standard"
                        />
                      )}
                    />
                    <MobileTimePicker
                      label="Deadline Time"
                      onChange={handleTaskDeadlineTimeChange}
                      value={selectedEndTime}
                      renderInput={(props) => (
                        <TextField
                          id="timepicker"
                          {...props}
                          helperText="valid mask"
                          variant="standard"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="icon-field">
                  <LocationIcon />
                  <TextField
                    id="event-title"
                    value={taskLocation}
                    onChange={handleTaskLocationChange}
                    variant="standard"
                    placeholder="Add location"
                  />
                </div>
                <div className="icon-field">
                  <NotesIcon />
                  <TextField
                    id="event-title"
                    value={taskDescription}
                    onChange={handleTaskDescriptionChange}
                    multiline
                    maxRows={5}
                    placeholder="Add description"
                  />
                </div>
                {links.map((link, index) => (
                  <div className="icon-field" key={index}>
                    <LinkIcon />
                    <TextField
                      value={link.name}
                      name="name"
                      onChange={(event) => handleTaskLinksChange(index, event)}
                      variant="outlined"
                      label={`Link ${index + 1} Name`}
                      placeholder="Add link name"
                    />
                    <TextField
                      value={link.url}
                      name="url"
                      onChange={(event) => handleTaskLinksChange(index, event)}
                      variant="outlined"
                      label={`Link ${index + 1} URL`}
                      placeholder="Add link url"
                    />
                    <CloseIcon onClick={(event) => handleDeleteLink(index)} />
                  </div>
                ))}
                <div className="icon-field">
                  <Button
                    id="addlink"
                    variant="contained"
                    onClick={handleAddLink}
                  >
                    Add Link
                  </Button>
                  <Button
                    id="createevent"
                    variant="contained"
                    type="submit"
                    onClick={handleClickAddTask}
                  >
                    Create Task
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Box>
      </AddEventModalStyled>
    </div>
  );
}
