
export default function ReviewsCard({ review }) {

    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.text}</p>
                <p>by: <strong>{review.nome}</strong></p>
                <p>voto: {review.voto}/5</p>
            </div>
        </div>
    )

}
