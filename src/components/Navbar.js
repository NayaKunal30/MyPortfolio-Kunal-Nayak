import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        <h2
            style={{
              color: "#48D1CC",
              fontWeight: "bold",
              fontSize: "1.5rem",
              margin: "0",
            }}
          >
            Kunal's Portfolio
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{ borderColor: "#48D1CC" }}
        >
          <span style={{ backgroundColor: "#48D1CC" }}></span>
          <span style={{ backgroundColor: "#48D1CC" }}></span>
          <span style={{ backgroundColor: "#48D1CC" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                style={{ color: "#48D1CC" }}
              >
                <AiOutlineHome style={{ marginBottom: "2px", color: "#48D1CC" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: "#48D1CC" }}
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: "#48D1CC" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: "#48D1CC" }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", color: "#48D1CC" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ color: "#48D1CC" }}
              >
                <CgFileDocument style={{ marginBottom: "2px", color: "#48D1CC" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/NayaKunal30"
                target="_blank"
                className="fork-btn-inner"
                style={{ borderColor: "#48D1CC", color: "#48D1CC" }}
              >
                <CgGitFork style={{ fontSize: "1.2em", color: "#000" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", color: "#000" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
