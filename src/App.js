import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Menu from './Menu';
import Content from './Content';
import Article from './Article';
import { Route } from 'react-router-dom';


class App extends Component {
  state = {
    menuState: "close",
    locations: [
      {
        title: "Central Park",
        id: "412d2800f964a520df0c1fe3",
        location: {
          lat: 40.78408342593807,
          lng: -73.96485328674316
        }
      },
      {
        title: "Metropolitan Museum of Art",
        id: "427c0500f964a52097211fe3",
        location: {
          lat: 40.77972902126812,
          lng: -73.96341562271118
        }
      },
      {
        title: "High Line",
        id: "40f1d480f964a5206a0a1fe3",
        location: {
          lat: 40.746825,
          lng: -74.005507
        }
      },
      {
        title: "Minskoff Theatre",
        id: "4ec0a81fb6341cd41f1ef402",
        location: {
          lat: 40.75749442223194,
          lng: -73.98568022741497
        }
      },
      {
        title: "Astor Wines & Spirits",
        id: "49f37c28f964a520a36a1fe3",
        location: {
          lat: 40.72801404034635,
          lng: -73.99303756896549
        }
      },
      {
        title: "Metropolitan Opera",
        id: "48e480eef964a52022521fe3",
        location: {
          lat: 40.7723786234569,
          lng: -73.9834305003838
        }
      }
    ],
    selectedLocation: NaN,
    filterQuery: "",
    articleState: "close"
  };

  // a kewyword was entered inside the filter input field
  updateFilterQuery = query => {
    this.setState({
      filterQuery: query
    });
  };

  // clears the filter query
  clearFilterQuery = () => {
    this.setState({
      filterQuery: ""
    });
  };

  // toggles between states of the side menu
  onMenuStateChange = () => {
    this.setState({
      menuState: this.state.menuState === "open" ? "close" : "open"
    });
  };

  // when the article modal is opened
  onArticleOpen = () => {
    this.setState({
      articleState: "open"
    });
  };

  // when the article modal is closed
  onArticleClose = () => {
    this.setState({
      articleState: "close"
    });
  };

  // when a location is selected
  onSelectionChange = selectedLocation => {
    if (this.state.selectedLocation !== selectedLocation) {
      this.setState({
        selectedLocation: selectedLocation
      });
    }
  };

  render() {
    let {
      menuState,
      locations,
      selectedLocation,
      filterQuery,
      articleState
    } = this.state;

    let showingLocations;

    if (filterQuery) {
      const match = new RegExp(escapeRegExp(filterQuery), "i");
      showingLocations = locations.filter(location =>
        match.test(location.title)
      );
    } else {
      showingLocations = locations;
    }

    return (
      <div className="app">
        {/* this component will store the side menu */}
        <Menu
          menuState={menuState}
          locations={showingLocations}
          onSelectionChange={this.onSelectionChange}
          selectedLocation={selectedLocation}
          updateFilterQuery={this.updateFilterQuery}
          filterQuery={filterQuery}
        />
        {/* this component will store the map */}
        <Content
          menuState={menuState}
          locations={showingLocations}
          onMenuStateChange={this.onMenuStateChange}
          onSelectionChange={this.onSelectionChange}
          selectedLocation={selectedLocation}
          onArticleOpen={this.onArticleOpen}
        />
        {/* this component will store details about a selected location */}
        {articleState === "open" && (
          <Article
            onArticleClose={this.onArticleClose}
            articleState={articleState}
            selectedLocation={selectedLocation}
          />
        )}
      </div>
    );
  }
}

export default App;
