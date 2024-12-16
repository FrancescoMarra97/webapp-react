import { Link } from "react-router-dom";
export default function FilmCard({ movie }) {

    return (
        <div className="film-card">
            <div className="card-header">
                <h3>{movie.title}</h3>
            </div>
            <div className="card-body">
                <p><span className="badge rounded-pill text-bg-dark">{movie.genre}</span> </p>
                <p>directed by: <strong>{movie.director}</strong></p>
                <p>{movie.abstract}</p>
                <p>{movie.release_year}</p>
            </div>
            <div className="card-footer">
                <Link to={`/movies/${movie.id}`} className="btn btn-dark">Read more</Link>
            </div>
        </div>
    )
}
