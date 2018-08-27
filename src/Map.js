import React, { Component } from "react";

class Map extends Component {
  state = {
    map: "",
    markers: [],
    infoWindow: "",
    bounds: ""
  };

  componentDidMount() {
    window.initMap = this.initMap
    window.gm_authFailure = this.gm_authFailure
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAzHQs52tXl-Nt0ocNgxwTOFjAG1qLSidI";
    script.async = true;
    script.defer = true;
    // in case of script load error
    script.onerror = () => this.props.onMapError("We're sorry, the map couldn't be loaded.");
    script.onload = () => this.initMap()
    const map = document.getElementById("map")
    map.appendChild(script);

  }

  gm_authFailure = () => { 

    // listening for authentication errors
    this.props.onMapError("We're sorry, there seems to be a map authentication error.");

  };

  initMap = () => {

    const { locations, onSelectionChange, selectedLocation, onArticleOpen, onMapError } = this.props;

    onMapError("");

    let infoWindow = new window.google.maps.InfoWindow();

    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.7413549, lng: -73.9980244 },
      zoom: 15,
      mapTypeId: "roadmap"
    });

    let bounds = new window.google.maps.LatLngBounds();
    let markers = this.createMarkers(map);

    // makes sure all the markers are visible
    markers.forEach(marker => bounds.extend(marker.position));
    map.fitBounds(bounds);

    // stores the map and similar components inside the 'state'
    this.setState({
      map: map,
      markers: markers,
      infoWindow: infoWindow,
      bounds: bounds
    });
  }

  createMarkers = map => {
    const { locations, onSelectionChange, selectedLocation, onArticleOpen, onMapError } = this.props;
    let markers = [];

    for (var i = 0; i < locations.length; i++) {
      let marker = new window.google.maps.Marker({
        position: locations[i].location,
        map: map,
        title: locations[i].title,
        animation: window.google.maps.Animation.DROP,
        id: locations[i].id
      });

      marker.addListener("click", () => {
        onSelectionChange(marker.id);
        this.openInfoWindow(marker);
      });

      markers.push(marker);
    }

    return markers;
  };

  filterMarkers = () => {
    const { locations, onSelectionChange, selectedLocation, onArticleOpen, onMapError } = this.props;
    let { map, markers, infoWindow, bounds } = this.state;

	// selects the markers that should be showed
    markers
      .filter(marker => {
        let keep = false;
        locations.forEach(location => {
          if (location.id === marker.id) {
            keep = true;
          }
        });
        return keep;
      })
      .forEach(marker => {
      	// showes them
        marker.setMap(map);
        marker.setAnimation(null);
        if (selectedLocation === marker.id) {
        	// if one of them should be selected, it displays an info window
          	this.openInfoWindow(marker);
          	marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      });
	
	// selects the markers that should be hidden
    markers
      .filter(marker => {
        let keep = true;
        locations.forEach(location => {
          if (location.id === marker.id) {
            keep = false;
          }
        });
        return keep;
      })
      .forEach(marker => {
      	// hides them
        marker.setMap(null);
        if (selectedLocation === marker.id) {
        	// if an info window is opend it closes it
          	infoWindow.close();
        }
      });
  };

  // opens info window for a marker
  openInfoWindow = marker => {
    let { map, markers, infoWindow, bounds } = this.state;

    const { locations, onSelectionChange, selectedLocation, onArticleOpen, onMapError } = this.props;

    // creates the DOM elements displayed inside the info window
    let infoWindowContent = document.createElement("div");
    infoWindowContent.setAttribute("class", "info-window");
    infoWindowContent.innerHTML = marker.title;
    let infoWindowReadMore = document.createElement("button");
    infoWindowReadMore.innerHTML = "Read More";
    infoWindowReadMore.setAttribute("class", "read-more");
    infoWindowReadMore.addEventListener("click", onArticleOpen);
    infoWindowContent.appendChild(infoWindowReadMore);
    infoWindowReadMore.focus();
    infoWindow.setContent(infoWindowContent);
    infoWindow.open(map, marker);

    // when closing the info winow, the location selection is removed
    infoWindow.addListener("closeclick", function() {
      infoWindow.close();
      onSelectionChange(NaN);
    });
  };

  render() {

    const {
      locations,
      onSelectionChange,
      selectedLocation,
      onArticleOpen,
      onMapError
    } = this.props;

    this.filterMarkers();

    return <div id="map" role="application" />;
  }
}

export default Map;
