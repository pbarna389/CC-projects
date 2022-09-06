import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ArtistCard from "../artists/ArtistCard/ArtistCard";
import Loader from "../loader/Loader";

import  "./ArtistItem.css"


const ArtistDoc = () => {
    const params = useParams();
    const [fetchData, setFetchData] = useState(null);
    const [fetchOn, setFetchOn] = useState(true);
    console.log(params)

    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"

    useEffect(() => {
        const fetchPersonData = async () => {
            const rawData = await fetch(`https://api.harvardartmuseums.org/object?apikey=${APIkey}&person=${params.personid}`)
            const personData = await rawData.json();
            console.log(personData)
            setFetchData(personData)
            setFetchOn(false)
        }
        fetchPersonData()    
    }, []);

    useEffect(() => {
        if (fetchData) 
        fetchData.records.map(element => console.log(element))
    }, [fetchData])


    return (
        <>
           {
            fetchData && fetchData.records.length !== 0 &&
                <div className="artist-wrapper">                    
                    <ul>
                        {fetchData.records.map(element => <Link key={element.objectnumber} to={`/artists/${params.page}/${params.personid}/${element.objectnumber}`}><ArtistCard artistName={element.title} image={element.primaryimageurl}>{element.title}</ArtistCard></Link>)}
                    </ul>
                </div>
            }
            {
                fetchData && fetchData.records.length === 0 &&
                    <div className="noData">
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