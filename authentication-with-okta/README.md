In this react practice Project, I worked on the authorization part. I made a route that is only accessible to the users who have access to it, otherwise they will be asked to login first to access the route.
I have taken the functionalities of login and logout from the auth0.

Authprovider is wrapped in the main.jsx file which wraps the whole App. It gets the client id, domain and uri.
    <Auth0Provider
      domain='dev-7y73fn3mlzdr0cko.us.auth0.com'
      clientId= 'vVOSbxMBTzixJ4LVzm3VZF20Bmez6ijS'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
Then You can use the useAuth0() function this will give you the user,isLoading and isAuthenticated values.

      const { isAuthenticated, user, isLoading } = useAuth0();
        if (isLoading) {
            return <h1>Loading ...</h1>;
        }

We can tweak with these values wherever we want to check 
    { isAuthenticated && <div> user information : {user.name} <Logout/></div>)
    { !isAuthenticated && <div> First you have to login<Login/></div>)