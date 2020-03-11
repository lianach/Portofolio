import React, { Component } from 'react'
import { OneWork } from './oneWork'


const hardcodedData = [
  {
    name: 'Mushroom Market',
    subtitle: 'E-COMMERCE WEBSITE',
    description: `Mushroom market is an e-commerce website that sells groceries and bundles in the form of editable recipes.
    Created using Node, PostgreSQL and Express for back-end and React and  Redux for the front-end, written in JavaScript.`,
    websiteLink: `,  https://graceshopper2020mushroom.herokuapp.com/home`,
    githubLink: `https://github.com/1911-GH-mushrooms/GraceShopper`
  },
  {
    name: 'Studdy Buddy',
    subtitle: 'REACT NATIVE MEETUP APP',
    description: `Study Buddy is a meetup app that connects students through groups.Created using Firebase services, Node and Express for back-end and React Native and Redux for the front-end, written in JavaScript.`,
    websiteLink: `https://github.com/Stackathon-Studdy-Buddy/Study-Buddy`,
    githubLink: `https://github.com/Stackathon-Studdy-Buddy/Study-Buddy`
  },
  {
    name: 'Harmonious',
    subtitle: 'PROGRESSIVE WEB APP',
    description: `Harmonious is a progressive web app that streamlines the booking process between an artist and a booker.
    Created using PostgreSQL, Express and Firebase services in JavaScript for back-end and React, Ionic framework and Redux in Typescript for the front-end.`,
    websiteLink: `,  https://harmonious-capstone.herokuapp.com/home`,
    githubLink: `https://github.com/campstone-lead/Capstone`
  }
]
class AllWorks extends Component {

  componentDidMount() {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none'
  }
  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* <div className='projectsImg'> */}

        <div className='imgwrapper'>
          {/* <img src='projects.jpg' className='img-responsive' alt='img' /> */}
          &nbsp;
        </div>
        {/* <div className='mainWrapper'>
          <h2 align='center' style={{ marginBottom: '25px', textAlign: 'center', whiteSpace: 'pre-wrap', fontFamily: 'proxima-nova' }}>These are some of my projects</h2>
        </div> */}
        <div className='mainWrapper'>
          <div>
            <h1 align='center' style={{ marginBottom: '25px', textAlign: 'center', whiteSpace: 'pre-wrap', fontFamily: 'proxima-nova' }}>These are some of my projects</h1>
          </div>
          <div className='imgwrapper1'>
            {
              hardcodedData.map((elemnet, index) => {
                return <OneWork key={index} data={elemnet} />
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default AllWorks;
