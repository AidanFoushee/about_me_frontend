import React, { useState } from 'react';
import { fetchApplicantInfo } from '../utils/api.ts';
import '../styles/App.css';


const App: React.FC = () => {
  const [applicantInfo, setApplicantInfo] = useState<any>(null);

  const handleClick = async () => {
    const data = await fetchApplicantInfo();
    setApplicantInfo(data);
  };

  return (
    <div className="app">
      <h1>Click Me!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/CLB12084.jpeg`}
        alt="Your Profile"
        className="profile-picture"
        onClick={handleClick}
      />
      {applicantInfo && (
        <div className="info">
          <p><strong>Name:</strong> {applicantInfo.name}</p>
          <p><strong>Favorite Food:</strong> {applicantInfo.favoriteFood}</p>
          <p><strong>Hobby:</strong> {applicantInfo.hobby}</p>
          <p><strong>Favorite Quote:</strong> {applicantInfo.favoriteQuote}</p>
        </div>
      )}
    </div>
  );
};

export default App;
