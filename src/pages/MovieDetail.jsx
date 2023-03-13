import axios from "axios"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import "../styles/MovieDetail.css"

const MovieDetail = () => {
  const { id } = useParams()
  const [detailMovie, setDetailMovie] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_THEMOVIE_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    const fetchData = async () => {
      try {
        const detailQuery = (await axios.get(URL)).data
        setDetailMovie(detailQuery)
        console.log(detailQuery)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [id])

  return (
    <>
      <Container>
        <Row
          style={{ textAlign: "left" }}
          className="justify-content-center mt-5"
        >
          <Col className="w-100 flex-wrap" xs={1} lg={6} md={8}>
            <div
              style={{ backgroundColor: "rgba(57, 61, 66, 0.39)" }}
              className="rounded-5 movie-detail-container"
            >
              <img
                className="movie-detail-poster-card rounded-4 m-5"
                src={`https://image.tmdb.org/t/p/w780/${detailMovie.poster_path}`}
                alt="poster path"
              />
              <div className="text-white">
                <h1>Overview</h1>
                <div className="movie-detail-text-container">
                  <p className="movie-detail-p">{detailMovie.overview}</p>
                  <div className="d-flex">
                    <h4>Relase Date:</h4>
                    <p className="text-center">{detailMovie.release_date}</p>
                  </div>
                  <div className="d-flex">
                    <h4>Rate:</h4>
                    <p>{detailMovie.vote_average}</p>
                  </div>
                  <div className="d-flex">
                    <h4>Total Vote:</h4>
                    <p>{detailMovie.vote_count}</p>
                  </div>
                </div>
                <Link className="text-warning h3" onClick={() => navigate(-1)}>
                  Go Back
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MovieDetail
