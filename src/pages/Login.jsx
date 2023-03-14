import "../styles/Login.css"
import googleIcon from "../assets/google.png"
import { signInWithEmail, signInWithGoogle } from "../auth/firebase"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { SlEnvolope, SlKey } from "react-icons/sl"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClickGoogle = (e) => {
    e.preventDefault()
    signInWithGoogle(navigate)
  }
  const handleClickApple = (e) => {
    e.preventDefault()
  }
  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmail(email, password, navigate)
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <form className="form_container">
          <div className="logo_container" />
          <div className="title_container">
            <p className="title">Login to your Account</p>
            <span className="subtitle">
              Get started with our app, just create an account and enjoy the
              experience.
            </span>
          </div>
          <br />
          <div className="input_container">
            <label className="input_label" htmlFor="email_field">
              Email
            </label>
            <div className="icon">
              <SlEnvolope />
            </div>
            <input
              placeholder="name@mail.com"
              title="Inpit title"
              name="input-name"
              type="text"
              className="input_field"
              id="email_field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_container">
            <label className="input_label" htmlFor="password_field">
              Password
            </label>
            <div className="icon">
              <SlKey />
            </div>
            <input
              placeholder="Password"
              title="Inpit title"
              name="input-name"
              type="password"
              className="input_field"
              id="password_field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSignIn}
            title="Sign In"
            type="submit"
            className="sign-in_btn"
          >
            <span>Sign In</span>
          </button>
          <div className="separator">
            <hr />
            <span>Or</span>
            <hr />
          </div>
          <button
            onClick={handleClickGoogle}
            title="Sign In"
            type="submit"
            className="sign-in_ggl"
          >
            <img src={googleIcon} alt="google icon" />
            <span>Sign In with Google</span>
          </button>
          <button
            onClick={handleClickApple}
            title="Sign In"
            type="submit"
            className="sign-in_apl"
          >
            <svg
              preserveAspectRatio="xMidYMid"
              version="1.1"
              viewBox="0 0 256 315"
              height="20px"
              width="16px"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M213.803394,167.030943 C214.2452,214.609646 255.542482,230.442639 256,230.644727 C255.650812,231.761357 249.401383,253.208293 234.24263,275.361446 C221.138555,294.513969 207.538253,313.596333 186.113759,313.991545 C165.062051,314.379442 158.292752,301.507828 134.22469,301.507828 C110.163898,301.507828 102.642899,313.596301 82.7151126,314.379442 C62.0350407,315.16201 46.2873831,293.668525 33.0744079,274.586162 C6.07529317,235.552544 -14.5576169,164.286328 13.147166,116.18047 C26.9103111,92.2909053 51.5060917,77.1630356 78.2026125,76.7751096 C98.5099145,76.3877456 117.677594,90.4371851 130.091705,90.4371851 C142.497945,90.4371851 165.790755,73.5415029 190.277627,76.0228474 C200.528668,76.4495055 229.303509,80.1636878 247.780625,107.209389 C246.291825,108.132333 213.44635,127.253405 213.803394,167.030988 M174.239142,50.1987033 C185.218331,36.9088319 192.607958,18.4081019 190.591988,0 C174.766312,0.636050225 155.629514,10.5457909 144.278109,23.8283506 C134.10507,35.5906758 125.195775,54.4170275 127.599657,72.4607932 C145.239231,73.8255433 163.259413,63.4970262 174.239142,50.1987249"
                />
              </g>
            </svg>
            <span>Sign In with Apple</span>
          </button>
          <p className="note">Terms of use &amp; Conditions</p>
        </form>
      </div>
    </>
  )
}

export default Login
