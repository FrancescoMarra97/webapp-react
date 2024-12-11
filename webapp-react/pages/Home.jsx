import { Link } from "react-router-dom";

export default function Home() {
    const movies = [
        {
            id: 1,
            titolo: "Inception",
            director: "Christopher Nolan",
            genre: "Sci-Fi",
            release_year: 2010,
            abstract: "Un ladro ruba segreti entrando nei sogni delle persone.",
        },
        {
            id: 2,
            titolo: "The Matrix",
            director: "Lana e Lilly Wachowski",
            genre: "Sci-Fi",
            release_year: 1999,
            abstract: "Un hacker scopre la verità sulla natura della realtà.",
        },
        {
            id: 3,
            titolo: "The Godfather",
            director: "Francis Ford Coppola",
            genre: "Crime",
            release_year: 1972,
            abstract: "La storia di una famiglia mafiosa e del loro potere.",
        },
        {
            id: 4,
            titolo: "Pulp Fiction",
            director: "Quentin Tarantino",
            genre: "Crime",
            release_year: 1994,
            abstract: "Storie intrecciate di crimine e redenzione.",
        },
        {
            id: 5,
            titolo: "The Shawshank Redemption",
            director: "Frank Darabont",
            genre: "Drama",
            release_year: 1994,
            abstract: "La storia di un uomo imprigionato che cerca libertà.",
        },
        {
            id: 6,
            titolo: "Avatar",
            director: "James Cameron",
            genre: "Sci-Fi",
            release_year: 2009,
            abstract: "Un'epica avventura su Pandora con il potere della tecnologia.",
        },
        {
            id: 7,
            titolo: "The Dark Knight",
            director: "Christopher Nolan",
            genre: "Action",
            release_year: 2008,
            abstract: "Batman affronta il suo nemico più pericoloso: il Joker.",
        },
        {
            id: 8,
            titolo: "Interstellar",
            director: "Christopher Nolan",
            genre: "Sci-Fi",
            release_year: 2014,
            abstract: "Un gruppo di astronauti cerca un nuovo pianeta abitabile.",
        },
        {
            id: 9,
            titolo: "Forrest Gump",
            director: "Robert Zemeckis",
            genre: "Drama",
            release_year: 1994,
            abstract: "La vita straordinaria di un uomo semplice.",
        },
        {
            id: 10,
            titolo: "La La Land",
            director: "Damien Chazelle",
            genre: "Musical",
            release_year: 2016,
            abstract: "Storia d'amore e sogni a Los Angeles.",
        }
    ]





    return (
        <>
            <div className="banner bg-secondary text-white py-4 mb-5">
                <div className="container-lg">
                    <h1>Movies' List</h1>
                    <h3 className="text-muted">All classic movies</h3>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id!
                    </p>
                </div>
            </div>

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {movies.map((movie) => {
                            return (
                                <div className="col" key={movie.id}>
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
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}