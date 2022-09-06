import React from "react";
import { useState } from "react";
import  "../Artists.css"

const ArtistCard = ({ artistName,image }) => {
    // console.log(artistName)
    return (
        <div id="artistCard" key={artistName}>
            {
                image === null &&
                <div className="placeholderWrapper">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Untitled_painting_by_Zdzislaw_Beksinski_1984.jpg" alt="NOTHING"></img>
                <div className="Placeholder">placeholder</div>
                </div>
            }
            {
                typeof image === "string" && 
                    <img src={image} alt="" />
            }
            <div id="small">{artistName}</div>
        </div>
    )
}

export default ArtistCard