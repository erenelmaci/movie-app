import { useContext } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { auth } from "../auth/firebase"
import { UserContext } from "../context/AuthContext"

const Header = () => {
  const { myUser, setMyUser } = useContext(UserContext)
  // const navigate = Navigate()
  const handleLogoutClick = () => {
    auth
      .signOut()
      .then(() => {
        setMyUser(false)
        // navigate("/")
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Movie App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              {myUser && (
                <Nav.Link onClick={handleLogoutClick} as={Link} to="/login">
                  Logout
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/register" eventKey={2}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
