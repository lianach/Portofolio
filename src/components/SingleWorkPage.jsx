import React from 'react'
import history from '../history'
import { Footer } from './index'
const hardcodedData = {
  MushroomMarket: {
    name: 'Mushroom Market',
    link: 'MushroomMarket',
    subtitle: 'An e-commerce website where you will find any groceries you will ever need! ',
    description: `Mushroom market is an e-commerce website that sells groceries and bundles in the form of editable recipes.
    Mushroom market was created by a team of 4 people including myself during my time at the Grace Hopper Program in a span of 1 week and a half.
    On this website, you can buy groceries and recipes either with you own account or as a guest and you can customize your recipe bundle the way you want to. After choosing what products, you go to your cart and then checkout, the same way you would do on an e-commerce website.`,
    stack: `Created using Node, PostgreSQL and Express for back-end and React and  Redux for the front-end, written in JavaScript`,
    websiteLink: `https://graceshopper2020mushroom.herokuapp.com/home`,
    githubLink: `https://github.com/1911-GH-mushrooms/GraceShopper`,
    imgSrc: 'muhroom.jpg'
  },
  StudyBuddy: {
    name: 'Study Buddy',
    link: 'StudyBuddy',
    subtitle: 'The meetup up app you will always reach for as a student!',
    description: `Study Buddy is an react native app that allows users to post and view study groups in their area. This app uses the Google Maps API to allow users to see all meetups on a map, or they can choose to see a list view of meetings based on their proximity.
    Study Buddy was built by Liana Chan and Celia Macrae, two software engineering students at Fullstack Academy in span of 3 days in a Stackathon environment. Study Buddy was inspired by all of the technical interview prep work that awaited us upon graduation of the Grace Hopper program. It provides a way for us to stay in contact with our classmates and coordinate meetups to prepare for technical interviews.`,
    stack: `Created using Firebase services, Node and Express for back-end and React Native and Redux for the front-end, written in JavaScript.`,
    websiteLink: `https://github.com/Stackathon-Studdy-Buddy/Study-Buddy`,
    githubLink: `https://github.com/1911-GH-mushrooms/GraceShopper`,
    imgSrc: 'https://user-images.githubusercontent.com/55503788/74886012-ff0ac980-5344-11ea-814e-9e4b23e6ff54.png'
  },
  Harmonious: {
    name: 'Harmonious',
    link: 'Harmonious',
    subtitle: `Are you an artist that is tired of needlessly scouring the web for venues that are close to you and fit your artistic style?
    Are you a booker looking for an artist who’s the perfect match for your venue?
    --- Harmonious is the answer! ---`,
    description: `Harmonious is a progressive web app that streamlines the booking process between an artist and a booker.
    It was created by a team of 4 people including myself in a span of 3 weeks and a half.
    We decided to create this app because we understand the frustration for musicians at finding a suitable place to play. Our app also helps venues find suitable artists to play at their events. We have our recommendations for both users (bookers and artists) showing the best match, based on their location and preferable genres. If you are interested in someone particular or a specific place, you can also search for them.`,
    stack: ` Created using PostgreSQL, Express and Firebase services in JavaScript for back-end and React, Ionic framework and Redux in Typescript for the front-end.`,
    websiteLink: `https://harmonious-capstone.herokuapp.com/home`,
    githubLink: `https://github.com/campstone-lead/Capstone`,
    imgSrc: 'harmonious1.jpg'
  }
}

export default class SingleProjectPage extends React.Component {



  componentDidMount() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none'
  }
  render() {
    const path = history.location.pathname.slice(1);
    const currentProject = hardcodedData[path]
    const { name, subtitle, description, githubLink, websiteLink, imgSrc, stack } = currentProject;
    return (
      <div >

        <div className='singleWorkWrapper'
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="20000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center" >
          <div></div>
          <div align='center' className="card-title">
            <h1 >{name}</h1>
          </div>
          <div align='center' className='card-subtitle mb-2 text-muted' style={{ fontStyle: 'italic' }}>
            <h5>"{subtitle}"</h5>
          </div>
          <div data-aos="fade-in"
            data-aos-delay="50"
            data-aos-duration="700"

            data-aos-once="false"
          >
            <img src={imgSrc} alt="..." className='img-fluid rounded' style={{ border: "none" }} />
          </div>
          <div className="card" style={{ border: 'none', backgroundColor: 'transparent' }}
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="400"
          >
            <div align='center' className="card-body" >
              <h3 className='card-title' style={{ color: 'rgb(170, 170, 170)', fontWeight: 800 }}>Story</h3>
              <p>{description}
              </p>
            </div>
          </div>
          <div className="card" style={{ border: 'none', backgroundColor: 'transparent' }}
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            <div align='center' className="card-body" >
              <h3 className='card-title' style={{ color: 'rgb(170, 170, 170)', fontWeight: 800 }}>Stack</h3>

              <p>{stack}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', placeContent: 'center', backgroundColor: 'none' }}
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="600">
            <a href={githubLink}>
              <span style={{ color: 'black', margin: '10px', backgroundColor: 'none' }}>
                <i className="fab fa-github fa-2x"></i>
              </span>
            </a>
            <a href={websiteLink}>
              <span style={{ color: 'black', margin: '10px', backgroundColor: 'none' }}>
                <i className="fas fa-globe fa-2x"></i>
              </span>
            </a>
          </div>
        </div>


        <Footer />
      </div >
    )
  }
}
