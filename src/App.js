import "./styles.css";
import React, { useState } from "react";

var songsDictionary = {
  Hindi: [
    { song: "Hindi-Song-1" },
    { song: "Hindi-Song-2" },
    { song: "Hindi-Song-3" },
    { song: "Hindi-Song-4" }
  ],
  English: [
    { song: "English-Song-1" },
    { song: "English-Song-2" },
    { song: "English-Song-3" },
    { song: "English-Song-4" }
  ],
  Kannda: [
    { song: "Kannada-Song-1" },
    { song: "Kannada-Song-2" },
    { song: "Kannada-Song-3" },
    { song: "Kannada-Song-4" }
  ],
  Tamil: [
    { song: "Tamil-Song-1" },
    { song: "Tamil-Song-2" },
    { song: "Tamil-Song-3" },
    { song: "Tamil-Song-4" }
  ],
  Telugu: [
    { song: "Telugu-Song-1" },
    { song: "Telugu-Song-2" },
    { song: "Telugu-Song-3" },
    { song: "Telugu-Song-4" }
  ]
};
var songsWeKnow = Object.keys(songsDictionary);

export default function App() {
  var [songList, setSongList] = useState("Hindi");

  function songsClickHandler(language) {
    setSongList(language);
  }

  return (
    <div className="App">
      <h1>Let's try something interesting !!</h1>

      <h3>Songs we know</h3>
      {songsWeKnow.map(function (language) {
        return (
          <button
            onClick={() => songsClickHandler(language)}
            style={{
              fontsize: "3rem",
              padding: "0.5rem",
              fontStyle: "bold",
              cursor: "pointer",
              backgroundColor: "blue"
            }}
            key={language}
          >
            {language}
          </button>
        );
      })}
      <div>
        <ul>
          {songsDictionary[songList].map((language) => (
            <li
              key={language.song}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                color: "black",
                fontWeight: "600",
                margin: "0.5rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "medium" }}> {language.song} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
