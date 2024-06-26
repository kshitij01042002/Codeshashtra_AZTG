import React from "react";
import Button from '@mui/material/Button';
import axios from "axios";

const handleVoiceInput = async () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = async (event) => {
      const userVoiceInput = event.results[0][0].transcript.trim();
        console.log(userVoiceInput);
      try {
        const botResponse = response.data
          window.location.href = 'http://192.168.189.180:3000/chatbot';
        }else if (botResponse == "dashboard"){
          window.location.href = 'http://192.168.189.180:3000/dashboard';
        }else if (botResponse == "fertilizer"){
          window.location.href = 'http://192.168.189.180:3000/fertilizer';
        }else if (botResponse == "chatroom"){
          window.location.href = 'http://192.168.189.180:3000/chatroom';
        }else if (botResponse == "crop"){
          window.location.href = 'http://192.168.189.180:3000/crop';
        }else if (botResponse == "disease"){
          window.location.href = 'http://192.168.189.180:3000/disease';
        }else if (botResponse == "Nearby stores"){
          window.location.href = 'http://192.168.189.180:3000/labs';
        }else if (botResponse == "weather"){
          window.location.href = 'http://192.168.189.180:3000/weather';
        }else if (botResponse == "news"){
          window.location.href = 'http://192.168.189.180:3000/news';
        }else if (botResponse == "marketplace"){
          window.location.href = 'http://192.168.189.180:3001/marketplace';
        }else if (botResponse == "labs"){
          window.location.href = 'http://192.168.189.180:3001/labs';
        }else if (botResponse == "home"){
          window.location.href = 'http://192.168.189.180:3000';
        }
        else{
          return;
        }
      } catch (error) {
        console.error('Error fetching bot response:', error);
      }
    };

    recognition.onend = () => {
      recognition.stop();
    };
  };

class Voice extends React.Component {
    render() {
        return (
            <Button variant="contained" onClick={handleVoiceInput}>
            NAV-ASSIST
          </Button>
        );

  
    }
}
export default Voice;