import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./login";
import Logout from "./logout";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

useEffect(async()=>{
  if(!isAuthenticated)return;
  const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
  const accessToken = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: "read:current_user",
  });
  console.log(accessToken);
},[])



  return (
    isAuthenticated?(
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Logout/>
      </div>
    ):<Login/>

  );
};

export default Profile;