import errorImage from "../assets/error-500_aa3dde6a.jpg"

const NotFound = () => {
  return (
    <>
      <div>
        <div>
          <img src={errorImage} alt="" />
        </div>
        <div>
          <h1>SORRY, THE PAGE YOU REQUESTED IS NOT FOUND!</h1>
          <p>
            I think you're in the wrong place because I can't see the page
            you're looking for.
          </p>
          <button>BACK TO HOME PAGE</button>
        </div>
      </div>
    </>
  )
}

export default NotFound
