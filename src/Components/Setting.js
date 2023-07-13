import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColorScheme } from '../colorSchemeSlice';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.colorScheme);
  const {
    backgroundColor,
    primaryColor,
    secondaryColor,
    fontSize,
    fontColor,
  } = colorScheme;


  const handleSchemeChange = (scheme) => {
    switch (scheme) {
      case 'scheme1':
        dispatch(
          setColorScheme({
            backgroundColor: '#00af3a',
            primaryColor: '#5201e9',
            secondaryColor: '#ff08b5',
            fontSize: '16px',
            fontColor: '#000000',
          })
        );
        break;
      case 'scheme2':
        dispatch(
          setColorScheme({
            backgroundColor: '#743bfa',
            primaryColor: '#008307',
            secondaryColor: '#d45003',
            fontSize: '18px',
            fontColor: '#000000',
          })
        );
        break;
      case 'scheme3':
        dispatch(
          setColorScheme({
            backgroundColor: '#c95b02',
            primaryColor: '#3c0074',
            secondaryColor: '#2196f3',
            fontSize: '14px',
            fontColor: '#000000',
          })
        );
        break;
      case 'scheme4':
        dispatch(
          setColorScheme({
            backgroundColor: '#a70099',
            primaryColor: '#ff5722',
            secondaryColor: '#7f3cfd',
            fontSize: '20px',
            fontColor: '#000000',
          })
        );
        break;
      case 'scheme5':
        dispatch(
          setColorScheme({
            backgroundColor: '#5ec200',
            primaryColor: '#e91e63',
            secondaryColor: '#00bcd4',
            fontSize: '22px',
            fontColor: '#000000',
          })
        );
        break;
      default:
        dispatch(
          setColorScheme({
            backgroundColor: '',
            primaryColor: '',
            secondaryColor: '',
            fontSize: '',
            fontColor: '',
          })
        );
    }

  };

  return (
    <div style={{
      backgroundColor: backgroundColor,
      color: fontColor,
    }} >
      <header className="header2" style={{backgroundColor: secondaryColor, color:primaryColor}}>Settings</header>
      <div className="backs" >
        <div className="color-scheme-buttons">
          <button
            className={`color-scheme-btn1 ${
              colorScheme.backgroundColor === '#5201e9' ? 'active' : ''
            }`}
            style={{ backgroundColor: '#5201e9' }}
            onClick={() => handleSchemeChange('scheme1')}
          />
          <button
            className={`color-scheme-btn2 ${
              colorScheme.backgroundColor === '#008307' ? 'active' : ''
            }`}
            style={{ backgroundColor: '#008307' }}
            onClick={() => handleSchemeChange('scheme2')}
          />
          <button
            className={`color-scheme-btn3 ${
              colorScheme.backgroundColor === '#3c0074' ? 'active' : ''
            }`}
            style={{ backgroundColor: '#3c0074' }}
            onClick={() => handleSchemeChange('scheme3')}
          />
          <button
            className={`color-scheme-btn4 ${
              colorScheme.backgroundColor === '#ff5722' ? 'active' : ''
            }`}
            style={{ backgroundColor: '#ff5722' }}
            onClick={() => handleSchemeChange('scheme4')}
          />
          <button
            className={`color-scheme-btn5 ${
              colorScheme.backgroundColor === '#e91e63' ? 'active' : ''
            }`}
            style={{ backgroundColor: '#e91e63' }}
            onClick={() => handleSchemeChange('scheme5')}
          />
        </div>
        <div className='bott'>
        <label>
          Background Color:
          <input
            type="color"
            value={colorScheme.backgroundColor}
            onChange={(e) =>
              dispatch(
                setColorScheme({
                  ...colorScheme,
                  backgroundColor: e.target.value,
                })
              )
            }
          />
        </label>
        <label>
          Primary Color:
          <input
            type="color"
            value={colorScheme.primaryColor}
            onChange={(e) =>
              dispatch(
                setColorScheme({
                  ...colorScheme,
                  primaryColor: e.target.value,
                })
              )
            }
          />
        </label>
        <label>
          Secondary Color:
          <input
            type="color"
            value={colorScheme.secondaryColor}
            onChange={(e) =>
              dispatch(
                setColorScheme({
                  ...colorScheme,
                  secondaryColor: e.target.value,
                })
              )
            }
          />
        </label>
        <label>
          Font Size:
          <input
            type="number"
            min="12"
            max="24"
            value={colorScheme.fontSize}
            onChange={(e) =>
              dispatch(
                setColorScheme({
                  ...colorScheme,
                  fontSize: e.target.value,
                })
              )
            }
          />
        </label>
        <label>
          Font Color:
          <input
            type="color"
            value={colorScheme.fontColor}
            onChange={(e) =>
              dispatch(
                setColorScheme({
                  ...colorScheme,
                  fontColor: e.target.value,
                })
              )
            }
          />
        </label>
        </div>
      </div>
     </div>
  );
};

export default SettingsPage;
