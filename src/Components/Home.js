import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
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
        
      }} className="back"
    >
      <header className="header2" style={{ backgroundColor: secondaryColor, color:primaryColor }}>
      Dasboard
      </header>
      <main style={{fontSize: fontSize }}>
        <h1 className="we">Welcome</h1>
        <p className="hcon" style={{color: fontColor}}>Dynamically Changes colour of web page</p>
      </main>
        </div>
  );
};

export default HomePage;
