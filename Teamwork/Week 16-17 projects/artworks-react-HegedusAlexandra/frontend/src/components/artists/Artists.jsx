import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArtistCard from "./ArtistCard/ArtistCard";

import "./Artists.css"

const Artists = () => {
    const params = useParams();
    console.log(params)
    const [fetchData, setFetchData] = useState(null);
    const [maxPage, setMaxPage] = useState(null);
    const [reload, setReload] = useState(true);
  
    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"
  
    useEffect(() => {
      const getFetch = async () => {
        const naturData = await fetch(`https://api.harvardartmuseums.org/person?apikey=${APIkey}&size=100&sortorder=asc&sort=alphasort&page=${params.page}`)
        const response = await naturData.json()
        setFetchData(response);
        setMaxPage(Array.from({length: response.info.pages}, (_, i) => i + 1));
        setReload(false);
        return response
      }
      getFetch()
    }, [reload === true]);

    return (
           <>
           {
                fetchData && maxPage && !reload &&
                <div className="artistWrapper">
                  <div className="page-number">Page Number: {params.page}</div>
                    <ul className="artistList">
                        {fetchData.records.map(element => <Link key={element.displayname} to={`/artists/${params.page}/${element.personid}` }><ArtistCard artistName={element.displayname}>{element.displayname}</ArtistCard></Link>)}
                    </ul>
                    <div className="buttonWrapper">
                      {maxPage.map(element => <Link key={element} to={`/artists/${element}`} onClick={() => setReload(true)}><button>{element}</button></Link>)}
                    </div>
                </div>
            }
            </>
    )
}

export default Artists
