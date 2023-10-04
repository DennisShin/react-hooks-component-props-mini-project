import React from  "react"

export default function Header({ name }){
    return (
        <>
            <header>
                <h1>{name.name}</h1>
            </header>
        </>
    )
}