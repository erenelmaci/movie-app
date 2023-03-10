import "../styles/MovieCard.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import MovieDetail from "../pages/MovieDetail"

const MovieCard = () => {
  const [poster, setPoster] = useState(null)
  const [plot, setPlot] = useState(null)
  const [title, setTitle] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const OMDB_API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=baf219d`
      try {
        const response = await axios.get(OMDB_API_URL)
        setPoster(response.data.Poster)
        setPlot(response.data.Plot)
        setTitle(response.data.Title)
        console.log(response.data)
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

      <Link to="/move-detail">
        <Row className="d-flex justify-content-center w-100">
          <Col
            className="d-flex justify-content-center"
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <div className="book">
              <div className="comment">
                <h4>{title}</h4>
                <p>{plot}</p>
              </div>
              <div className="cover">
                <img className="posters-img" src={poster} alt="img" />
              </div>
            </div>
          </Col>
        </Row>
      </Link>
    </>
  )
}

export default MovieCard
