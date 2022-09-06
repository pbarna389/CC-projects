import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Loader from "../loader/Loader";

import "./Artwork.css"

const Artwork = userName => {
    console.log(userName)
    const params = useParams();
    const [fetchData, setFetchData] = useState(null);
    const [users, setUsers] = useState()
    const [isFavourite, setIsFavourite] = useState(null);
    const [fetchOn, setFetchOn] = useState(true);

    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"
  
    useEffect(() => {
      const getFetch = async () => {
        const naturData = await fetch(`https://api.harvardartmuseums.org/object?objectnumber=${params.objectid}&apikey=${APIkey}`)
        const response = await naturData.json()
        setFetchData(response.records);
        setFetchOn(false)
        return response
      }
      getFetch()
    }, []);

    useEffect(() => {
        const getProfiles = async () => {
            const fetchData = await fetch('http://localhost:8800/profiles')
            const response = await fetchData.json();
            response.forEach(element => element.creditentials.userName === userName.userName && element.favourited.forEach(element => element === params.objectid && setIsFavourite(true)))

        }
        getProfiles();
    }, [])

    useEffect(() => {
        if (fetchData) {
            console.log(fetchData)
            fetchData.map(element => console.log(element))
        }
    }, [fetchData]);

    const handleAddFav = async () => {
        setIsFavourite(true)
        const sendData = { "userName": userName, "favobject": params.objectid};
        const postFavFetch = async data => {
            const fetchData = await fetch('http://localhost:8800/favourite', {
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(sendData)
                });
            const response = fetchData.json();
            console.log(response);
            return response;
        };
        postFavFetch()
    };

    const handleRemoveFav = () => {
        setIsFavourite(false)
        const sendData = { "userName": userName, "favobject": params.objectid};
        const deleteFavFetch = async data => {
            const fetchData = await fetch('http://localhost:8800/favouriteRemove', {
                method: "DELETE",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(sendData)
                });
            const response = fetchData.json();
            console.log(response);
            return response;
        };
        deleteFavFetch();
    };

    return (
        <>
           {
            fetchData &&
                <div className="artwork-wrapper">
                    {
                        typeof fetchData[0].primaryimageurl !== "object" &&
                        <>
                            <div>
                                <img src={fetchData[0].primaryimageurl} alt="NOTHING"></img>
                                    <h4>{fetchData[0].title}</h4>
                                    {
                                        !fetchData[0].period &&
                                        <p>Period: unknown</p>
                                    }
                                    {
                                        fetchData[0].period &&
                                        <p>Period: {fetchData[0].period}</p>
                                    }
                                                                {
                                isFavourite && 
                                <p className="favButtons" onClick={handleRemoveFav}><FontAwesomeIcon icon={faHeartCircleCheck} /></p>
                                
                            }
                            {
                                !isFavourite && 
                                <p className="favButtons" onClick={handleAddFav}><FontAwesomeIcon icon={faHeartBroken} /></p>
                            }
                            </div>
                            <div>

                            <h4>Title:</h4>
                            <p>{fetchData[0].title}</p>

                            <h4>Department:</h4> 
                            <p>{fetchData[0].department}</p>

                            <h4>Division:</h4> 
                            <p>{fetchData[0].division}</p>
                            {
                                !fetchData[0].period &&
                                <>
                                    <h4>Period:</h4> 
                                    <p>Unkown</p>
                                </>
                            }
                            {
                                fetchData[0].period &&
                                <>
                                    <h4>Period:</h4> 
                                    <p>{fetchData[0].period}</p>
                                </>
                            }

                            <h4>Culture:</h4> 
                            <p>{fetchData[0].culture}</p>

                            <h4>Medium:</h4> 
                            <p>{fetchData[0].medium}</p>

                            <h4>Dimensions:</h4> 
                            <p>{fetchData[0].dimensions}</p>

                            <p>Verification: {fetchData[0].verificationleveldescription}</p>


                            </div>
                            </>
                    }
                    {
                        typeof fetchData[0].primaryimageurl === "object"  && 
                        <>
                        <div className="placeholderWrapper">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Untitled_painting_by_Zdzislaw_Beksinski_1984.jpg" alt="NOTHING"></img>
                            <div className="Placeholder">placeholder</div>
                                <h4>{fetchData[0].title}</h4>
                                {
                                    !fetchData[0].period &&
                                    <p>Period: unknown</p>
                                }
                                {
                                    fetchData[0].period &&
                                    <p>Period: {fetchData[0].period}</p>
                                }
                                                            {
                            isFavourite && 
                            <p className="favButtons" onClick={handleRemoveFav}><FontAwesomeIcon icon={faHeartCircleCheck} /></p>
                            
                        }
                        {
                            !isFavourite && 
                            <p className="favButtons" onClick={handleAddFav}><FontAwesomeIcon icon={faHeartBroken} /></p>
                        }
                        </div>
                        <div>

                            <h4>Title:</h4>
                            <p>{fetchData[0].title}</p>

                            <h4>Department:</h4> 
                            <p>{fetchData[0].department}</p>

                            <h4>Division:</h4> 
                            <p>{fetchData[0].division}</p>
                            {
                                !fetchData[0].period &&
                                <>
                                    <h4>Period:</h4> 
                                    <p>Unkown</p>
                                </>
                            }
                            {
                                fetchData[0].period &&
                                <>
                                    <h4>Period:</h4> 
                                    <p>{fetchData[0].period}</p>
                                </>
                            }

                            <h4>Culture:</h4> 
                            <p>{fetchData[0].culture}</p>

                            <h4>Medium:</h4> 
                            <p>{fetchData[0].medium}</p>

                            <h4>Dimensions:</h4> 
                            <p>{fetchData[0].dimensions}</p>

                            <p>Verification: {fetchData[0].verificationleveldescription}</p>


                        </div>
                        </>
                    }  
                </div>
           }
            {
            fetchOn && 
                <Loader />
            }
        </>
    )
}

export default Artwork

