import React from 'react';
import '../styles/user.css';

const styles = {
  background: 'linear-gradient(35deg, rgba(27,22,108,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 79%)',
};

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user'))
    }
    if (localStorage.getItem('isLogedIn') === 'false') {
      window.location = '/login';
    }
  }

  async logout() {
    localStorage.setItem('isLogedIn', "false");
    localStorage.removeItem('user');
    window.location = "/";
  }

  render() {
    return (
      <div style={styles}>
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
        <center>
          <h1 className='mt-3' style={{ fontWeight: "bold", color: "white" }}>Welcome ! </h1>
        </center>
        <div className="user-container mt-3" style={{ height: "700px", backgroundColor: "white" }}>
          <div className="mb-3">
            <center>
              <img style={{ width: "30%" }}
                src="user.png"
                alt="example"
              />
              <h2 className='text-dark' style={{ fontSize: "35px", fontWeight: "bold" }}>{this.state.user.name}</h2>
            </center>
            <hr style={{ backgroundColor: "black" }} />
          </div>
          <div className="row">
            <a href="/products/UserOderHistory" className='btn btn-outline-primary col-4 offset-1 mt-5 mb-4' style={{ height: "130px", fontSize: "18px", }}><img style={{ width: "70%" }} src='https://cdn-icons-png.flaticon.com/512/3500/3500833.png' alt="example" /> <p className='text-dark' style={{ fontSize: "25px", fontWeight: "bold" }}>Order</p> </a>
            <a href="/user/UserProfile" className='btn btn-outline-primary col-4 offset-1 mt-5' style={{ height: "130px", fontSize: "18px", }}><img style={{ width: "70%" }} src='https://static.vecteezy.com/system/resources/previews/010/056/184/original/people-icon-sign-symbol-design-free-png.png' alt="example" /> <p className='text-dark' style={{ fontSize: "25px", fontWeight: "bold" }}>Profile</p> </a>
            <a href="/AffiliateDashboard/view" className='btn btn-outline-primary col-4 offset-1 mt-5' style={{ height: "130px", fontSize: "18px", }}><img style={{ width: "70%" }} src='https://cdn.icon-icons.com/icons2/3819/PNG/512/web_ui_affiliate_icon_233641.png' alt="example" /> <p className='text-dark' style={{ fontSize: "25px", fontWeight: "bold" }}>Affiliate </p> </a>
            <a href="/" onClick={async () => { await this.logout(); }} className='btn btn-outline-primary col-4 offset-1 mt-5' style={{ height: "130px", fontSize: "18px", }}><img style={{ width: "70%" }} src='https://www.shareicon.net/data/512x512/2016/10/25/847781_exit_512x512.png' alt="example" /> <p className='text-dark' style={{ fontSize: "25px", fontWeight: "bold" }}>Logout</p> </a>

          </div>
        </div>
      </div>
    );
  };
}
export default User;
