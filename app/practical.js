import React, { useState } from "react";

import "./styles.css";

function App() {
  // React States
  const [uname, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setShowName(true);
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container"> 
             <p> </p>
            <label>Email-ID </label>
            <input type="email" name="uname" value={uname} required
            onChange={(event) => {setName(event.target.value)
              setName(event.target.value.toLowerCase());}
              
                          }/>
          </div>
          <div className="input-container">
             <p> </p>
            <label>Age </label>
            <input type="number" name="pass" max="100" min= "18"             required />
           <p> </p>
          </div>
          <div className="button-container">
            <input type="submit" value="Submit"/>
          </div>
        </form>
        {showName === true &&
        <p>Welcome! You have successfully subscribed to our newsletter {uname}!</p>}
        </div>        
      </div>
    </div>
  );
}

export default App;

