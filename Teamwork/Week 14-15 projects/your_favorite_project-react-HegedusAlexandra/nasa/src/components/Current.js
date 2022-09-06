
import React from 'react';

import "./Current.css";

function Current() {

  const loadEvent = async function () {     
      
      reload();

      const rootElement = document.querySelector(".scene");
      const intro = document.getElementById("instruction");
      rootElement.innerHTML = "";
      intro.innerHTML = "";
      
                
  }; 
  let today = new Date();
  const parseDate = function () {      
    
      let selectedDate = document.getElementById("anotherDate").value;
      
      reload(selectedDate);
  };

  const reload = async function (date) {
      const imagePlace = document.querySelector(".lineimg");
      const title = document.getElementById("title");
      const explanationElement = document.getElementById("explanation")
      

      if (date) {
      date = "&date="+ date;
      } else {
      date = "";
      }

      const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=3oLoOUzRQr7cWlt88c4kYWsfQHGym41G7o3DUWKF" +
          date
      );
      
      const deleteBtn = document.getElementById("deleteExp");
      const selectField = document.getElementById("anotherDate")
      const responseJson = await response.json();
      deleteBtn.style.display = "block";
      selectField.style.display = "block";
      title.innerHTML = `<h2>${responseJson.title}</h2>`;
      explanationElement.innerHTML = `<div id="explanationBox">
        <h3>${responseJson.explanation}</h3>        
      </div>`;     
      imagePlace.innerHTML = `<img src="${responseJson.hdurl}">`;
      
      
  };

  const deleteIt = () => {
    const explanationElement = document.getElementById("explanation");
    /* const deleteBtn = document.getElementById("deleteExp"); */
    explanationElement.innerHTML="";
    /* deleteBtn.textContent = "open"; */

  }  
    
  /*   useEffect( ()=> {
    },[]) */   

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
          <h2 id="instruction">
            Click on the planet to see the newest phenomenon
            
          </h2>
        </div>
        <div className="line"></div>
        <div className="line3"></div>
      </div>
      <div className="group">
        <div className="line4" id="explanation"></div>
        <div className="line4"></div>
        <div className="lineimg" onClick={loadEvent}>
          <div className="scene">
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
          
        </div>
        <div className="line1"></div>
        <div className="line"></div>
      </div>
      <div className="group">
        <div className="line"></div>
        <div className="line3"></div>
        <div  className="line2">
          <button id="deleteExp" onClick={deleteIt}>Close explanation</button>
          <input type="date" id="anotherDate" name="date" min="2000-01-01" max={today.toISOString().split('T')[0]} onChange={parseDate}/>
        </div>
        <div className="line"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}

export default Current;
