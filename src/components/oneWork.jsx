import React from 'React'


export const OneWork = (props) => {
  const { name, subtitle, description, githubLink, websiteLink, imgSrc } = props.data;
  const index = props.index
  const duration = String((index + 1) * 1000)
  const delay = String((index + 1) * 100)
  console.log(duration, delay)
  console.log(props)
  return (
    <div className="card"
      data-aos="slide-up"
      data-aos-delay={delay}
      data-aos-duration={duration}

      style={{ width: "22rem", margin: '8px' }}
    >
      <img src={imgSrc} className="card-img-top" alt="..." ></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{description.slice(0, 50) + '...'}</p>
        <a href={githubLink} className="card-link">Github Link</a>
        <a href={websiteLink} className="card-link">Website Link</a>
      </div>
    </div>
  )
}
