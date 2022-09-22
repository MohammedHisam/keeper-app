import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }



  function expand() {
    setExpanded(true);
  }


//To send data to backend

  function handleClick(event) {
    
    event.preventDefault();

    // Send data to the backend via POST
    fetch('/home', {  // Enter your IP address here

      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify({
        title: note.title,
        content: note.content
      }),
      headers: {"Content-Type": "application/json"}

      
    }) // body data type must match "Content-Type" header

    setNote({
      title: "",
      content: ""
    });

    // GET request using fetch 
    fetch('/home')
    .then(response => response.json())
    .then(data => props.setLists(data));
    
  }


  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
