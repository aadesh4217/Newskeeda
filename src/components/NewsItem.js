import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { src, title, description, url } = this.props;
    return (
      <div className="my-3">
        <div className="card my-3" style={{ width: "18rem" , height: "400px" }}>
          <img src={src} className="card-img-top" alt="..." style={{ height: "200px" }}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              target="_blank"
              href={url}
              className="btn btn-primary"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
