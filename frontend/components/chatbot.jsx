import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { IoMdSend } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  chatContainer: {
    width: '100%', // Corrected capitalization
    margin: "0 auto",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    position: 'relative',
  },
  chatMessages: {
    minHeight: 150, // Adjusted minimum height for better mobile view
    maxHeight: 200,
    overflowY: "auto",
    marginBottom: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 8,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20, // Added margin bottom for better separation
  },
  inputField: {
    flex: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  },
}));

const ChatBott = () => {
  const classes = useStyles();
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const userMessage = inputMessage.trim();
      setChatMessages(prevMessages => [...prevMessages, { type: 'user', text: userMessage }]);

      try {
        const response = await axios.post('http://192.168.189.180:5000/get_bot_response', { userMessage });
        const botResponse = response.data.botResponse;
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: botResponse }]);
        handleVoiceOutput(botResponse);
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
      setInputMessage('');
    }
  };

  const handleVoiceInput = async () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = async (event) => {
      const userVoiceInput = event.results[0][0].transcript.trim();
      setInputMessage(userVoiceInput);

      try {
        const response = await axios.post('http://192.168.189.180:5000/get_bot_response', { userMessage: userVoiceInput });
        const botResponse = response.data.botResponse;
        setChatMessages(prevMessages => [...prevMessages, { type: 'user', text: userVoiceInput }]);
        setChatMessages(prevMessages => [...prevMessages, { type: 'bot', text: botResponse }]);
        handleVoiceOutput(botResponse);
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
    };

    recognition.onend = () => {
      recognition.stop();
    };
  };

  const handleVoiceOutput = (text) => {
    let hh = String(text);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(hh);
    synth.speak(utterance);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.chatContainer}>
        <h2 style={{ textAlign: "center" }}>Chat with the Stylish ChatBot</h2>
        <div className={classes.chatMessages}>
          {chatMessages.map((message, index) => (
            <div key={index} style={{ marginBottom: 10, color: message.type === 'user' ? '#2196F3' : '#4CAF50' }}>
              {message.type === 'user' ? 'You: ' : 'Bot: '}
              {message.text}
            </div>
          ))}
        </div>
        <div className={classes.inputContainer}>
          <TextField
            className={classes.inputField}
            variant="outlined"
            label="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <Button className={classes.sendButton} onClick={handleSendMessage}>
            <IoMdSend />
          </Button>
          <Button onClick={handleVoiceInput}>
            <FaMicrophoneAlt />
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChatBott;
