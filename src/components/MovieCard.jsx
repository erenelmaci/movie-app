import "../styles/MovieCard.css"
// import unkownMovie from "../assets/unkown-movie.jpg"

const MovieCard = ({ poster, overview, title }) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/w780/${poster}`
  const nullposter = () => {
    return poster === null
      ? "https://brummedout.files.wordpress.com/2013/10/clapperboard-146180_640.png"
      : moviePosterUrl
  }

  return (
    <>
      <div className="book">
        <div className="comment">
          <h4>{title}</h4>
          <p className="overview">{overview}</p>
        </div>
        <div className="cover">
          <img className="posters-img" src={nullposter()} alt="img" />
        </div>
      </div>
    </>
  )
}

export default MovieCard
