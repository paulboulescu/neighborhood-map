import React, { Component } from "react";
import * as PlacesAPI from "./PlacesAPI";

class Article extends Component {
  state = {
    name: "",
    contact: {},
    location: {},
    canonicalUrl: ""
  };

  componentDidMount() {
    document.getElementsByClassName("close-article-icon")[0].focus();
    const { onArticleClose, articleState, selectedLocation } = this.props;
    PlacesAPI.getPlace(selectedLocation).then(data =>
      this.setState({
        name: data.response.venue.name,
        contact: data.response.venue.contact,
        location: data.response.venue.location,
        canonicalUrl: data.response.venue.canonicalUrl
      })
    );
  }

  render() {
    const { onArticleClose, articleState, selectedLocation } = this.props;
    let { name, contact, location, canonicalUrl } = this.state;
    
    return (
      <div className="article-container">
        <div className={`article ${articleState}`}>
          {/* closing button, used to return to main screen */}
          <button
            className="close-article-icon"
            value="Close Menu"
            onClick={onArticleClose}
            aria-label="Back"
          />
          
          {name.length === 0 && (
            <div className="article-content article-result-message">Loading...</div>
          )}
          
          {/* details about the selected location */}
          {name.length > 0 && (
          <div className="article-content">
            <h1>{name}</h1>
            <ul className="article-list">
              <li>
                <span className="article-label">Phone: </span>
                {contact["formattedPhone"]}
              </li>
              <li>
                <span className="article-label">Adress: </span>
                {location["address"]}
              </li>
              <li>
                <span className="article-label">City: </span>
                {location["city"]}
              </li>
              <li>
                <span className="article-label">Country: </span>
                {location["country"]}
              </li>
            </ul>
            <div className="article-attribution">
              Powered by{" "}
              <a href={canonicalUrl} aria-label="Read more on Foursquare">
                Foursquare
              </a>
            </div>
          </div>)}
        </div>
      </div>
    );
  }
}

export default Article;
