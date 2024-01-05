import React from "react";
import "../styles/product.css";
import Axios from "axios";

const styles = {
  background:
    "linear-gradient(35deg, rgba(27,22,108,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 79%)",
};

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }

  async componentDidMount() {
    this.setState({ dataList: await this.getAllProduct() });
  }

  async getAllProduct() {
    try {
      const response = await Axios.get("/product");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  renderProducts() {
    return this.state.dataList.map((product) => (
      <div className="product-card" key={product.id}>
        <img
          src="https://www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg"
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <center>
          <p style={{ width: "70%" }}>Available Stock: {product.qty}</p>
        </center>
        <p>Price: Rs.{product.price}.00</p>
        <div className="row">
          <a
            href={"/products/singleProduct/" + product._id}
            className="buy-now-button col-12 text-white mt-3"
          >
            View Product
          </a>
        </div>
      </div>
    ));
  }

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

        <div style={{ height: "800px" }}>
          <div className="container-fluid mt-5">
            <center>
              <span
                className="text-white"
                style={{ fontSize: "40px", fontWeight: "bold" }}
              >
                Product
              </span>
            </center>
            <hr style={{ backgroundColor: "white" }} />{" "}
            <div className="search-bar"></div>
            <div className="product-list">{this.renderProducts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
