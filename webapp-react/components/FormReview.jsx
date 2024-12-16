import { useState } from "react";
import { useParams } from "react-router-dom";

export default function FormReview({ movie_id, success, handleSuccess }) {
    const [name, setName] = useState('');
    const [vote, setVote] = useState('');
    const [text, SetText] = useState('');

    function HandleFormSubmit(e) {
        //e.preventDefault()

        const url = `http://localhost:3001/movies/${movie_id}/review`


        const formData = {
            name,
            vote,
            text
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    handleSuccess("Grazie per la tua recensione")
                    setName("")
                    setVote(0)
                    SetText("")
                }
            })
            .catch(err => console.log(err))


    }

    return (
        <div className="container">
            {success && <div>{success}</div>}
            <div className="card mb-3">
                <div className="card-body">
                    <form onSubmit={HandleFormSubmit}>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="name">il tuo nickname</label>
                            </div>
                            <input name="name" type="text" className="form-control" placeholder="inserisci il tuo nome" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="text">la tua recensione</label>
                            </div>
                            <textarea name="text" id="text" className="form-control" placeholder="lascia la tua recensione" value={text} onChange={(e) => SetText(e.currentTarget.value)} required ></textarea>
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