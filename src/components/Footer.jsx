import React from 'react'

export default class Footer extends React.Component {


  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div style={{
            dispaly: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignContent: 'center'
          }}>
            < div>
              <h5 align='center' style={{ margin: '20px' }}>Quick Links</h5>


              <div style={{
                position: 'relative', display: 'flex', placeContent: 'center'
              }}>
                < a style={{ margin: 10, color: 'white', textDecoration: 'none' }} rel="home" href="/" >
                  Home</a>
                <a style={{ margin: 10, color: 'white', textDecoration: 'none' }} href="/projects">Work</a>
                <a style={{ margin: 10, color: 'white', textDecoration: 'none' }} href="/about">About | Contact</a>
              </div>
              <h5 align='center' style={{ margin: '20px' }}>Social Links</h5>

              <div style={{ display: 'flex', placeContent: 'center' }}>
                <a href='https://www.linkedin.com/in/andreea-liana-c-72273718b/'>
                  <span style={{ color: 'white', margin: '10px' }}>
                    <i className="fab fa-linkedin fa-2x"></i>
                  </span>
                </a>

                <a href='https://github.com/lianach'>
                  <span style={{ color: 'white', margin: '10px' }}>
                    <i className="fab fa-github fa-2x"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div >
      </footer >
    )
  }
}
