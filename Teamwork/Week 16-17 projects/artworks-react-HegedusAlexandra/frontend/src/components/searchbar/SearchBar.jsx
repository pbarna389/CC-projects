import { useState } from "react"; 
import { Link } from "react-router-dom";

import "./SearchBar.css"

const SearchBar = ({ handleClick }) => {
    const [reload, setReload] = useState(true);

    return (
        <div className="searchbar-wrapper">
            <form onChange={handleClick} data-form="searchbar">
            <select className="selectArtwork" data-selector="searchbar">
                <option value="object">Artwork</option>
            </select>
            <input className="searchInput" type="text" data-input="searchbar"></input>
            <Link to="/searchresult/1">
                <button className="searchButton" data-btn="searchbar">
                    Search!
                </button>
            </Link>
            </form>
        </div>
    )
}

export default SearchBar;