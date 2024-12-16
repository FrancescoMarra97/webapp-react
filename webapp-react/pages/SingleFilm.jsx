import { useParams } from "react-router-dom"
import Banner from "../components/Banner";
import ReviewsCard from "../components/ReviewsCard";
import { useContext, useEffect, useState } from "react";
import FormReview from "../components/FormReview";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";
import "./SingleFilm.css";

export default function SingleFilm() {
    const { id } = useParams()
    const { loading, setLoading } = useContext(GlobalContext);

    const url = `http://localhost:3001/movies/${id}`
    const [movie, setMovie] = useState()
    const [success, setSuccess] = useState(null)


    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMovie(data)
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, [id, success]
    )
    useEffect(() => {
        document.body.classList.add("single-film");
        return () => document.body.classList.remove("single-film");
    }, []);

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Banner title={movie?.title} subtitle={movie?.director} leadtext={movie?.abstract} />
                    <FormReview movie_id={id} success={success} handleSuccess={setSuccess} />
                    <section className="reviews">
                        <div className="container">
                            {
                                movie?.reviews && movie.reviews.map((review) => <ReviewsCard key={review.id} review={review} />)
                            }
                        </div>

                    </section>
                </>
            )}
        </>
    )
}