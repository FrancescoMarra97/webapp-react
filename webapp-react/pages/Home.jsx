import { useContext, useEffect, useState } from "react";
import Banner from "../components/Banner";
import FilmCard from "../components/FilmCard";
import Loader from "../components/Loader";
import GlobalContext from "../contexts/GlobalContext";

export default function Home() {

    const [movies, setMovies] = useState([])
    const { loading, setLoading } = useContext(GlobalContext);
    const url = "http://localhost:3001/movies"
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.movies);
                setLoading(false)
            })
            .catch((err) => {
                console.error("Errore durante la fetch:", err);
            });
    }, [url]);




    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Banner title="Movies' List" subtitle="All classic movies" leadtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id!" />

                    <section className="py-5">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                                {movies.map((movie) => (

                                    <div className="col" key={movie.id}>
                                        <FilmCard movie={movie} />
                                    </div>

                                ))
                                }
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}