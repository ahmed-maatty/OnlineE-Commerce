import React from 'react';
import './Navv.css';
import {Container , Nav ,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png' ;

function Navv() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link className='NavBars' to="/">Home</Link>
                    <Link className='NavBars' to="/shop">Shop</Link>
                    <Link className='NavBars' to="/blog">Blog</Link>
                    <Link className='NavBars' to="/about">About</Link>
                    <Link className='NavBars' to="/contact">Contact</Link>
                    <Link className='NavBars' to="#link"> <FontAwesomeIcon icon={faBagShopping} /></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navv