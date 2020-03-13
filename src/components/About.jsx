import React from 'react'
import { Footer } from './index'

class About extends React.Component {

  componentDidMount() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none'
  }
  render() {


    return (
      <div>
        <div className='aboutWrapper'>
          <div className='about'>
            <div className='card info'>
              <img src='About.jpg' className='card-img-top img-fluid rounded float-left' alt='anout.jpg' />
              <div className='card-body'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>


                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <a href='https://www.linkedin.com/in/andreea-liana-c-72273718b/'>
                      <span>
                        <i className="fab fa-linkedin fa-3x"></i>
                      </span>
                    </a>

                    <a href='https://github.com/lianach'>
                      <span style={{ color: 'black' }}>
                        <i className="fab fa-github fa-3x"></i>
                      </span>
                    </a>
                    <a href='projects'>
                      <span style={{ color: 'black' }}>
                        <i className="fa fa-file fa-3x"></i>
                      </span>
                    </a>
                  </div>


                </div>



              </div>
            </div>
            <div className="card">
              <div className="card-body" >
                <h3 className='card-title' style={{ color: 'rgb(170, 170, 170)' }}>About</h3>
                <p>I have always been passionate about technology since an early age. Always opening computers up and putting them back, playing games and trying to mod games. I didn't know what I wanted to become when I grew up for a long time up until my first coding class in my freshman year of high school. It was an eye opening experience that made me decide what kind of path I want to follow. I fell in love with coding and solving problems so much that I moved in Advanced Mathematics and Computer Science class the next year and stayed there up until the end of high school.
              </p>

                <p>Over the course of my high school, I trained a lot in problem solving and I got accepted in one of the most prestigious Computer Science program in Romania at the Faculty of Computer Science of Iasi, which is part of the Alexandru Ion Cuza University of Iasi. During my time there, I volunteer for multiple associations the most notable being ASII(in Romanian `Asociatia Studentiilor Informaticieni Ieseni`) association, which is the Computer Science students association of Iasi. I got to be involved in multiple projects as Media Public Relations Coordinator that would promote making learning code more accessible for other students.
              </p>

                <p>After 2 years of attending college in Romania, I relocated to the US and decided instead of continuing my education in an University environment I opted for attending the Grace Hopper Program at the Fullstack Academy in New York.</p>
                <p>
                  My experience at Fullstack Academy was one of a kind, a delightful and eye opening experience where I was able to grow so much and learn so many skills in an amazing and supporting environment.
                  I got to create amazing projects with wonderful people that I am proud of using the skills I learned during my time at the Academy.
            </p>
                <p>Now, after finishing the program I am on my way on becoming a Fullstack developer while working at the same time on some of my passion projects.</p>
                <h3 className='card-title' style={{ color: 'rgb(170, 170, 170)' }}>Let's conect</h3>
                <p>
                  If you wish to talk to me directly you can find my at my email address
                <span style={{ color: 'rgb(170, 170, 170)', fontWeight: 600 }}> liana.andreea97@yahoo.com</span> or through my linked profile which is listed below my picture.
              </p>
              </div>
            </div>
          </div>
        </div >
        <Footer />
      </div>
    )
  }
}

export default About;
