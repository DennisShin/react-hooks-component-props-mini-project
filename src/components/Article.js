import React from "react";

export default function Article({ title, date, preview, minutes }){
    let coffee = "☕️";
    let bento = "🍱";
    return(
        <article>
            <h3>{title}</h3>
            {minutes < 30 ? <p>{coffee.repeat(Math.ceil(minutes/5))} {minutes}  min read</p> : <p>{bento.repeat(Math.ceil(minutes/10))} {minutes} min read</p>}
            <small defaultValue="January 1, 1970">{date}</small>
            <p>{preview}...</p>
        </article>
    )
}