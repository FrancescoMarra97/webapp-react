
import Banner from "../components/Banner";
import FilmCard from "../components/FilmCard";

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

            <Banner title="Movies' List" subtitle="All classic movies" leadtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id!" />

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {movies.map((movie) => {
                            return (
                                <div className="col" key={movie.id}>
                                    <FilmCard movie={movie} />
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