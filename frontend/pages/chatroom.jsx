import React, { useState, useEffect } from "react";
import { signIn, useSession, getSession } from "next-auth/react";
import Admin from "layouts/Admin.js";

import ChatRoom from "components/chatroom";
import { position } from "stylis";

export default function Chatbott() {
  const { data: session, status } = useSession();
  console.log(session);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  if (loading) {
    return <h2 style={{ marginTop: 100, textAlign: "center" }}>LOADING...</h2>;
  }
  return (
    <Admin title="CHATROOM" headerText="Welcome to KissanTalks, Chat with your farming buddies">
      <div style={{zIndex:10, position:"relative"}}>
        <iframe
          src="http://localhost:8080/index.html"
          width="100%"
          height="500px"
        ></iframe>
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

