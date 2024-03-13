import './card-testimony.css'

function CardTestimony({ title, text }) {
    return(
        <div className="card-testimony">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default CardTestimony