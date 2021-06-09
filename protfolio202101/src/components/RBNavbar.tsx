import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import './RBNavbar.css';

const NavLink = styled(Nav.Link)`
    font-size: 14px;
    color: #fff!important;
    font-weight: bold;

    @media (min-width: 992px) {
        margin: 0 1rem;
        position: relative;
        &:after {
            position: absolute;
            bottom: 15%;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            content: '';
            color: transparent;
            background: #f7ac5d;
            height: 1px;
            transition: all 0.4s;
            transform: scaleX(0);
            transform-origin: left!important;
        }
        &:hover:after {
            transform: scaleX(1);
        }
    }
`

const StyledNavDropdown = styled(NavDropdown)`
    font-size: 14px;
    color: #fff!important;
    font-weight: bold;

    @media (min-width: 992px) {
        margin: 0 1rem;
        position: relative;
        &:after {
            position: absolute;
            bottom: 15%;
            left: 0;
            right: 0;
            margin: auto;
            width: 100%;
            content: '';
            color: transparent;
            background: #f7ac5d;
            height: 1px;
            transition: all 0.4s;
            transform: scaleX(0);
            transform-origin: left!important;
        }
        &:hover:after {
            transform: scaleX(1);
        }
        .dropdown-toggle::after {
            transition: 0.3s all;
        }
        &:hover .dropdown-toggle::after {
            transform: rotate(360deg) scale(1.2)!important ;
        }
    }

}
`


const StyledNavbar = styled(Navbar)`
    background: #415d6b!important;
`

const RBNavbar = () => {
    const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false);

    const onHoverDropdown = (boo: boolean) => {
        setIsDropdownShown(boo);
    }

    return (
        <div>
            <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mx-auto py-3">
                <Navbar.Brand href="#home"className="d-block d-lg-none  " >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-expand-md" className="navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-center">
                    <Nav className="me-auto col-5 p-0">
                        <NavLink href="#features" className="py-3 px-0 mx-3">Menu</NavLink>
                        <NavLink href="#features" className="py-3 px-0 mx-3">Faq</NavLink>
                        <NavLink href="#pricing" className="py-3 px-0 mx-3">Uber Eats</NavLink>
                    </Nav>
                    <Navbar.Brand href="#home" className="d-none d-lg-block mx-auto text-center col-auto">React-Bootstrap</Navbar.Brand>
                    <Nav className="col-5 justify-content-end p-0"> 
                        <StyledNavDropdown title="Dropdown" id="nav-dropdown"  className="py-3 px-0 mx-3" onMouseEnter={() => onHoverDropdown(true)} onMouseLeave={() => onHoverDropdown(false)} show={isDropdownShown}>
                            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        </StyledNavDropdown>
                        <NavLink href="#deets" className="py-3 px-0 mx-3">About Us</NavLink>
                        <NavLink href="#memes" className="py-3 px-0 mx-3">Blog</NavLink>
                        <NavLink href="#memes" className="py-3 px-0 mx-3">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavbar>
        </div>
    )
}

export default RBNavbar
