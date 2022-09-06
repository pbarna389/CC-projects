/* eslint-disable no-self-assign */
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, Mousewheel, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./Modal"
import Loader from "./Loader";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/Carousel.css';

const Carousel = pictures => {
    const [fetchPictures, setFetchPictures] = useState(null);
    const [modalActive, setModalActive] = useState(false);
    const [modalDataState, setModalDataState] = useState(null);
    const [fetchActive, setFetchActive] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        console.log("New pictures INCOMING!");
        setFetchPictures(Object.values(pictures));
    }, [pictures]);

    const killModal = () => {
        setAnimation(true)
        setTimeout(() => {
            setModalActive(false)
            setAnimation(false)
        }, 340)
    }

    return (
        <div className="SwiperWrapper" key={0}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination, Scrollbar, Navigation, Mousewheel, Virtual]}
                navigation={{ clickable: true }}
                mousewheel={{ invert: false }}
                scrollbar={{ draggable: true }}
                virtual={
                    {
                        virtual: true,
                        slides: ['Slide 1', 'Slide 2', 'Slide 3'],
                        addSlidesAfter: 30,
                        addSlidesBefore: 30
                    }
                }
            >
                {fetchPictures !== null && fetchPictures.map((element, index) =>
                    element.map((pic, picIndex) => {
                        if (pic.media_type === "image") {
                            return (
                                <>
                                    <SwiperSlide key={picIndex}>
                                        <div className="zoom" data-div-img={picIndex} onClick={async event => {
                                            console.log("This will activate the image modal");
                                            const divs = [...document.querySelectorAll(".zoom")]
                                            const target = event.target;
                                            const dataId = target.getAttribute('data-img');
                                            const connectedDiv = document.querySelector(`[data-div-img="${dataId}"]`)
                                            console.log(connectedDiv)
                                            setFetchActive(true);

                                            divs.map(element => element === connectedDiv ?
                                                fetch(`https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw&date=${pic.date}`)
                                                    .then(response => {
                                                        return response.json()
                                                    }).then(data => {
                                                        setModalActive(true);
                                                        setModalDataState(() => data);
                                                        setFetchActive(false)
                                                    }) : element = element)
                                        }
                                        }>
                                            <img src={pic.url} key={index} data-img={picIndex} alt=""></img>
                                        </div>
                                        <p>{pic.date}</p>
                                    </SwiperSlide>
                                </>)
                        } else {
                            return (
                                <>
                                    <SwiperSlide key={picIndex}>
                                        <div className="zoom" data-div-video={picIndex} >
                                            <img className="videoImg" data-video={picIndex} src="https://peterscherl.com/pictures/Mystic_Light/The_Milky_Way_Logo.jpg" key={index} alt=""></img>
                                            <p className="placeholder" data-par-video={picIndex} onClick={async event => {
                                                console.log("This will activate the video modal");
                                                const divs = [...document.querySelectorAll(".zoom")]
                                                const target = event.target;
                                                const dataId = target.getAttribute('data-par-video');
                                                console.log(target)
                                                const connectedDiv = document.querySelector(`[data-div-video="${dataId}"]`)
                                                console.log(connectedDiv)
                                                setFetchActive(true)

                                                divs.map(element => element === connectedDiv &&
                                                    fetch(`https://api.nasa.gov/planetary/apod?api_key=GJndehRG8xcpkPG7C5hhLK1iBuZ2tFq9legqIlFw&date=${pic.date}`)
                                                        .then(response => {
                                                            return response.json();
                                                        }).then(data => {
                                                            setModalActive(true);
                                                            setModalDataState(() => data);
                                                            setFetchActive(false)
                                                            console.log(modalDataState)
                                                        }))
                                            }}>Placeholder picture - video in modal</p>
                                        </div>
                                        <p>{pic.date}</p>

                                    </SwiperSlide>
                                </>
                            )
                        }
                    }
                    ))}
            </Swiper>
            {
                modalActive &&
                <>
                    <div className={`modalWrapper ${modalActive ? "modalComes" : ""} ${animation && "modalGoes"}`} key={1}>
                        {modalActive === true && <Modal data={modalDataState} />}
                        <button onClick={killModal}>Close</button>
                    </div>
                </>
            }
            {
                fetchActive &&
                <>
                    <div id="picbody">
                        <Loader />
                    </div>
                </>
            }
        </div >
    );
};

export default Carousel