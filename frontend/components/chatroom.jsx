import { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';


const theme = createTheme();

const useStyles = makeStyles(() => ({
  chatContainer: {
    maxWidth: 500,
    margin: "0 auto",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    zIndex : 1,
    position : 'relative',
  },
  chatMessages: {
    minHeight: 200,
    maxHeight: 300,
    overflowY: "auto",
    marginBottom: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 8,
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
  },
  inputField: {
    flex: 1,
    marginRight: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  },
}));

const ChatRoom = () => {
  const classes = useStyles();
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { type: 'user', text: inputMessage },
        // { type: 'bot', text: handleVoiceOutput(getBotResponse(inputMessage)) },
        getBotResponse(inputMessage)
      ]);

      try {
        const response = await axios.post('http://localhost:5000/get_bot_response', {
          userMessage: inputMessage,
        });
        const botResponse = response.data.botResponse;
        console.log(botResponse);
       
        console.log("transaction saved")


        //
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: botResponse },
        ]);
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
      setInputMessage('');
      // Add voice output for bot's response
      // handleVoiceOutput(getBotResponse(inputMessage));
    }
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();

    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = async (event) => {
      const userVoiceInput = event.results[0][0].transcript;

      // const h = await handleVoiceOutput(getBotResponse());
      try {
        const response = await axios.post('http://localhost:5000/get_bot_response', {
          userMessage: userVoiceInput,
        });
        const botResponse = response.data.botResponse;
        console.log(botResponse);
     

        console.log("transaction saved")


        //
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: 'user', text: userVoiceInput },
          // { type: 'bot', text: h },
        ]);

        getBotResponse(userVoiceInput)
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


  const getBotResponse = async (userInput) => {
    // Implement your chatbot logic here
    // For simplicity, use a predefined response


    const response = await axios.post('http://localhost:5000/get_bot_response', {
      userMessage: userInput,
    });

    const botResponse = response.data.botResponse;
    console.log(typeof botResponse);

    handleVoiceOutput(botResponse);
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { type: 'bot', text: botResponse },
    ]);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className={classes.chatContainer}>
        <h2>Chat with the Stylish ChatBot</h2>
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
          <Button variant="contained" className={classes.sendButton} onClick={handleSendMessage}>
            Send
          </Button>
          <Button variant="contained" className={classes.sendButton} onClick={handleVoiceInput}>
            Microphone
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChatRoom;
