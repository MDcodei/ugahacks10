import React, {useState} from "react";
import './login.css';

const Login = ({ onToggle, onSuccess }) => {
    const [showModal, setShowModal] = useState(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSuccess(); // Redirect to aftersignin
      };

    return (
      <>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <form className="form" onSubmit={handleSubmit}>
                <p className="title">Login</p>
                <p className="message">Sign in to your account and enjoy full access.</p>
                
                <label>
                  <input className="input" type="email" placeholder="" required />
                  <span>Email</span>
                </label>
  
                <label>
                  <input className="input" type="password" placeholder="" required />
                  <span>Password</span>
                </label>
  
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