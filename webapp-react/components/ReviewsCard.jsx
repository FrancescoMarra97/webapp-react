
export default function ReviewsCard({ review }) {

    return (
        <div className="review card mb-3">
            <div className="card-body">
                <p>{review.text}</p>
                <p>by: <strong>{review.name}</strong></p>
                <p>voto: {review.vote}/5</p>
            </div>
        </div>
    )

}
