import React, { useState, useEffect } from "react";
import './Home.css'
import Loader from "../loader/Loader";

const Home = () => {
    const [fetchData, setFetchData] = useState(null);
    const [fetchOn, setFetchOn] = useState(true);
    
    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"

    useEffect(() => {
        const fetchPersonData = async () => {
            const rawData = await fetch(`https://api.harvardartmuseums.org/image?apikey=${APIkey}&page=${Math.floor(Math.random() * 15000)}&q=width:<1200`)
            const personData = await rawData.json();
            console.log(personData.records)
            setFetchData(personData.records)
            setFetchOn(false)
        }
        fetchPersonData()    
    }, []);

    return (
         <>
        {
            fetchData &&
            <div className="homewrapper">
                <ul id="Frames">
	                <li class="Frame">
                        <div id="home"  key="?">Home</div>
                        
                        {fetchData.map(element => <img src={element.baseimageurl} key={element.title} alt=""></img>)}
                    </li>
                </ul>
            </div>
        }
        {
            fetchOn && 
                <Loader />
        }
        </>
    )
}

export default Home
