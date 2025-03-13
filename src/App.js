import React, { useState, useEffect } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const defaultEvents = [
    {
      id: 1,
      name: 'Meeting with Team',
      date: '2024-09-20',
      time: '10:00',
      description: 'Discuss project progress and next steps.',
    },
    {
      id: 2,
      name: 'Conference Call',
      date: '2024-09-22',
      time: '15:00',
      description: 'Call with client to discuss new requirements.',
    },
  ];

  // Load events from localStorage or use default events
  const loadEvents = () => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      return JSON.parse(savedEvents);
    } else {
      localStorage.setItem('events', JSON.stringify(defaultEvents));
      return defaultEvents;
    }
  };

  const [events, setEvents] = useState(loadEvents);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventToEdit, setEventToEdit] = useState(null); // Track event being edited

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  // Add or Update Event
  const handleSaveEvent = (newEvent) => {
    if (eventToEdit) {
      const updatedEvents = events.map(event =>
        event.id === eventToEdit.id ? { ...eventToEdit, ...newEvent } : event
      );
      setEvents(updatedEvents);
      setEventToEdit(null); // Reset after editing
    } else {
      const updatedEvents = [...events, { id: Date.now(), ...newEvent }];
      setEvents(updatedEvents);
    }
  };

  // Edit event handler
  const handleEditEvent = (event) => {
    setEventToEdit(event); // Set the event to be edited
  };

  // Delete event handler
  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <h1>Event Scheduling App</h1>
      <EventForm 
        onSaveEvent={handleSaveEvent} 
        eventToEdit={eventToEdit} 
      />
      <Filter 
        events={events} 
        setFilteredEvents={setFilteredEvents} 
      />
      <EventList 
        events={filteredEvents.length ? filteredEvents : events} 
        onEditEvent={handleEditEvent} 
        onDeleteEvent={handleDeleteEvent} 
      />
    </div>
  );
};

export default App;
