import React from 'react';
import { useSelector } from 'react-redux';

const AboutPage = () => {
  const colorScheme = useSelector((state) => state.colorScheme);

  const {
    backgroundColor,
    primaryColor,
    secondaryColor,
    fontSize,
    fontColor,
  } = colorScheme;

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        
      }}  className="back"
    >
      <header className="header2" style={{ backgroundColor: secondaryColor, color:primaryColor }}>
      About
      </header>
      <main style={{ fontSize: fontSize }}>
        <h1></h1>
        <p className="about" style={{color: fontColor}}>Software Devloper</p>
      </main>
      </div>
  );
};

export default AboutPage;
