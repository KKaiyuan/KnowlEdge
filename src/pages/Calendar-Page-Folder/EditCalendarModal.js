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
import { useDispatch } from 'react-redux';
import { editEvent } from './calendaractions/CalendarAction';

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

export default function EditEventModal({
  isOpen,
  handleClose,
  event,
  updateParentEvent,
}) {
  const open = isOpen;
  const [eventTitle, setEventTitle] = useState(event.title);
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date(event.start)
  );
  const [selectedStartTime, setSelectedStartTime] = useState(
    new Date(event.start)
  );
  const [selectedEndDate, setSelectedEndDate] = useState(new Date(event.end));
  const [selectedEndTime, setSelectedEndTime] = useState(new Date(event.end));
  const [location, setLocation] = useState(event.location);
  const [eventDescription, setEventDescription] = useState(event.description);
  const [links, setLinks] = useState(event.links);
  const dispatch = useDispatch();

  const handleClickUpdateEvent = () => {
    var updatedEvent = {
      id: event.id,
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
      description: eventDescription,
      location: location,
      links: links,
    };
    dispatch(editEvent(updatedEvent));
    updateParentEvent(updatedEvent);
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
              value={eventTitle}
              onChange={handleEventTitleChange}
              variant="standard"
              placeholder="Add title"
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
              Update Event
            </Button>
          </div>
        </Box>
      </EditEventModalStyled>
    </div>
  );
}
