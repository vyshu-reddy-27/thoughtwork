import React, { useState, useEffect } from 'react';

const EventForm = ({ onSaveEvent, eventToEdit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  // Populate the form fields if editing an event
  useEffect(() => {
    if (eventToEdit) {
      setName(eventToEdit.name);
      setDate(eventToEdit.date);
      setTime(eventToEdit.time);
      setDescription(eventToEdit.description);
    } else {
      setName('');
      setDate('');
      setTime('');
      setDescription('');
    }
  }, [eventToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, date, time, description };
    onSaveEvent(newEvent);
    setName('');
    setDate('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">
        {eventToEdit ? 'Update Event' : 'Add Event'}
      </button>
    </form>
  );
};

export default EventForm;
