import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    
    // GET request using fetch inside useEffect React hook
    fetch("/home")
      .then((response) => response.json())
      .then((data) => setLists(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  },{});

  function deleteNote(id) {
    // DELETE request using fetch inside useEffect React hook
    fetch("/home/" + id, { method: "DELETE" }).then(() =>
      console.log("Deleted the " + id + " successfully")
    );

    // GET request using fetch
    fetch("/home")
      .then((response) => response.json())
      .then((data) => setLists(data));
  }

  return (
    <div>
      <Header />
      <CreateArea setLists={setLists} />
      {lists.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
