import { Link } from "react-router-dom";
export default function FilmCard({ movie }) {

    return (
        <div className="film-card  h-100  p-2 shadow">
            <div className="card-body">
                <h4>{movie.titolo}</h4>
                <p>directed by: <strong>{movie.director}</strong></p>
                <p>{movie.genre}</p>
                <p>{movie.abstract}</p>
                <p>{movie.release_year}</p>
                <div className="card-footer">
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
                </div>
            </div>
        </div>
    )
}