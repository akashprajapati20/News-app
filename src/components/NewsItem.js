import React, { Component } from 'react'



export default class NewsItem extends Component {

  render() {
    let {title, description ,imageUrl ,newsUrl,author,date,source} = this.props ;
    return (
      <div className="cointainer">
        <div className="card" style={{width: "18rem"}}>
        <span style={{left:"85%",zIndex:1}} className="position-absolute top-0  translate-middle badge rounded-pill  bg-danger">
    {source}</span>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
  </div>
</div>
</div>
    )
  }
}
