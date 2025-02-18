import React from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-light">
        <Container>
       
          <Navbar.Brand href="#">
            <img
              src="./images/logo.png"
              alt="FPT University"
              width="120"
            />
          </Navbar.Brand>

         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

       
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="text-dark">🏠 Trang chủ</Nav.Link>
              <Nav.Link href="#" className="text-dark">📖 Ngành học</Nav.Link>
              <Nav.Link href="#" className="text-dark">📕 Tuyển sinh</Nav.Link>
              <Nav.Link href="#" className="text-dark">📋 Sinh viên</Nav.Link>

              
              <NavDropdown title="🎓 Thông tin khác" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Giảng viên</NavDropdown.Item>
                <NavDropdown.Item href="#">Thời khóa biểu</NavDropdown.Item>
                <NavDropdown.Item href="#">Liên hệ</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div className="banner">
        <img src="./images/image.png" alt="FPT Banner" className="w-100"/>
      </div>
    </>
  );
};

export default Header;
