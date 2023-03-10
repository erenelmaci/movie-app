import "./MovieCard.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"

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
    <Row className="justify-content-center">
      <Col className="d-flex justify-content-center" xs={12} sm={6} md={4} lg={3}>
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
  )
}

export default MovieCard
