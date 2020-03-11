import React from 'React'


export const OneWork = (props) => {
  const { name, subtitle, description, githubLink, websiteLink } = props.data;
  console.log(props)
  return (
    <div className="card" style={{ width: "28rem", margin: '8px' }} >
      <img src="projects.jpg" className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{description}</p>
        <a href={githubLink} className="card-link">Github Link</a>
        <a href={websiteLink} className="card-link">Website Link</a>
      </div>
    </div>
  )
}
