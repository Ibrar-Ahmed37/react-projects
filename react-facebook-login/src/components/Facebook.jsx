import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
export const Facebook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const appId = import.meta.env.VITE_FACEBOOK_ID;
  let fbContent = null;

  const responseFacebook = (response) => {
    const user = { name: response.name, picture: response.picture.data.url };
    setIsLoggedIn(true);
    setUser(user);
  };

  const componentClicked = () => console.log("component clicked");

  if (isLoggedIn) {
    fbContent = (
      <div>
        Welcome , Logged in : as {user.name}{" "}
        <div>
          <img src={user.picture} />
        </div>
      </div>
    );
  } else {
    fbContent = (
      <FacebookLogin
        appId= {appId} 
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return <>{fbContent}</>;
};
