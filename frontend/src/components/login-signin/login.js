import React, {useState} from "react";
import { useAuth0} from "@auth0/auth0-react";

import './login.css';

const Login = ({ onToggle, onSuccess }) => {

    const [showModal, setShowModal] = useState(true);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Validation check for email and password
      if (email === validEmail && password === validPassword) {
          setError("");  // Clear any previous error messages
          onSuccess();   // Call the success function, for example redirecting
      } else {
          setError("Invalid email or password"); // Show error message if credentials don't match
      }
  };

      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
      
      const validEmail = "jane@doe.com";
      const validPassword = "password123";

    return (
      <>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <form className="form" onSubmit={handleSubmit}>
                <p className="title">Login</p>
                <p className="message">Sign in to your account and enjoy full access.</p>
                
                <label>
                  <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    required
                  />
                  <span>Email</span>
                </label>
  
                <label>
                  <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=""
                    required
                  />
                  <span>Password</span>
                </label>
                {error && <p className="error-message">{error}</p>} 

                <button className="submit" type="submit">Login</button>
  
                <p className="signup">
                  Don't have an account? <a onClick={onToggle}>Sign Up</a>
                </p>
              </form>
            </div>
          </div>
        )}
      </>
    );
  };

export default Login;