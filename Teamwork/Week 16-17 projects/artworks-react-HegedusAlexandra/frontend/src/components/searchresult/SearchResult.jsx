import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import ArtistCard from "../artists/ArtistCard/ArtistCard";
import Loader from "../loader/Loader";

const SearchResult = ({searchdata}) => {
    const [fetchData, setFetchData] = useState(null);
    const [maxPage, setMaxPage] = useState(null);
    const [reload, setReload] = useState(true);
    const [fetchOn, setFetchOn] = useState(true);
    const params = useParams();
    console.log(params)

    const APIkey = "1d73b970-906b-477a-8085-1df990db6481";

    useEffect(() => {
        const fetchData = async () => {
                const rawData = await fetch(`https://api.harvardartmuseums.org/${searchdata.type}?apikey=${APIkey}&title=${searchdata.string}&size=100`);
                const response = await rawData.json();
                setFetchData(response);
                setMaxPage(Array.from({length: response.info.pages}, (_, i) => i + 1));
                setReload(false);
                setFetchOn(false)
        }
        fetchData()
    },[searchdata, reload === true]) 

    return (
        <div>
            <ul>
            {
                fetchData && 
                    fetchData.records.map(el => <Link to={`/searchresult/${params.searchpage}/${el.objectnumber}`}><ArtistCard artistName={el.title}>Title:{el.title}</ArtistCard></Link>)     
            }
            </ul>
            {
            maxPage &&
            <div className="buttonWrapper">
                      {maxPage.map(element => <Link to={`/searchresult/${element}`} onClick={() => setReload(true)}><button>{element}</button></Link>)}
            </div>
            }
        </div>
    )
}

export default SearchResult