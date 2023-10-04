import React from "react";

export default function About({ image, about}){
    return (
        <aside>
            {image ? <img src = {image} alt="blog logo"/> : <img src = "https://via.placeholder.com/215" alt="blog logo"/> }
            <p>{about}</p>
        </aside>
    )
}