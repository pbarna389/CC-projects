import React, { useEffect, useState } from 'react';
import ArtistCard from '../artists/ArtistCard/ArtistCard';
import { useParams, Link } from "react-router-dom";
import './Profile.css';
import Loader from "../loader/Loader";

function Profile(userName) {

    console.log(userName)

    const [favourite, setFavourite] = useState(null);
    const [favouritedObjects, setfavouritedObjects] = useState([]);
    const [fetchOn, setFetchOn] = useState(true);
    const [emptyFav, setEmptyFav] = useState(false);

    const params = useParams();
    console.log(params);

    useEffect(() => {
       const fetchData = async () => {

        const userData = await fetch(`http://localhost:8800/profiles`)
        const profiles = await userData.json()
        console.log(profiles)
        profiles.forEach(element => {
            if (element.creditentials.userName === userName.userName) {        
                console.log("same!")
                if(element.favourited.length === 0) {
                    (console.log("No favs!"))
                    setFetchOn(false)
                    setEmptyFav(true)
                } else {
                    (console.log('FAVS!'))
                    setFavourite(element.favourited)}
            }
        })
        } 
        fetchData()
    
    }, [])


    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"

    useEffect(() => {
        if (favourite && fetchOn) {
            favourite.forEach(number => {
    
                const fetchData = async () => {
                    const objectData = await fetch(`https://api.harvardartmuseums.org/object?objectnumber=${number}&apikey=${APIkey}`)
                    const profiles = await objectData.json()
                    setfavouritedObjects(oldentries => {
                        return [...oldentries, profiles]
                    } )
                }
                fetchData()
                setFetchOn(false)
            })
        }

    }, [favourite])


    useEffect(() => {
        favouritedObjects.forEach(element => console.log(element.records[0].title))
    }, [favouritedObjects])
  
    return (
        <>
            <div id="profile">
                Profile
            </div>
            {
                favouritedObjects && !fetchOn &&
                favouritedObjects.map(element => <Link key={element.records[0].title} to={`/profile/${element.records[0].objectnumber}`}>{<ArtistCard artistName={element.records[0].title} image={element.records[0].primaryimageurl} />}</Link>)
            }
            {
                emptyFav && !fetchOn &&
                <div>
                    No favs
                </div>
            }
            {
                fetchOn && 
                <Loader />
            }
        </>
  )
}

export default Profile