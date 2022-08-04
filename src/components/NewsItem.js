import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{source}</span>
          
              <img src={!imageUrl ? "https://cdn.cnn.com/cnnnext/dam/assets/111006055359-apple-logo-new-york-horizontal-large-gallery.jpg": imageUrl } className="card-img-top"  alt="..."  />
             
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">{author ? author : "Unknow"}<br />{new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
        </div>
        )
}
export default NewsItem