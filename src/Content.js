import React, { Component } from "react";
import { Route } from "react-router-dom";
import Map from "./Map";

class Content extends Component {
  render() {
    const {
      menuState,
      locations,
      onMenuStateChange,
      onSelectionChange,
      selectedLocation,
      onArticleOpen
    } = this.props;

    return (
      <div className={`content ${menuState}`}>
      	{/* the header of the app*/}
        <div className="header">
          <button
            className="menu-icon"
            value="Close Menu"
            onClick={onMenuStateChange}
            aria-label="Menu"
          />
        </div>
    	{/* the component which stores the Google Map */}
        <Map
          locations={locations}
          onSelectionChange={onSelectionChange}
          selectedLocation={selectedLocation}
          onArticleOpen={onArticleOpen}
        />
      </div>
    );
  }
}

export default Content;
