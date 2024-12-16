
export default function ReviewsCard({ review }) {

    return (
        <div className="review l-card mb-3">

            <section className="l-card__text">
                <p>{review.text}</p>
            </section>
            <section className="l-card__user">
                <div className="l-card__userInfo">
                    <p>by: <strong>{review.name}</strong></p>
                    <p>voto: {review.vote}/5</p>
                </div>
            </section>

        </div>
    )

}
