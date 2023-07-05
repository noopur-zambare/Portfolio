import React, { useState } from 'react';
import "./Extracurricular.css"

const Extracurricular= () => {
  const tileData = [
    { text: "Inter IIT Tech Meet 11.0", text2: "ML Team Lead Grad Capital", imageSrc: "/interiit.png" },
    { text: "Rotaract Club of IIT Jodhpur", text2: "Volunteer", imageSrc: "/rotary.jpeg" },
    { text:"IIT Jodhpur's Technical + Entrepreneurial Festival",text2: "Team Media - Assistant Head", imageSrc: "/prometeo.jpeg" },
    { text:"Entrepreneurship Event",text2: "HULT Prize winner at IIT Jodhpur", imageSrc: "/hult.jpeg" },
  ];

  const [hoveredTile, setHoveredTile] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredTile(index);
  };

  const handleMouseLeave = () => {
    setHoveredTile(null);
  };

  return (
    <div className="tiles">
      {tileData.map((tile, index) => (
        <div
          key={index}
          className="tile"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`image-container ${hoveredTile === index ? 'hovered' : ''}`}
            style={{ backgroundImage: `url(${tile.imageSrc})` }}
          >
            <div className="text-overlay">
              <center>
              {tile.text}   
              <br/>
              {tile.text2}
              </center>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Extracurricular;
