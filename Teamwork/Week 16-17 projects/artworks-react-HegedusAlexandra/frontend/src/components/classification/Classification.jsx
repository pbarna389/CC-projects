import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ArtistCard from "../artists/ArtistCard/ArtistCard"
import Loader from "../loader/Loader";

import "../artists/Artists.css"

const Classification = () => {
    const params = useParams();
    console.log(params)
    const [fetchData, setFetchData] = useState(null);
    const [maxPage, setMaxPage] = useState(null);
    const [reload, setReload] = useState(true);
    const [fetchOn, setFetchOn] = useState(true);
  
    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"
  
    useEffect(() => {
      const getFetch = async () => {
        const naturData = await fetch(`https://api.harvardartmuseums.org/classification?apikey=${APIkey}&size=100&page=${params.page}`)
        const response = await naturData.json()
        setFetchData(response);
        setMaxPage(Array.from({length: response.info.pages}, (_, i) => i + 1));
        setReload(false);
        setFetchOn(false)
        return response
      }
      getFetch()
    }, [reload === true]);

    useEffect(() => {
        console.log(fetchData)
    }, [fetchData])

    return (
           <>
           {
                fetchData && maxPage && !reload &&
                <div className="artistWrapper">
                  <div> {params.page}</div>
                    <ul>
                        {fetchData.records.map(element => <Link key={element.classificationid} to={`/classification/${params.classpage}/${element.classificationid}/${params.classpage}`}><ArtistCard artistName={element.name}>{element.name}</ArtistCard></Link>)}
                    </ul>
                    <div className="buttonWrapper">
                      {maxPage.map(element => <Link key={element} to={`/classification/${element}`} onClick={() => setReload(true)}><button>{element}</button></Link>)}
                    </div>
                </div>
            }
            {
            fetchOn && 
                <Loader />
            }
            </>
    )
}

export default Classification