import React from 'react';
import '../styles/home.css';
import Axios from 'axios';
var cartItem = [];

const styles = {
  background: 'linear-gradient(35deg, rgba(27,22,108,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 79%)',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    }
  }

  async componentDidMount() {
    this.setState({ dataList: await this.getAllProduct() });
    cartItem = JSON.parse(localStorage.getItem('cart'));
    if (cartItem == null) {
      cartItem = [];
    }
    if (localStorage.getItem('isLogedIn') == null) {
      localStorage.setItem('isLogedIn', false);
    }
  }

  async getAllProduct() {
    try {
      const response = await Axios.get('/product');
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async addToCart(id, qtyValue) {
    try {
      const response = await Axios.get('/product/' + id);

      if (this.checkArray(response.data)) {
        var index = this.checkIndexInArray(response.data);
        cartItem[index] = { product: response.data, qty: (cartItem[index].qty + 1) }
      } else {
        cartItem.push({ product: response.data, qty: qtyValue })
      }
      localStorage.setItem('cart', JSON.stringify(cartItem));
    } catch (error) {
      return [];
    }
  }

  checkArray(productOBJ) {
    var status = false;
    cartItem = JSON.parse(localStorage.getItem('cart'));
    if (cartItem == null) {
      cartItem = [];
    }
    for (var i = 0; i < cartItem.length; i++) {
      if (cartItem[i].product._id == productOBJ._id) {
        status = true;
        break;
      }
    }
    return status;
  }

  checkIndexInArray(productOBJ) {
    var i = 0;
    var index = 0;
    cartItem = JSON.parse(localStorage.getItem('cart'));
    if (cartItem == null) {
      cartItem = [];
    }
    console.log(cartItem);
    for (var i = 0; i < cartItem.length; i++) {
      if (cartItem[i].product._id == productOBJ._id) {
        index = i;
        break;
      }
    }
    return index;
  }

  async delete(id) {
    const response = await Axios.get('/product/' + id);
    var index = this.checkIndexInArray(response.data);
    cartItem.splice(index, 1);
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
        <img src="https://icms-image.slatic.net/images/ims-web/50d35e40-8757-4838-b423-f87f5ae37b42.webp?scm=1003.4.icms-zebra-100031632-2885430.OTHER_6502380832_7713216" className=' mb-5' alt="" srcset="" />
        

        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <center><span className='text-white' style={{ fontSize: "40px", fontWeight: "bold" }}>Product</span></center>
            <hr style={{ backgroundColor: "white" }} />
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {this.state.dataList.map((product) => (
                <div class="col" key={product._id}>
                  <div class="card shadow-sm">
                    <a class="navbar-brand" href="#">
                      <img src="https://www.eatlanka.com/wp-content/uploads/2021/11/Chocolate-cake-recipe-1200a.jpg" alt="" />
                    </a>
                    <h1 style={{ fontSize: "35px", fontWeight: "bold", textAlign: 'center' }}>{product.name}</h1>
                    <div class="card-body">
                      <center>
                        <span style={{ fontSize: "25px", fontWeight: "bold" }}>Rs.{product.price}.00</span>
                      </center>
                      <div className='col-12 mt-4'>
                        <a href={"/products/singleProduct/" + product._id}><button className="buy-button col-12"> View Product </button></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    );
  }

}


export default Home;
