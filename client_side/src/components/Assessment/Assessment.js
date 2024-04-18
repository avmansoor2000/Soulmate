// AssessmentComponent.js
import React, { useState } from 'react';
import './Assessment.css';

const AssessmentComponent = () => {
  const [ratings, setRatings] = useState({
    attractiveness: 0,
    intelligence: 0,
    humor: 0,
    kindness: 0,
    compatibility: 0
  });

  const handleRatingChange = (criteria, value) => {
    setRatings(prevState => ({
      ...prevState,
      [criteria]: value
    }));
  };

  return (
    <div className="assessment-container">
      <h2>Assessment</h2>
      <p>Please rate the following criteria:</p>
      <div className="criteria">
        <div className="criteria-item">
          <label>Attractiveness:</label>
          <input type="range" min="0" max="10" value={ratings.attractiveness} onChange={(e) => handleRatingChange('attractiveness', parseInt(e.target.value))} />
          <span>{ratings.attractiveness}</span>
        </div>
        <div className="criteria-item">
          <label>Intelligence:</label>
          <input type="range" min="0" max="10" value={ratings.intelligence} onChange={(e) => handleRatingChange('intelligence', parseInt(e.target.value))} />
          <span>{ratings.intelligence}</span>
        </div>
        <div className="criteria-item">
          <label>Humor:</label>
          <input type="range" min="0" max="10" value={ratings.humor} onChange={(e) => handleRatingChange('humor', parseInt(e.target.value))} />
          <span>{ratings.humor}</span>
        </div>
        <div className="criteria-item">
          <label>Kindness:</label>
          <input type="range" min="0" max="10" value={ratings.kindness} onChange={(e) => handleRatingChange('kindness', parseInt(e.target.value))} />
          <span>{ratings.kindness}</span>
        </div>
        <div className="criteria-item">
          <label>Compatibility:</label>
          <input type="range" min="0" max="10" value={ratings.compatibility} onChange={(e) => handleRatingChange('compatibility', parseInt(e.target.value))} />
          <span>{ratings.compatibility}</span>
        </div>
      </div>
    </div>
  );
};

export default AssessmentComponent;
