import React, { useState, useEffect } from "react";

import "./Current.css";

const Landing = () => {
    const [date, setDate] = useState(null);
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState(null);
    const [explanation, setExplanation] = useState(null);
    const [something, setSomething] = useState(
        "Click on the planet to see the newest phenomenon"
    );
    const [mediatype, setMediatype] = useState(null);
    const [closeAnim, setCloseAnim] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=3oLoOUzRQr7cWlt88c4kYWsfQHGym41G7o3DUWKF&date=${date}`
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setImg(data.url);
                    setTitle(data.title);
                    setExplanation(data.explanation);
                    setMediatype(data.media_type);
                });
        };
        if (date !== null) {
            fetchData();
        }
    }, [date]);

    const PlanetClick = async () => {
        await fetch(
            "https://api.nasa.gov/planetary/apod?api_key=3oLoOUzRQr7cWlt88c4kYWsfQHGym41G7o3DUWKF"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSomething("");
                setImg(data.hdurl);
                setTitle(data.title);
                setExplanation(data.explanation);
                setMediatype(data.media_type);
            });
    };

    const getDate = (event) => {
        setDate(event.target.value);
    };

    const CloseExp = (e) => {
        setCloseAnim(true);
        setTimeout(() => {
            setExplanation(null);
            setCloseAnim(false)
        }, 340)
    };

    return (
        <div id="bodybody">
            <div className="group">
                <div className="line1"></div>
                <div className="line"></div>
                <div className="line2"></div>
                <div className="line1"></div>
                <div className="line"></div>
            </div>
            <div className="group">
                <div className="line"></div>
                <div className="line3"></div>
                <div className="line2">
                    <h2 id="instruction">{something}</h2>
                </div>
                <div className="line"></div>
                <div className="line3"></div>
            </div>
            <div className="group">
                <div className={`line4 ${explanation ? "Animload" : ""} ${closeAnim ? "Closeanim" : ""}`} id="explanation">
                    {explanation && (
                        <>
                            <div id="explanationBox">
                                {/* true or false 
                            ha az img üres az false ezért megjelenik a gömb,ha fetch akkor imagestate image lesz és megjelenik*/}
                                {img && mediatype === "image" && (
                                    <>
                                        <img src={img} alt=""></img>
                                    </>
                                )}
                                {img && mediatype === "video" && (
                                    <>
                                        <iframe src={img} title={title}></iframe>
                                    </>
                                )}

                                <h3>{explanation}</h3>
                            </div>
                        </>
                    )}
                </div>
                <div className="line4"></div>
                <div className="lineimg" onClick={PlanetClick}>
                    <div
                        className="scene"
                        style={{ display: something ? "block" : "none" }}
                    >
                        <div className="wrapper">
                            <div className="globe">
                                <span className="ring"></span>
                                <span className="ring"></span>
                                <span className="ring"></span>
                                <span className="ring"></span>
                                <span className="ring"></span>
                                <span className="ring"></span>
                                <span className="ring"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line4"></div>
                <div className="line4"></div>
            </div>
            <div className="group">
                <div className="line1"></div>
                <div className="line"></div>
                <div className="line2">
                    {title && (
                        <>
                            <h2 id="title">{title}</h2>
                        </>
                    )}
                </div>
                <div className="line1"></div>
                <div className="line"></div>
            </div>
            <div className="group">
                <div className="line"></div>
                <div className="line3"></div>
                <div className="line2">
                    <input
                        type="date"
                        id="anotherDate"
                        name="date"
                        min="2000-01-01"
                        style={{ display: something ? "none" : "block" }}
                        onChange={getDate}
                    />
                    <button
                        style={{ display: something ? "none" : "block" }}
                        className="CloseButton"
                        onClick={CloseExp}
                    >
                        Close explanation
                    </button>
                </div>
                <div className="line"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
};

export default Landing;