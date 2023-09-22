import React from "react";

function Card(props) {
    const img = `./images/${props.img}`;
    return (
        <aside className="card-item">
            <img src={img} alt={props.alt} />
            <h4>{props.text}</h4>
        </aside>
    )
}

export default Card;