import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import ReactAudioPlayer from "react-audio-player";
import PredictionForm from "components/PredictionForm";

export default function WeatherPrediction() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []); // Corrected the useEffect dependencies array

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin
      title="Weather Prediction"
      headerText="Enter Details To Predict Weather"
    >
      <ReactAudioPlayer src="/weather.mp3" controls style={{marginBottom: "30px"}}/>   
      <div className="flex justify-center mt-4">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4"> {/* Adjusted width for different screen sizes */}
          <PredictionForm />
        </div>
      </div>
    </Admin>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let userId = null;

  return {
    props: {
      session,
      userId,
    },
  };
}
