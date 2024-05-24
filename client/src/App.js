import React from 'react';
import './components/header/shoes.css';
import './shoes.css';
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const App = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#f5f5f5'
  };

  const cardStyle = {
    backgroundColor: '#fff',
    width: '500px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '0px 0px 270px 420px'
  };

  const logoStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  };

  const imgStyle = {
    width: '60px',
    height: '80px'
  };

  const nameStyle = {
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center'
  };

  const crossStyle = {
    fontSize: '14px',
    color: '#666',
    marginRight: '5px'
  };

  const pinStyle = {
    fontSize: '14px',
    color: '#666'
  };

  const buttonStyle = {
    width: '100%',
    height: '50px',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={logoStyle}>
          <img src="/0139937c2f641ab61fd020844ccfd459.jpg" style={imgStyle} alt="Logo" />
        </div>
        <div>
          <span style={nameStyle}>Anshdeep Singh</span>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            <span style={crossStyle}>&#10005;&#10005;&#10005;&#10005;</span>
            <span style={pinStyle}>8880</span>
          </div>
        </div>
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <input type="radio" name="optradio" className="mr-1" checked />
          <span style={{fontSize: '16px'}}>Total amount due: 7150.00 INR</span>
        </div>
        <div style={{textAlign: 'center', marginBottom: '20px'}}>
          <input type="radio" name="optradio" className="mr-1" />
          <span style={{fontSize: '16px'}}>Other amount: $<input type="text" className="ml-1" placeholder="0" style={{width: '60px'}} /></span>
        </div>
        <div>
  
  <a class="btn btn-primary" href="https://buy.stripe.com/test_28o2aYgDT29c60EcMM" style={buttonStyle} target="_blank" rel="noopener noreferrer" st
  yle={{textDecoration: 'none'}} role="button">Pay Now</a>
</div>

      </div>
    
      <footer className="custom-footer">
        <div className="custom-container">
          <div className="custom-column">
            <h3>COMPANY</h3>
            <p>About Nike</p>
            <p>News</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Sustainability</p>
          </div>
          <div className="custom-column">
            <h3>HELP</h3>
            <p>Get help</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Return</p>
          </div>
          <div className="custom-column">
            <h3>FIND A STORE</h3>
            <p>Become A Member</p>
            <p>Send Us Feedback</p>
          </div>
          <div className="custom-column">
            <h3>BECOME A MEMBER</h3>
            <p>Sign up for exclusive offers</p>
            <p>Join Now</p>
          </div>
        </div>
        <div className="custom-horizontal-line"></div>
        <div className="custom-footer-bottom">
          <div className="custom-container">
            <div className='do'>
              <p>&copy; 2024 Nike, Inc. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
