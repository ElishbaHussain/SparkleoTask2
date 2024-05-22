import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import LogoImg from "./logo.png"

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  return (
    <div className="App">
      
       
      <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
           
              <button
                className="ghost"
               
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
           <div>

           </div>
           <div className="Spark1">
           <div className="social-container">
  <a href="#" className="social">
  <img src={LogoImg} alt="Description of the image"/>
  </a>
</div>
            <div className="ghost " >
                Spark
              </div>
           </div>
        


              
              <div className="spark"
                
                >
               <p>Learn more About Air Drive on</p>
               <h2>Spark.pl</h2>
                </div>
            
              
            
            </div>
          </div>
        </div>
      </div>
   
  );
}
