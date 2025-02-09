import React, { useState } from 'react';
import './register.css'; // Import the CSS

const Register = ({ onToggle, onSuccess }) => {
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
              <p className="title">Register</p>
              <p className="message">Signup now and get full access to our app.</p>
              <div className="flex">
                <label>
                  <input className="input" type="text" placeholder="" required />
                  <span>Firstname</span>
                </label>

                <label>
                  <input className="input" type="text" placeholder="" required />
                  <span>Lastname</span>
                </label>
              </div>

              <label>
                <input className="input" type="email" placeholder="" required />
                <span>Email</span>
              </label>

              <label>
                <input className="input" type="password" placeholder="" required />
                <span>Password</span>
              </label>

              <label>
                <input className="input" type="password" placeholder="" required />
                <span>Confirm password</span>
              </label>

              <button className="submit" type="submit">Submit</button>

              <p className="signin">
                Already have an account? <a onClick={onToggle}>Signin</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
