import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
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
import { getEventsAsync, putEventAsync } from './CalendarEventThunks';

const EditEventModalStyled = styled('div')`
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

export default function EditTaskModal({
  isOpen,
  handleClose,
  event,
  updateParentEvent,
}) {
  const open = isOpen;
  const events = useSelector((state) => state.event.events);

  const [taskTitle, setTaskTitle] = useState(event.title);
  const [selectedPublishedDate, setSelectedPublishedDate] = useState(
    new Date(event.published)
  );
  const [selectedPublishedTime, setSelectedPublishedTime] = useState(
    new Date(event.published)
  );
  const [selectedDeadlineDate, setSelectedDeadlineDate] = useState(
    new Date(event.deadline)
  );
  const [selectedDeadlineTime, setSelectedDeadlineTime] = useState(
    new Date(event.deadline)
  );
  const [location, setLocation] = useState(event.location);
  const [course, setCourse] = useState(event.course || '');
  const [taskDescription, setTaskDescription] = useState(
    event.description || ''
  );
  const [links, setLinks] = useState(event.links);

  const userId = useSelector((state) => state.user.currentUser.uid);
  const dispatch = useDispatch();

  const handleClickUpdateEvent = () => {
    console.log('in handleClickUpdate');
    var updatedTask = {
      _id: event._id,
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
      course: course,
      type: 'task',
      location: location,
      description: taskDescription,
      links: links,
    };
    console.log(updatedTask);
    dispatch(putEventAsync({ userId: userId, event: updatedTask }));
    //dispatch(getEventsAsync(userId));
    updateParentEvent(updatedTask);
    dispatch(getEventsAsync(userId));
  };

  const handleTaskTitleChange = (event) => {
    const inputValue = event.target.value;
    setTaskTitle(inputValue);
  };

  const handleTaskPublishedDateChange = (date) => {
    setSelectedPublishedDate(date);
  };

  const handleLinkChange = (index, event) => {
    const { name, value } = event.target;
    const newLinks = [...links];
    newLinks[index][name] = value;
    setLinks(newLinks);
  };

  const handleTaskDeadlineDateChange = (date) => {
    console.log('in handle End Date Change');
    setSelectedDeadlineDate(date);
  };

  const handleTaskPublishedTimeChange = (time) => {
    console.log(time);
    setSelectedPublishedTime(time);
  };

  const handleTaskDeadlineTimeChange = (time) => {
    setSelectedDeadlineTime(time);
  };

  const handleLocationChange = (location) => {
    const locationValue = location.target.value;
    setLocation(locationValue);
  };

  const handleTaskDescriptionChange = (description) => {
    const descriptionValue = description.target.value;
    setTaskDescription(descriptionValue);
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

  return (
    <div>
      <EditEventModalStyled
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
            <TimeIcon />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                value={selectedPublishedDate}
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
                value={selectedPublishedTime}
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
                value={selectedDeadlineDate}
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
                value={selectedDeadlineTime}
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
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
              multiline
              maxRows={5}
              placeholder="Add description"
            />
          </div>
          {links &&
            links.map((link, index) => (
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
            <Button id="addlink" variant="contained" onClick={handleAddLink}>
              Add Link
            </Button>
            <Button
              id="createevent"
              variant="contained"
              type="submit"
              onClick={handleClickUpdateEvent}
            >
              Update Task
            </Button>
          </div>
        </Box>
      </EditEventModalStyled>
    </div>
  );
}
