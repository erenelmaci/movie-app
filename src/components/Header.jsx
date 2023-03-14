import { useContext } from "react"
import { Image } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { SlLogin, SlLogout, SlUserFollow } from "react-icons/sl"
import { Link } from "react-router-dom"
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
        className="fs-5"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Movie App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {!myUser && (
                <Nav.Link className="fs-5" as={Link} to="/login">
                  <SlLogin /> Login
                </Nav.Link>
              )}
              {myUser && (
                <Nav.Link onClick={handleLogoutClick} as={Link} to="/login">
                  <SlLogout /> Logout
                </Nav.Link>
              )}
              {!myUser && (<Nav.Link as={Link} to="/register" eventKey={2}>
                <SlUserFollow /> Register
              </Nav.Link>)}
              {!myUser ? null : (
                <Image
                  style={{ width: "2.5rem" }}
                  src={myUser.photoURL}
                  alt="img"
                  roundedCircle
                />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
