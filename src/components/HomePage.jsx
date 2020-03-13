import React from 'react'
import { Link } from 'react-router-dom'
import '../HomePage.css'
export default class HomePage extends React.Component {
  componentDidMount() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(landing.jpg)'
  }
  render() {
    return (
      <div className="home">

        <div align="center">
          <div className='main'>
            <h3>LIANA'S PORTFOLIO</h3>
            <button> <Link to="/projects" className="nav-link" style={{ textDecoration: 'none', color: 'white', fontWeight: '700' }} >
              Check my work out
            </Link></button>
          </div>




        </div>
      </div>
    )
  }
}
