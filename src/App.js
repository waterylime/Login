import React, {useState, useEffect} from 'react';
import 'bulma/css/bulma.css';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';

function App() {
  const [userCount, setUserCount] = useState(
    0
  )
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  useEffect(()=>{
    alert("after" + userCount);
  },[userCount])
  return (
    <>
      {/* <Header /> */}

      <div className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            {!isLoading && !user && userCount<4 &&(
              <>
                <h1>Click Below!</h1>
                <button
                  onClick={()=> {
                    alert("b4" + userCount);
                    setUserCount(userCount + 1);
                    
                    loginWithRedirect()
                  }}
                  className="button is-danger">
                  Login
              </button>
              </>
            )}
            
            {!isLoading && user && (
              
              
             window.location.href="https://www.google.com"
              
          //     <>
          //       <h1>You are logged in!</h1>
          //       <p>Hello {user.name}</p>

          //       {user.picture && <img src={user.picture} alt="My Avatar" />}
          //       <hr />
                
          //       <button
          //         onClick={() => logout({ returnTo: window.location.origin })}
          //         className="button is-small is-dark"
          //       >
          //         Logout
          // </button>
              //</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;