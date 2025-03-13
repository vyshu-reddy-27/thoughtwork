import React from 'react';

const EventList = ({ events, onEditEvent, onDeleteEvent }) => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h3>{event.name}</h3>
          <p>{event.date} at {event.time}</p>
          <p>{event.description}</p>
          <button onClick={() => onEditEvent(event)}>Edit</button>
          <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
