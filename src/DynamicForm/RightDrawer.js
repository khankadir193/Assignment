import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import DynamicForm from './DynamicForm';




function RightDrawer({ open, onClose }) {
   
    return (
        <div style={{ width: "250" }}>
            <Drawer anchor="right" open={open} onClose={onClose} style={{width:"10%"}}>
                {/* Content for the right drawer */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start',marginTop:"2rem" }}>
                    <label style={{marginBottom:'1rem',fontSize:'larger',fontStyle:'italic'}}>Enter the Name of the Segment</label>
                    <TextField id="outlined-basic" label="Name of the Segment" variant="outlined" size='small' style={{marginBottom:'1rem',fontSize:'larger',fontStyle:'italic'}}/>                    
                    <DynamicForm />
                </div>
            </Drawer>
        </div>
    );
}

export default RightDrawer;
