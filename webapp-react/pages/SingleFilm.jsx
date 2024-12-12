import { useParams } from "react-router-dom"
import Banner from "../components/Banner";
import ReviewsCard from "../components/ReviewsCard";
import { useEffect, useState } from "react";


export default function SingleFilm() {
    const { id } = useParams()


    const url = `http://localhost:3001/movies/${id}`
    const [movie, setMovie] = useState()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setMovie(data)
            })
            .catch(err => console.error(err))
    }, []
    )
    return (
        <>

            <Banner title={movie?.title} subtitle={movie?.director} leadtext={movie?.abstract} />

            <section className="reviews">
                <div className="container">
                    {
                        movie?.reviews && movie.reviews.map((review) => <ReviewsCard key={review.id} review={review} />)
                    }
                </div>

            </section>
        </>
    )
}