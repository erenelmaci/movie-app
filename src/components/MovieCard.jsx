import "../styles/MovieCard.css"

const MovieCard = ({ poster, overview, title }) => {
  return (
    <>
      <div className="book">
        <div className="comment">
          <h4>{title}</h4>
          <p className="overview">{overview}</p>
        </div>
        <div className="cover">
          <img
            className="posters-img"
            src={`https://image.tmdb.org/t/p/w780/${poster}`}
            alt="img"
          />
        </div>
      </div>
    </>
  )
}

export default MovieCard
