import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../auth/Login";
import LogoutButton from "../auth/Logout";

export const Staff = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      {!isAuthenticated && (
        <h4 className='mx-3'>
          This is a restricted Route, Please login so you can access the Staff
          Information
          <LoginButton />
        </h4>
      )}
      {isAuthenticated && <h1>hello from staff <LogoutButton/></h1>}
    </>
  );
};
