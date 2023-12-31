import React from 'react';
import '../styles/login.css';
import Axios from 'axios';

class UpdateStore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storeObject: localStorage,
            name: "",
            address: "",
            contact: "",
            user: JSON.parse(localStorage.getItem('user')),
            ownerID: JSON.parse(localStorage.getItem('user'))._id,
        }
    }

    async componentDidMount() {
        const response = await Axios.get('/store/' + this.state.ownerID);
        this.setState({
            storeObject: response.data,
            name: response.data.name,
            address: response.data.address,
            contact: response.data.contact,
        })
    }

    async updateProduct() {
        Axios.put('/store/' + this.state.storeObject._id, {
            name: this.state.name,
            address: this.state.address,
            contact: this.state.contact,
        })
            .then(function (response) {
                window.location = "/SalesManager/updateStore";
            })
            .catch(function (error) {
                console.log(error.data);
            });
    }

    render() {
        return (

            <div>
                <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow" style={{ height: "65px" }}>
                    <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Seller Dashboard</a>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-nav">
                        <div className="nav-item text-nowrap">
                            <a className="nav-link px-3" href="/">Sign out</a>
                        </div>
                    </div>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse" style={{ backgroundColor: "rgb(242 243 244)" }}>
                            <div className="position-sticky pt-3 sidebar-sticky">
                                <ul className="nav flex-column" style={{ height: "800px" }}>
                                    <li className="nav-item" >
                                        <a className="nav-link active text-dark" aria-current="page" href="/SalesManager/SellerAddProduct">
                                            <span data-feather="home" className="align-text-bottom"></span>
                                            Add Product
                                        </a>
                                        <hr style={{ color: "white" }} />
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link active text-dark" aria-current="page" href="/SalesManager/productList">
                                            <span data-feather="home" className="align-text-bottom"></span>
                                            Product List
                                        </a>
                                        <hr style={{ color: "white" }} />
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link active text-dark" aria-current="page" href="/SalesManager/sales">
                                            <span data-feather="home" className="align-text-bottom"></span>
                                            Store Register
                                        </a>
                                        <hr style={{ color: "white" }} />
                                    </li>
                                    <li className="nav-item" >
                                        <a className="nav-link active text-dark" aria-current="page" href="/SalesManager/updateStore">
                                            <span data-feather="home" className="align-text-bottom"></span>
                                            Update Store
                                        </a>
                                        <hr style={{ color: "white" }} />
                                    </li>

                                </ul>
                            </div>
                        </nav>
                        <div className='col-8 offset-1'>
                            <center>
                                <h1 className='mt-4' style={{ fontWeight: "bold" }}>Update Store</h1>
                            </center>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Store Name</label>
                                    <input type="text" class="form-control" id="text" placeholder="" value={this.state.name} required onChange={(e) => this.setState({ name: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Store Address</label>
                                    <input type="text" class="form-control" id="text" placeholder="" value={this.state.address} required onChange={(e) => this.setState({ address: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Store Contact</label>
                                    <input type="text" class="form-control" id="text" placeholder="" value={this.state.contact} required onChange={(e) => this.setState({ contact: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Store Owner</label>
                                    <input type="text" class="form-control" id="text" placeholder="0" required readOnly value={this.state.user.name} />
                                </div>
                                <br />
                                <button type="submit" className='btn btn-primary col-12' onClick={async () => { await this.updateProduct(); }}>ADD</button>
                                <br></br>
                                <button type="reset" className='btn btn-danger col-12'>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default UpdateStore;

