import React from 'react'
import '../index.css'
class NavBar extends React.Component {


  render() {
    return (
      <nav className="navcontent">
        <a className="navbar-brand" style={{ color: "black", marginLeft: 5 }} rel="home" href="/" >
          Liana Chan
        </a>
        <ul className="nav justify-content-end" id="pills-tab" role="tablist">

          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>

        </ul>
      </nav>


    )
  }
}
export default NavBar;
