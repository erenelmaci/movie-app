import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import MovieCard from "../components/MovieCard"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { useNavigate } from "react-router-dom"
import "../styles/MovieCard.css"
import Loading from "./Loading"
import { UserContext } from "../context/AuthContext"
import { useContext } from "react"

const Main = () => {
  const [movies, setMovies] = useState([])
  const [movieQuery, setMovieQuery] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const { myUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const theMovieApiKey = process.env.REACT_APP_THEMOVIE_API_KEY
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${theMovieApiKey}&query=${movieQuery}`
    try {
      const response = await axios.get(URL)
      setMovies(response.data.results)
      console.log(response.data.results)
      navigate(`?search=${movieQuery}`)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  const handleCardClick = (movie) => {
    myUser ? navigate(`/movie-detail/${movie.id}`) : navigate("/login")
  }

  useEffect(() => {
    const fetchData = async () => {
      const theMovieApiKey = process.env.REACT_APP_THEMOVIE_API_KEY
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${theMovieApiKey}`
      try {
        const response = await axios.get(URL)
        setMovies(response.data.results)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <form
        style={{ height: "5rem" }}
        className="d-flex justify-content-center mt-4"
        onSubmit={handleSubmit}
      >
        <Form.Control
          style={{ height: "2.5rem" }}
          className="w-25 d-flex justify-center allign-center bg-dark text-white"
          type="text"
          placeholder="Readonly input here..."
          onChange={(e) => setMovieQuery(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          style={{ height: "2.5rem" }}
          variant="warning"
        >
          Search
        </Button>
      </form>

      {loading ? (
        <Loading />
      ) : (
        <div className="card-container">
          <Row
            xs={1}
            md={2}
            lg={3}
            xl={5}
            xxl={5}
            className="card-container g-4"
          >
            {movies.map((movie) => (
              <Col
                className="d-flex justify-content-center align-items-center"
                key={movie.id}
                onClick={() => handleCardClick(movie)}
              >
                <MovieCard
                  poster={movie.poster_path}
                  overview={movie.overview}
                  title={movie.title}
                  id={movie.id}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  )
}

export default Main
