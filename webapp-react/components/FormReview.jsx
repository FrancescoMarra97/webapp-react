export default function FormReview() {
    function HandleFormSubmit(e) {
        console.log(e);
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="name">il tuo nickname</label>
                            </div>
                            <input name="name" type="text" placeholder="inserisci il tuo nome" />
                        </div>
                        <div className="mb-3">
                            {/* ratings */}
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="review">la tua recensione</label>
                            </div>
                            <textarea name="review" id="review" placeholder="lascia la tua recensione" ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-dark">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}