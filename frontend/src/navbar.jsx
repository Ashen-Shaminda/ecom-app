import React, { Component } from "react";

const styles = {
  background:
    "linear-gradient(35deg, rgba(27,22,108,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 79%)",
};

export default class NavBar extends Component {
  render() {
    return (
      <div style={styles}>
        <nav className="navbar" style={{ height: "65px" }}>
          <a class="navbar-brand" href="#">
            <img
              style={{ marginLeft: "20px" }}
              src="https://icon-library.com/images/e-commerce-icon-png/e-commerce-icon-png-17.jpg"
              width="40"
              height="40"
              alt=""
            />
            <span className="ml-2">
              {" "}
              <b> Apparex Clothing </b>
            </span>
          </a>
          <ul>
            <li>
              <a href="/" style={{ fontSize: "18px" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" style={{ fontSize: "18px" }}>
                Product
              </a>
            </li>
            <li>
              <a href="/login" style={{ fontSize: "18px" }}>
                Login
              </a>
            </li>
            <li>
              <a href="/register" style={{ fontSize: "18px" }}>
                Register
              </a>
            </li>
            <li>
              <a href="/Seller" style={{ fontSize: "18px" }}>
                Register As Seller
              </a>
            </li>
            <li>
              <a href="/products/cart" style={{ fontSize: "18px" }}>
                Cart
              </a>
            </li>
            <li>
              <a href="/user" style={{ fontSize: "18px" }}>
                Account
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
