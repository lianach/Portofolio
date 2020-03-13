import React from 'React'
import { Link } from 'react-router-dom'

export const OneWork = (props) => {
  const { name, subtitle, description, githubLink, websiteLink, imgSrc, link } = props.data;
  const index = props.index
  const duration = String((index + 1) * 500)
  const delay = String((index + 1) * 50)
  return (
    <div className="card"
      data-aos="slide-up"
      data-aos-delay={delay}
      data-aos-duration={duration}

      style={{ width: "22rem", margin: '8px' }}
    >
      <img src={imgSrc} className="card-img-top" alt="..." ></img>
      <div className="card-body">
        <h5 className="card-title"><a href={'/' + link}>{name}</a></h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{description.split('.')[0] + '.'}</p>
        <a href={githubLink} className="card-link">Github Link</a>
        <a href={websiteLink} className="card-link">Website Link</a>
      </div>
    </div>
  )
}
