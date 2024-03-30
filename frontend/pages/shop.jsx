import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";
import FertilizerShop from "components/FertilizerShop";
import ReactAudioPlayer from "react-audio-player";


export default function Shop() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []); // Corrected the useEffect dependencies array

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin
      title="FERTILIZER & LAB STORESs Locator"
      headerText="Enter town name to find FERTILIZER & LAB STORESs near you"
    >
      <ReactAudioPlayer src="/maps.mp3" controls style={{marginBottom: "30px"}}/>   
      <div className="flex justify-center mt-4">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4"> {/* Adjusted width for different screen sizes */}
          <FertilizerShop />
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
