import { useParams } from "react-router-dom"
import Banner from "../components/Banner";
import ReviewsCard from "../components/ReviewsCard";


export default function SingleFilm() {
    const { id } = useParams

    const reviews = [
        {
            id: 1,
            movie_id: 1,
            nome: "Alice",
            voto: 4,
            text: "Inception è un film incredibile, mi ha tenuta incollata fino alla fine!"
        },
        {
            id: 2,
            movie_id: 2,
            nome: "Marco",
            voto: 5,
            text: "The Matrix è un capolavoro, visivamente e concettualmente straordinario."
        },
        {
            id: 3,
            movie_id: 3,
            nome: "Sofia",
            voto: 5,
            text: "The Godfather è un classico senza tempo, la trama e i personaggi sono incredibili."
        },
        {
            id: 4,
            movie_id: 4,
            nome: "Luca",
            voto: 3,
            text: "Pulp Fiction è unico, ma alcune scene non mi hanno convinto del tutto."
        },
        {
            id: 5,
            movie_id: 5,
            nome: "Giulia",
            voto: 5,
            text: "The Shawshank Redemption è il miglior film che abbia mai visto, emozionante e ispirante."
        },
        {
            id: 6,
            movie_id: 6,
            nome: "Paolo",
            voto: 3,
            text: "Avatar è visivamente impressionante, ma la trama è un po' prevedibile."
        },
        {
            id: 7,
            movie_id: 7,
            nome: "Martina",
            voto: 5,
            text: "The Dark Knight è incredibile, il Joker è un personaggio straordinario."
        },
        {
            id: 8,
            movie_id: 8,
            nome: "Andrea",
            voto: 4,
            text: "Interstellar è emozionante e visivamente bellissimo, anche se un po' complesso."
        },
        {
            id: 9,
            movie_id: 9,
            nome: "Chiara",
            voto: 5,
            text: "Forrest Gump è toccante e profondo, un film che rimane nel cuore."
        },
        {
            id: 10,
            movie_id: 10,
            nome: "Francesco",
            voto: 4,
            text: "La La Land è un'esplosione di musica e colori, davvero unico."
        }
    ];

    return (
        <>

            <Banner title="Movies' Reviews" subtitle="All movies reviews" leadtext="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, id!" />

            <section className="reviews">
                <div className="container">
                    {
                        reviews.map((review) => <ReviewsCard key={review.id} review={review} />)
                    }
                </div>

            </section>
        </>
    )
}