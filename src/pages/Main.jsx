import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import MovieCard from "../components/MovieCard"
import { Button } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"

const Main = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const theMovieApiKey = process.env.REACT_APP_THEMOVIE_API_KEY
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${theMovieApiKey}`
      try {
        const response = await axios.get(URL)
        setMovies(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div
        style={{ height: "5rem" }}
        className="d-flex justify-content-center mt-4"
      >
        <Form.Control
          style={{ height: "2.5rem" }}
          className="w-25 d-flex justify-center allign-center bg-dark text-white"
          type="text"
          placeholder="Readonly input here..."
        />
        <Button style={{ height: "2.5rem" }} variant="warning">
          Search
        </Button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Row md={6} lg={4} xl={12} className="g-4">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie-detail/${movie.id}`}>
              <Col
                className="d-flex justify-content-center align-items-center"
                key={movie.id}
              >
                <MovieCard
                  poster={movie.poster_path}
                  overview={movie.overview}
                  title={movie.title}
                  id={movie.id}
                />
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    </>
  )
}

export default Main
