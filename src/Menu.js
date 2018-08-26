import React, { Component } from "react";

class Menu extends Component {
  render() {
    const {
      menuState,
      locations,
      onSelectionChange,
      selectedLocation,
      updateFilterQuery,
      filterQuery
    } = this.props;

    return (
      <div className={`menu ${menuState}`}>
        <h1 className="title" tabIndex="-1">
          Neighborhood App
        </h1>

    {/* input field used to filter locations */}
        <div className="search-location">
          <input
            type="text"
            placeholder="Search location"
            value={filterQuery}
            tabIndex={menuState === "close" && "-1"}
            onChange={event => updateFilterQuery(event.target.value)}
          />
        </div>
		
		{/* when no location is available after filtering */}
        {locations.length === 0 && (
          <div className="filter-result-message">No results found</div>
        )}

		{/* builds the list of locations */}
        <div className="locations-list">
          {locations.map(location => (
            <button
              key={location.title}
              tabIndex={menuState === "close" && "-1"}
              className={`location-item ${selectedLocation === location.id &&
                "selected"}`}
              onClick={() => onSelectionChange(location.id)}
            >
              {location.title}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
