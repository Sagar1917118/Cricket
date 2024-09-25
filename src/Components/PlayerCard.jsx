import React from 'react';
import './PlayerCard.css';
import { useState } from 'react';
const PlayerCard = ({ playerName, playerRole, sixes, fours, runs ,playerImage,backgroundShades,test,t20,odi}) => {
    const cardStyle = {
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundImage: `url(${backgroundShades})`, // Set the background image dynamically
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
  return (
    <div className='card-container'>
        <div style={cardStyle} className='card'>
      <div className="player-details front">
        <div className="player-info">
          <h2>{playerName}</h2>
          <p>{playerRole}</p>
          <div className="stats">
            <span>SIX {sixes}</span>
            <span>FOUR {fours}</span>
            <span>RUNS {runs}</span>
          </div>
        </div>
        <img src={playerImage} alt={playerName} className="player-image" />
      </div>
      <div className="player-details back">
            <h2>ICC Cricketer Ranking</h2>
            <div className='sub-div-player-back'>
            <div className="player-card-back-test">
            <h3>Test</h3>
            <p>Rank: {test}</p>
            </div>

            <div className="player-card-back-odi">
            <h3>ODI</h3>
            <p>Rank: {odi}</p>
            </div>

            <div className="player-card-back-t20">
            <h3>T20</h3>
            <p>Rank: {t20}</p>
            </div>
            </div>
      </div>
      </div>
    </div>
  );
};

export default PlayerCard;
