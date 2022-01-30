import {
    Button,
    Collapse,
  // IconButton,
    InputBase,
    Paper,
   // form,
   // Typography
   
  } from "@material-ui/core";
  import React, { useState } from "react";
  import useStyles from "./style";
 //import {app} from "./../../../firebase";
 
  const CreateNote = ({setNotes,createNote,}) => {
    const classes = useStyles();
   
    const [inputData, setInputData] = useState({
      image:"",
      title: "",
      content: "",
    });
  
  
  
    const handleChange = (e) => {
      const { name, value } = e.target;
    
      setInputData((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    };

    
  


    const onSubmit = () => {
      console.log(inputData);
    
      let createdAt = new Date();
      createdAt = createdAt.toLocaleDateString();
      let note = {
        title: inputData.title,
        content: inputData.content,
        createdAt: createdAt,
      };
      createNote(note);
      setInputData({
        image:"",
        title: "",
        content: "",
        
      });
    };
  
    const [isExpanded, setIsExpanded] = useState(false);
  
  
    return (
      <div className={classes.container} >

     <Paper className={classes.paper}>
          <InputBase
          className={classes.input}
          placeholder="image goes here"
          onFocus={() => setIsExpanded(true)}
          onChange={handleChange}
          type="file"
          name="image"
        value={inputData.image}
          />
        
  
          <InputBase
            className={classes.input}
            placeholder="Title goes here"
            onFocus={() => setIsExpanded(true)}
            onChange={handleChange}
            name="title"
            value={inputData.title}
          />


          <Collapse in={isExpanded}>
            <InputBase
              name="content"
              onChange={handleChange}
              multiline
              maxRows={5}
              minRows={3}
              className={classes.input}
              placeholder="Take a Note..."
              value={inputData.content}
            />
              
              
     <div>
     <Button onClick={onSubmit}>Save</Button>
     </div>
      </Collapse>
       </Paper>
        </div>
   
    );
    };
  
  export default CreateNote;




  