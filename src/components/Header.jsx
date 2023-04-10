import { useContext } from "react"
import { Image } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { SlLogin, SlLogout, SlUser, SlUserFollow } from "react-icons/sl"
import { Link, NavLink } from "react-router-dom"
import { auth } from "../auth/firebase"
import { UserContext } from "../context/AuthContext"

const Header = () => {
  const { myUser, setMyUser } = useContext(UserContext)
  const handleLogoutClick = () => {
    auth
      .signOut()
      .then(() => {
        setMyUser(false)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Navbar
        className="fs-7"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand data-test="movieHeader" as={Link} to="/">
            React Movie App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="text-white">
              {!myUser && (
                <Nav.Link as={Link} to="/login">
                  <SlLogin /> Login
                </Nav.Link>
              )}
              {myUser && (
                <Nav.Link onClick={handleLogoutClick} as={Link} to="/login">
                  <SlLogout /> Logout
                </Nav.Link>
              )}
              {!myUser && (
                <Nav.Link as={Link} to="/register" eventKey={2}>
                  <SlUserFollow /> Register
                </Nav.Link>
              )}
              {myUser ? (
                <Image
                  style={{ width: "2.5rem" }}
                  src={myUser.photoURL}
                  alt="img"
                  roundedCircle
                />
              ) : (
                <NavLink to="/login" className="text-white m-1">
                  <SlUser size={24} />
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
