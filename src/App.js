import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
   db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}) ))
  });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter your name'))
  }, [])

  console.log(input);


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  };

  return (
    <div className="App">
      <br/>
      <img src="https://qph.fs.quoracdn.net/main-qimg-011de5342604fe4790a86357beec5ee5.webp" alt="Messenger Logo" width="100" height="100"/>
      <h1>Programmers Group Chat</h1>
      <h2>Welcome {username}</h2>

      <form className="App__form">

      <FormControl className="App__formcontrol">

        <Input className="App__input"
        value={input}
        placeholder='Enter a message...'
        onChange={(event) => setInput(event.target.value)}/>
       
      <IconButton className="App__iconButton"
          variant="contained"
          color="primary"
          type="submit"
          disabled={!input}
          onClick={sendMessage}>
      <SendIcon />
      </IconButton>
      </FormControl> 

      </form>

      <FlipMove>

      {messages.map(({id, message}) => (
        <Message key={id} username={username} text={message}/>
      ))}

      </FlipMove>
      
    </div>
  );
}

export default App;
