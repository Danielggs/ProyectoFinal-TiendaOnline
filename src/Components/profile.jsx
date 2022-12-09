import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css"
import Login from "./login";
import Logout from "./logout";
import axios from 'axios'

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

useEffect(async()=>{
  if(!isAuthenticated)return;
  const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
  const token = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: "read:current_user",
  });
  axios.post("http://localhost:3002/user",{name:user.name,email:user.email},{headers:{Authorization : `Bearer ${token}`}})  
},[isAuthenticated])



  return (
    isAuthenticated?(
      <div className="profile">
        <img className="profile-img" src={user.picture} alt={user.name} />
        <p className="profile-name" >{user.name}</p>
        <Logout/>
      </div>
    ):<Login/>

  );
};

export default Profile;