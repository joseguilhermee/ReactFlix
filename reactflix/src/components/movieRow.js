import React from "react";
import './movieRow.js'


export default ({title, itens}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listArea">
                <div className="movieRow--list">
                        {itens.results.length > 0 && itens.results.map((iten, key)=>(
                            <div key={key} className="itenImg">
                                    <img src={`http://image.tmdb.org/t/p/w300${iten.poster_path}`} />
                            </div>
                        ))}
                </div>

            </div>
        </div>
    )
}