import React, { useState } from 'react';

const Filter = ({ events, setFilteredEvents }) => {
  const [filterDate, setFilterDate] = useState('');

  const handleFilter = () => {
    const filtered = events.filter(event => event.date === filterDate);
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <input 
        type="date" 
        value={filterDate} 
        onChange={(e) => setFilterDate(e.target.value)} 
      />
      <button onClick={handleFilter}>Filter by Date</button>
    </div>
  );
};

export default Filter;
