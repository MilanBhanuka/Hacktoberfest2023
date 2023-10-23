
import React, { useState } from 'react';

const DataStore = () => {
  const [savedData, setSavedData] = useState([]);

  const saveData = (data) => {
    setSavedData([...savedData, data]);
  };

  return (
    <div>
      {/* This component will handle data storage */}
      {savedData.map((item, index) => (
        <div key={index}>{item.firstName} {item.lastName}, Status: {item.status}</div>
      ))}
    </div>
  );
};

export default DataStore;
