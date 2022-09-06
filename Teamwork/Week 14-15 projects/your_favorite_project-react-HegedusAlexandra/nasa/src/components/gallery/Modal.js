import React, { useEffect, useState } from "react";

import "../styles/Modal.css"

const Modal = data => {
    const [modalData, setModalData] = useState();

    useEffect(() => {
        setModalData(() => Object.values(data));
    }, [data])


    return (
        <div className="modal" onClick={console.log(modalData)}>
            <div id="scale">

            </div>
            {
                modalData &&
                <>
                    <div className="modalElements">
                        <div>
                            {modalData.map(data => {
                                if (data.media_type === "image") {
                                    return (
                                        <img src={modalData.map(data => data.url)} alt=""></img>
                                    )
                                } else {
                                    return (
                                        <iframe src={modalData.map(data => data.url)} title={data.title}></iframe>
                                    )
                                }
                            })}
                        </div>
                        <div>
                            <h1>
                                {modalData.map(data => data.title)}
                            </h1>
                            <p>{modalData.map(data => data.copyright)}</p>
                            <p>{modalData.map(data => data.date)}</p>
                            <h4>{modalData.map(data => data.explanation)}</h4>
                        </div>


                    </div>

                </>
            }
        </div>
    )
}

export default Modal;