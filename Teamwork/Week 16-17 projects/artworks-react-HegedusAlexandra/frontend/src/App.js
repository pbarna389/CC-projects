import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Artists from "./components/artists/Artists.jsx"
import Artwork from "./components/artwork/Artwork"
import Login from "./components/login/Login"
import Registration from "./components/registration/Registration"
import ArtistDoc from "./components/artistItems/ArtistItems"
import SearchBar from "./components/searchbar/SearchBar"
import SearchResult from "./components/searchresult/SearchResult"
import SearchArtwork from "./components/searchartwork/SearchArtwork"
import Profile from "./components/profile/Profile"
import Classification from "./components/classification/Classification"
import ClassificationItems from "./components/classificationItems/ClassificationItems"

import useToken from './hooks/useToken'

import "./App.css";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [userName, setUserName] = useState(sessionStorage.getItem("userName"));
  const { token, setToken } = useToken();
  const [headerOn, setHeaderOn] = useState(false);
  let user = "";


  const handleClick = () => {
    const target = document.querySelector(`[data-btn="searchbar"]`)
    const dataId = target.getAttribute("data-btn");
    const selectedOption = document.querySelector(`[data-selector="${dataId}"]`);
    const inputWord = document.querySelector(`[data-input="${dataId}"]`);
    console.log(selectedOption.value, inputWord.value)
    setSearchData({ "type": selectedOption.value, "string": inputWord.value })
  };

  // const handleSaveUser = event => {
  //   const target = event.target;
  //   const dataId = target.getAttribute("data-btn");
  //   const inputNameField = document.querySelector(`[data-input="${dataId}"]`);
  //   userData = userName
  // }

  useEffect(() => {
    console.log(user)
  }, [])

  const noScrollbar = () => {
    const rootEl = document.querySelector('#root');
    return headerOn ? rootEl.classList.add("noSearchBar") : rootEl.classList.remove("noSearchBar");
  }

  noScrollbar();

  const clickOtherButton = () => {
    setHeaderOn(!headerOn);
    const otherButton = document.querySelector(".showheaderAlt");
    otherButton.click();
  }

  console.log("pippo", userName)
  return (
    <div className={`App ${headerOn ? "HeaderOn" : ""} `}>
      <BrowserRouter>
        {
          !token &&
          <>
            <Routes>
              <Route path="/" element={<Login setToken={setToken} userName={userName} setUserName={setUserName} />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </>
        }
        {
          token &&
          <>
            <button className="showheader" onClick={() => clickOtherButton()}></button>
            <Navbar token={token} setToken={setToken} />
            <SearchBar handleClick={handleClick} setHeaderOn={setHeaderOn} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists">
                <Route path=":page">
                  <Route index element={<Artists />} />
                  <Route path=":personid">
                    <Route index element={<ArtistDoc />} />
                    <Route path=":objectid" element={<Artwork userName={userName} />} />
                  </Route>
                </Route>
              </Route>
              <Route path="/searchresult">
                <Route path=":searchpage">
                  <Route index element={<SearchResult searchdata={searchData} />} />
                  <Route path=":objectid" element={<SearchArtwork userName={userName} />} />
                </Route>
              </Route>
              <Route path="/classification">
                <Route path=":classpage">
                  <Route index element={<Classification />} />
                  <Route path=":classificationid">
                    <Route path=":classspecpage">
                      <Route index element={<ClassificationItems />} />
                      <Route path=":objectid" element={<Artwork userName={userName} />} />
                    </Route>
                  </Route>
                </Route>
              </Route>
              <Route path="profile">
                <Route index element={<Profile userName={userName} />} />
                <Route path=":objectid" element={<Artwork userName={userName} />} />
              </Route>
            </Routes>
          </>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
