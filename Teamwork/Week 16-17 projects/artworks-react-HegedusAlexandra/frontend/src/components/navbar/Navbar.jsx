import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./navbar.css"


const Navbar = ({ token, setToken }) => {
    const [fetchData, setFetchData] = useState(null);
    const [showNav, setShowNav] = useState(false);

    const APIkey = "1d73b970-906b-477a-8085-1df990db6481"

    useEffect(() => {
        const getFetch = async () => {
          const naturData = await fetch(`https://api.harvardartmuseums.org/person?apikey=${APIkey}&size=100&sortorder=asc&sort=alphasort`)
          const response = await naturData.json()
          setFetchData(response);
          console.log(response.info.page)
          return response
        }
        getFetch()
      }, []);

      const logout = () => {
        const otherButton = document.querySelector(".showheader");
        otherButton.click();
        setToken("");
        localStorage.clear();
      }

      const clickOtherButton = () => {;
        const otherButton = document.querySelector(".showheader");
        otherButton.click();
      }

    return (
        <>
        {
            fetchData &&
                <nav className={showNav ? "Shown" : ""}>
                      <Link to="/" onClick={() => clickOtherButton()}>
                        <p>Home</p>
                        <div>
                          <img src="https://www.spainthenandnow.com/wp-content/uploads/2017/12/goya-prado-693px-la_cometa-e1552016122349.jpg" alt=""></img>
                        </div>
                      </Link>
                      <Link to={`/classification/${fetchData.info.page}` } onClick={() => clickOtherButton()}>
                        <div>
                          <img src="https://roveratlas.com/wp-content/uploads/2020/02/1280px-Creation_of_Adam_Michelangelo_Detail.jpg" alt=""></img>
                        </div>
                          <p>Classification</p>
                      </Link>
                      <Link to={`/artists/${fetchData.info.page}`} onClick={() => clickOtherButton()}>
                        <p>Artists</p>
                          <div>
                            <img src="https://artincontext.org/wp-content/uploads/2021/11/Francisco-de-Goya.jpg" alt=""></img>
                          </div>
                      </Link>
                    <Link to="/profile" onClick={() => clickOtherButton()}>
                        <p>Profile</p>
                      <div>
                        <img src="https://miro.medium.com/max/1200/1*kI_cbCh6HYSMUqfFAHtK1Q.jpeg" alt=""></img>
                      </div>
                    </Link>
                    <Link to="/" onClick={() => logout()}>
                        <p>Logout</p>
                      <div>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Untitled_painting_by_Zdzislaw_Beksinski_1984.jpg" alt=""></img>
                      </div>
                    </Link>
                    <button className="showheaderAlt" onClick={() => setShowNav(!showNav)}></button>
                </nav>
        }
        </>
    )
}

export default Navbar
