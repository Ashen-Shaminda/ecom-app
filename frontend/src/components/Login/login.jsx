import React from 'react';
import '../styles/login.css';
import Axios from 'axios';

const styles = {
  background: 'linear-gradient(35deg, rgba(27,22,108,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 79%)',
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: ""
    }
  }

  async loginForm() {
    Axios.post('/login', {
      email: this.state.email,
      password: this.state.pass
    })
      .then(function (response) {
        if (response.data.role == "customer" && response.data.state == "active") {
          localStorage.setItem('isLogedIn', true);
          localStorage.setItem('user', JSON.stringify(response.data))
          window.location = '/User';
        }
        if (response.data.role == "seller" && response.data.state == "active") {
          localStorage.setItem('isLogedIn', true);
          localStorage.setItem('user', JSON.stringify(response.data))
          window.location = '/SalesManager/sales';
        }
      })
      .catch(function (error) {
        console.log(error.data);
      });

  }

  render() {
    return (
      <div style={styles} className='pb-3'>
        <nav className="navbar" style={{ height: "65px" }}>
          <a class="navbar-brand" href="#">
            <img style={{ marginLeft: "20px" }} src="https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-17.jpg" width="40" height="40" alt="" />
            <span className="ml-2"> <b> Apparex Clothing </b></span>
          </a>
          <ul>
            <li>
              <a href="/" style={{ fontSize: "18px" }}>Home</a>
            </li>
            <li>
              <a href="/products" style={{ fontSize: "18px" }}>Product</a>
            </li>
            <li>
              <a href="/login" style={{ fontSize: "18px" }}>Login</a>
            </li>
            <li>
              <a href="/register" style={{ fontSize: "18px" }}>Register</a>
            </li>
            <li>
              <a href="/Seller" style={{ fontSize: "18px" }}>Register As Seller</a>
            </li>
            <li>
              <a href="/products/cart" style={{ fontSize: "18px" }}>Cart</a>
            </li>
            <li>
              <a href="/user" style={{ fontSize: "18px" }}>Account</a>
            </li>
          </ul>
        </nav>

        <div className="login-container mt-5 mb-5 col-3">
          <h2>Login to Your Account</h2>
          <div className="mb-3">
            <center>
              <img style={{ width: "50%" }}
                src="user.png"
                alt="example"
              />
            </center>
          </div>

          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="name@example.com" required onChange={(e) => this.setState({ email: e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="*****" required onChange={(e) => this.setState({ pass: e.target.value })} />
            </div>
            <br />
            <button type="button" className="login-button" onClick={async () => { await this.loginForm(); }}>Login</button>
          </form>
          <p>Don't have an account? <a href="/register">Create an account</a></p>
        </div>


      </div>
    );
  }
}

export default Login;
