import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Layout = ({ children }) => {
  const colorScheme = useSelector((state) => state.colorScheme)

  const {
    primaryColor,
    secondaryColor,
    fontColor,
  } = colorScheme

  return (
    <div className="layout" >
    <header className="header" style={{ backgroundColor: primaryColor }}>
    Header
  </header>
  <div className="side-menu" style={{color: fontColor}}>   
        <ul className="menu" >
          <li className="limenu" >
            <Link to="/">Home</Link>
          </li>
          <li className="limenu">
            <Link to="/about">About</Link>
          </li>
          <li className="limenu"> 
            <Link to="/contact">Contact</Link>
          </li>
          <li className="limenu">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <main className="content">{children}</main>
      <footer className="footer" style={{ backgroundColor: secondaryColor, color: fontColor, }}>
       <h3>Made By</h3><p>Pritam Kumar Samaddar</p>
      </footer>
      
    </div>
  )
}

export default Layout