import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ArtistCard from "../artists/ArtistCard/ArtistCard";
import Loader from "../loader/Loader";

const ArtistDoc = () => {
    const params = useParams();
    const [fetchData, setFetchData] = useState(null);
    const [maxPage, setMaxPage] = useState(null);
    const [reload, setReload] = useState(true);
    const [fetchOn, setFetchOn] = useState(true);
    console.log(params)

    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"

    useEffect(() => {
        const fetchPersonData = async () => {
            const rawData = await fetch(`https://api.harvardartmuseums.org/object?apikey=${APIkey}&classification=${params.classificationid}&size=100&page=${params.classspecpage}`)
            const personData = await rawData.json();
            console.log(personData)
            setMaxPage(Array.from({length: personData.info.pages}, (_, i) => i + 1));
            setReload(false);
            setFetchData(personData);
            setFetchOn(false)
        }
        fetchPersonData()    
    }, [reload === true]);

    // useEffect(() => {
    //     if (fetchData) 
    //     fetchData.records.map(element => console.log(element.objectnumber))
    // }, [fetchData])


    return (
        <>
           {
            fetchData && fetchData.records.length !== 0 &&
                <div className="artist-wrapper">                    
                    <ul>
                        {fetchData.records.map(element => <Link to={`/classification/${params.classpage}/${params.classificationid}/${params.classpage}/${element.objectnumber}`}><ArtistCard artistName={element.title} image={element.primaryimageurl}>{element.title}</ArtistCard></Link>)}
                    </ul>
                    <div className="buttonWrapper">
                      {maxPage.map(element => <Link to={`/classification/${params.classpage}/${params.classificationid}/${element}`} onClick={() => setReload(true)}><button>{element}</button></Link>)}
                    </div>
                </div>
            }
            {
                fetchData && fetchData.records.length === 0 &&
                    <div>
                        Sorry, no data avalible at the moment...
                    </div>
            }
            {
            fetchOn && 
                <Loader />
            }
        </>
    )
}

export default ArtistDoc