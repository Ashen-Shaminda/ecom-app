import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/styles/ReusableNavbar.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { SearchResults } from "./SearchResults";
// import NavDropdown from "react-bootstrap/NavDropdown";

function ReusableNavbar() {
  const [results, setResults] = useState([]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", float: "left" }}
            navbarScroll
            align="right"
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/seller">Register a Seller</Nav.Link>
            <Nav.Link href="/products/cart">Cart</Nav.Link>
            <Nav.Link href="/user">User</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            <SearchBar setResults={setResults} />
            <SearchResults results={results} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReusableNavbar;
