import React from "react";
import Article from "./Article";


export default function ArticleList({ Articles }){
    return (
        <main>
            {Articles.map(article => {
                return <Article 
                    key = {article.id} 
                    title={article.title} 
                    date = {article.date} 
                    preview={article.preview}
                    minutes={article.minutes}
                />
            })}
        </main>
    )
}