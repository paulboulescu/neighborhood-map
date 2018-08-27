# Neighborhood App

## About
This is the 8th Project created under Udacity's Front-End Web Developer Nanodegree. The task was to create a _Neighborhood Map App_.

## First Run
1. Clone the repository `$ git clone https://github.com/paulboulescu/neighborhood-map.git`
2. Install the project's dependencies `$ npm install`
3. Create the production build `$ npm run build`
4. Change the working directory to the production build `$ cd build`
3. Start the server `$ npm start`
4. Open the App using a browser at `/http://localhost:3000`

## Description
This app is a neighborhood guide app, offering the user tools for selecting places from a predefined database and finding more information about them (i.e. Address, Phone Number).

## Features
* _List_ - allows the user to search and select places inside a list of entries
* _Map_ - allows the user to search and select places on a Google Map
* _Filter_ - allows the user to filter places by keywords
* _Details_ - allows the user to find more about the selected place


## Internal Dependencies

* _package.json_ - npm package manager file
* _public/favicon.ico_ - React icon
* _public/index.html_ - public index.html
* _src/icons/*_ - list of helpful icons
* _src/images/powered-by-foursquare-blue.png_ - Foursquare attribution image
* _src/App.css_ - styles for the app
* _src/App.js_ - this is the root of the app and will compose with other components
* _src/App.test.js_ - used for testing
* _src/Article.js_ - this components is used to display the modal that appears when a place is selected with 'Read More'
* _src/Content.js_ - this compoenent is used to display the header and a placeholder for the Google Map
* _src/index.css_ - global styles
* _src/index.js_ - it is used for DOM rendering
* _src/Map.js_ - this component is used to display the Google Map
* _src/Menu.js_ - this component is used to display the list of locations in a side menu
* _src/PlacesAPI.js_ - JavaScript API used to make Foursquare API requests
* _src/registerServiceWorker.js_ - ServiceWorker functions
* _.gitignore_ - list of files to be ignored by Git
* _package.json_ - React file
* _package-lock.json_ - React file
* _README.md_ - this current document

## External Dependencies
* [React](https://reactjs.org/)
* [npm](https://www.npmjs.com/)
* [Google Maps API](https://cloud.google.com/maps-platform/)
* [Foursquare](https://developer.foursquare.com/)


## Known Issues
There aren't any known issues.

## Use Example
The project can be used as it is, for learning purposes, or to develop other similar projects, based on its functionalities. 

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). More information on how to perform common tasks are available [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
