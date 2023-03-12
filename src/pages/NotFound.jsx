import { useNavigate } from "react-router-dom"
import errorImage from "../assets/error-500_aa3dde6a.jpg"
import "../styles/NotFound.css"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="main-container">
        <div className="img-container">
          <img src={errorImage} alt="img" />
        </div>
        <div className="not-found-text-container">
          <h1>SORRY, THE PAGE YOU REQUESTED IS NOT FOUND!</h1>
          <p>
            I think you're in the wrong place because I can't see the page
            you're looking for.
          </p>
          <button onClick={() => navigate(-1)} className="not-found-button">BACK TO HOME PAGE</button>
        </div>
      </div>
    </>
  )
}

export default NotFound
