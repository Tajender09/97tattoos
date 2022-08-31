import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/Images/logo.png";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/97tattoos">
          <img
            src={logo}
            alt="97 Tattoos"
            loading="lazy"
            css={`
              width: 170px;
            `}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/shop">
              <NavSpan>Shop</NavSpan>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <NavSpan>About Us</NavSpan>
            </Nav.Link>
            <NavDropdown title={<NavSpan>Tattoo Categories</NavSpan>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

const NavSpan = styled.span`
  font-size: 16px;
  letter-spacing: 0.1em;
  color: #000;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  position: relative;

  :after {
    content: "";
    position: absolute;
    top: 105%;
    left: 49%;
    background-color: black;
    height: 2px;
    width: 0;
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
    left: 0;
    right: 0;
  }
`;
