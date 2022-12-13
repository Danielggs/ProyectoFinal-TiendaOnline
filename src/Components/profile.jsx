import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./profile.css"
import Login from "./login";
import Logout from "./logout";
import axios from 'axios'
import { Link } from "react-router-dom";
const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

useEffect(async()=>{
  if(!isAuthenticated)return;
  const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
  const token = await getAccessTokenSilently({
    audience: `https://${domain}/api/v2/`,
    scope: "read:current_user",
  });
  axios.post("https://pf-backend-production-1e5b.up.railway.app/user",{name:user.name,email:user.email},{headers:{Authorization : `Bearer ${token}`}})  
},[isAuthenticated])



  return (
    isAuthenticated?(
      <div className="profile">
        <Link to = "user">
          <img className="profile-img" src={user.picture} alt={user.name} />
        </Link>
        <p className="profile-name" >{user.given_name}</p>
        <Logout/>
      </div>
    ):<Login/>

  );
};

export default Profile;