import React from 'react';

export default function Home() {
  return (
    <div className="homeWrapper">
      {/* Home background image */}
      <div className="homeBG">
        <img src="src\images\home-BG.jpg" alt="" className="" />
      </div>

      {/* Header */}
      <div className="homeHeader">
        <h1 className="homeName">Ramiro Peña</h1>
      </div>
    </div>
  );
}
