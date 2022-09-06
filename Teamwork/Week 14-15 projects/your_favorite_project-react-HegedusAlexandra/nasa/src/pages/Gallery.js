import React, { useState } from "react";
import Carousel from "../components/gallery/Carousel";
import Loader from "../components/gallery/Loader";

import "./Gallery.css";


const Gallery = () => {
    const [fetchState, setFetchState] = useState(null);
    const [pictureData, setPictureData] = useState(null);

    const yearRange = async event => {
        setFetchState(true);
        const target = event.target;
        console.log("Fetching...");
        if (target.value !== "2022") {
            console.log("not current year")
            await fetch(`https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw&start_date=${target.value}-01-01&end_date=${target.value}-12-31`)
                .then(response => {
                    console.log(response)
                    return response.json();

                })
                .then(data => {
                    console.log("Fetch done");
                    setPictureData(() => data)
                    setFetchState(false);
                });
        } else {
            console.log("current year")
            await fetch(`https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw&start_date=${target.value}-01-01`)
                .then(response => {
                    console.log(response)
                    return response.json();

                })
                .then(data => {
                    console.log("Fetch done");
                    setPictureData(() => data)
                    setFetchState(false);
                });
        }
    };

    const Yearselector = () => {
        const years = ["Choose a year!"];
        for (let i = 1997; i < 2023; i++) years.push(i);

        const options = years.map((element, index) => <option key={index}>{element}</option>);

        return (
            <select name="years" id="years" onChange={yearRange}>
                {options}
            </select>
        )
    }

    return (
        <>
            <div id="timetravelBox">
                <Yearselector />
                {fetchState === false &&
                    <Carousel
                        pictures={pictureData}>
                    </Carousel>}
            </div>
            {
                fetchState &&
                <div id="loader-body">
                    <Loader />
                </div>
            }
        </>
    );
};

export default Gallery;