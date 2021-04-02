import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import styles from "./styles.module.css";
import Modal from '../ContactFormModal/ContactFormModal';

const NavBootstrap = () => {
  return (
    <Navbar expand="sm" className={styles.nav}>
      <span className={styles.menuIcon}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </span>
      <Navbar.Brand href="/" style={{ paddingLeft: "30px", border: "none" }}>
        <img
          src="/logo/logo13.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Letstar Management Ltd"
        />{" "}
        <span className={styles.brandTitle}>LetStar Management Ltd</span>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <Link href="/">Home</Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link href="/about">About Us</Link>
          </Nav.Item>
          <li>
            <Link href="#">Our Services</Link>
            <ul>
              <li>
                <Link href="/our_services/quarry-and-mining">Quarry Mining Services</Link>
              </li>
              <li>
                <Link href="/our_services/civil-engineering">Civil Engineering Structures</Link>
              </li>
              <li>
                <Link href="/our_services/road-construction">Road Construction</Link>
              </li>
              <li>
                <Link href="/our_services/earthworks">Earthworks</Link>
              </li>
              <li>
                <Link href="/our_services/building-construction">Building Construction</Link>
              </li>
            </ul>
          </li>
          <div className={styles.getInTouchBtn}>
            <Modal />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBootstrap;
