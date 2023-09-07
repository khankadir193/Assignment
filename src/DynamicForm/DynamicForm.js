import React, { useState } from 'react';

function DynamicForm() {
  const btnStyle = {
    width: '7vw',
    height: '3vh',
    fontSize: 'small',
    color: 'green',
    background: 'content-box',
    fontStyle: 'italic',
    marginLeft: '4rem'
  }

  const btnStyleCancel = {
    width: '7vw',
    height: '3vh',
    fontSize: 'large',
    color: 'red',
    background: 'content-box',
    fontStyle: 'italic',
    border:'none',

  }
  const initialAvailableOptions = [
    ["first_name",
      "last_name",
      "gender",
      "age",
      "account_name",
      "city",
      "state"]
  ];
  const [fields, setFields] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [availableOptions, setAvailableOptions] = useState([]);

  const addField = () => {
    if (selectedOption) {
      setFields([...fields, selectedOption]);
      //some other scenerio
      if (availableOptions.length === 0) {
        let eachArr = [...initialAvailableOptions[initialAvailableOptions.length - 1]];
        let avlOptions = eachArr.filter(option => {
          return option !== selectedOption
        });
        let newArray = [avlOptions];
        setAvailableOptions(newArray);
      } else {
        let eachArr = [...availableOptions[availableOptions.length - 1]];
        let avlOptions = eachArr.filter(option => {
          return option !== selectedOption
        });
        let newArray = [];
        newArray = [...availableOptions, avlOptions];
        setAvailableOptions(newArray);
      }


      //another ways..
      // setAvailableOptions(avlOptions => avlOptions.filter(option => option !== selectedOption));
      setSelectedOption('');
    }

  };

  const removeField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, event) => {
    const updatedFields = [...fields];
    updatedFields[index] = event.target.value;
    setFields(updatedFields);
  };

  const handleSaveSegment = (event) => {
    const segmentData = {
      "segment_name": "last_10_days_blog_visits",
      "schema":[

      ]
    }
    
    availableOptions.map((arrItems,index)=>{
      let tempArr = []
      arrItems.map((item)=>{
        tempArr.push({[item]:item});
      })
      segmentData.schema.push(...tempArr);
    })    
  };

  return (
    <div>
      <div>
        {fields.map((field, index) => (
          <div key={index}>
            <select
              style={{width:"85%",height:"5vh",marginBottom:'1rem'}}
            >
              {
                availableOptions[index]?.map((option) => {
                  return (
                    <option value={option}>{option}</option>
                  )
                })
              }
            </select>
            <button style={{height:"2.6rem",background:"border-box",borderRadius:"1rem"}} onClick={() => removeField(index)}>-</button>
          </div>
        ))}
      </div>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          style={{width:"85%",height:"5vh",marginBottom:'1rem'}}
        >
          <option value="">Add schema to segment</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="gender">Gender</option>
          <option value="age">Age</option>
          <option value="account_name">Account Name</option>
          <option value="city">City</option>
          <option value="state">State</option>
        </select>
        <button onClick={addField} style={{border:'none',padding:'0',background:'transparent',color:'green'}}>+ Add new Schema</button>
      </div>
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
        <button style={btnStyle} onClick={handleSaveSegment}>Save the Segment</button>
        <button style={btnStyleCancel} onClick={addField}>Cancel</button>
      </div>

    </div>
  );
}

export default DynamicForm;
