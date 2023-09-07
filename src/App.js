import React, { useState } from 'react';
import RightDrawer from './DynamicForm/RightDrawer';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  
  const handleSaveSegment = () => {
    setShowPopup(true);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const btnStyle = {
    width:'13vw',
    height:'8vh',
    fontSize:'x-large',
    color:'green',
    background:'beige',
    fontStyle:'italic'
  }

  const alignBtn = {
    display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'
  }

  return (
    <div style={alignBtn}>
      <RightDrawer open={isDrawerOpen} onClose={handleCloseDrawer} />
      <button style={btnStyle} onClick={handleSaveSegment}>Save segment</button>
    </div>
  );
}

export default App;