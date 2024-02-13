import React from "react";
import { LoginButton } from "../auth/Login";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/Logout";

export const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>LOADING ... </div>;
  }
  return (
    <>
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
            <LogoutButton/>
        </div>

      )}
      {!isAuthenticated && (
        <div className="container bg-secondary text-white p-5 mt-5">
          <h2>Xeon Academia Portal</h2>
          <div className="mt-3">
            If you are a staff member, please get your credentials from the
            company.
          </div>
           <LoginButton/>
        </div>
      )}
    </>
  );
};
