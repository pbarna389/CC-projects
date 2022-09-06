import { useEffect, useState } from 'react';

const Footer = ({ year, month, date, dayName }) => {


    const [isActive, setHidden] = useState("false");
    const [timeoutID, setTimeoutID] = useState(null);

    const ToggleClass = () => {
        setHidden(!isActive);
        returnToDefault();
    };

    const startTimer = () => {
        console.log(isActive, timeoutID);
        const id = setTimeout(() => {

            setHidden(true);

        }, 2000);

        setTimeoutID(id)
    };

    const returnToDefault = () => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        startTimer();
    };

    useEffect(() => {
        if (!isActive) {
            console.log(isActive)
            setTimeout(() => {
                setHidden(true)
            }, 2000);
        }
    });

    return (
        <>
            <footer className={isActive ? "footer__visible" : "footer__hidden"} onClick={ToggleClass}>
                <div className="footer">
                    {year} - {month} - {date}, {dayName}
                </div>
            </footer>
        </>
    )
};

export default Footer;