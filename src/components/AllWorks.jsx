import React, { Component } from 'react'
import { OneWork } from './oneWork'
import { Footer } from './index'
const hardcodedData = [
  {
    name: 'Mushroom Market',
    link: 'MushroomMarket',
    subtitle: 'E-COMMERCE WEBSITE',
    description: `Mushroom market is an e-commerce website that sells groceries and bundles in the form of editable recipes.
    Created using Node, PostgreSQL and Express for back-end and React and  Redux for the front-end, written in JavaScript.`,
    websiteLink: `https://graceshopper2020mushroom.herokuapp.com/home`,
    githubLink: `https://graceshopper2020mushroom.herokuapp.com/home`,
    imgSrc: 'muhroom.jpg'
  },
  {
    name: 'Study Buddy',
    link: 'StudyBuddy',
    subtitle: 'REACT NATIVE MEETUP APP',
    description: `Study Buddy is a meetup app that connects students through groups created by them for practicing coding.Created using Firebase services, Node and Express for back-end and React Native and Redux for the front-end, written in JavaScript.`,
    websiteLink: `https://github.com/Stackathon-Studdy-Buddy/Study-Buddy`,
    githubLink: `https://github.com/1911-GH-mushrooms/GraceShopper`,
    imgSrc: 'https://user-images.githubusercontent.com/55503788/74886012-ff0ac980-5344-11ea-814e-9e4b23e6ff54.png'
  },
  {
    name: 'Harmonious',
    link: 'Harmonious',
    subtitle: 'PROGRESSIVE WEB APP',
    description: `Harmonious is a progressive web app that streamlines the booking process between an artist and a booker.
    Created using PostgreSQL, Express and Firebase services in JavaScript for back-end and React, Ionic framework and Redux in Typescript for the front-end.`,
    websiteLink: `https://harmonious-capstone.herokuapp.com/home`,
    githubLink: `https://github.com/campstone-lead/Capstone`,
    imgSrc: 'Harmonious.jpg'
  }
]
class AllWorks extends Component {

  componentDidMount() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none'
    var navLinks = document.getElementsByClassName('nav-link');
    const logo = document.getElementsByClassName('navbar-brand')[0];
    navLinks[0].style.color = 'white';
    navLinks[1].style.color = 'white';
    navLinks[1].style.fontWeight = '700';
    navLinks[0].style.fontWeight = '700';
    logo.style.color = 'white';
    logo.style.fontWeight = '700';
  }
  render() {

    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }} >
          <div></div>
          <div className='imgwrapper'
            data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            &nbsp;

          <div className='text'>
              <h1 align='center' style={{ marginBottom: '25px', textAlign: 'center', whiteSpace: 'pre-wrap', fontFamily: 'proxima-nova' }}
              >Liana's<br /> Portofolio.</h1>

            </div>

          </div>
          {/*
        <div className='subWrapper'>
          <h1 align='center' style={{ marginBottom: '25px', textAlign: 'center', whiteSpace: 'pre-wrap', fontFamily: 'proxima-nova' }}>These are some of my projects</h1>
        </div> */}
          <div className='mainWrapper' id='animation1'>
            <div data-aos="slide-down"
              data-aos-delay="200"
              data-aos-duration="2000">
              <h1 align='center' className='card-title' style={{ color: 'rgb(170, 170, 170)' }}> Check out some of my projects</h1>
            </div>
            <div className='imgwrapper1'>
              {
                hardcodedData.map((elemnet, index) => {
                  return <OneWork key={index} data={elemnet} index={index} />
                })
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AllWorks;
