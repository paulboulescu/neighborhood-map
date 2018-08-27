const api = "https://api.foursquare.com/v2/venues/";
const clientId = "F4MDEI343SAPNH552PY0YAOVCTKAZ00FBKTTSLD1FI2ZP4VD";
const clientSecret = "KQJ3ZQVR1VM1R2EUJ225ZQWMLEVWWAZDTO4GLXIOIMKAMLHP";

// requests data for a place ID, transforms the returned into JSON format
export const getPlace = placeId =>
  fetch(`${api}${placeId}?client_id=${clientId}&client_secret=${clientSecret}&v=20180323`)
  .then(response => response.json())
  .then(response => {
  	if(response.meta.code === 200){
  		return response
  	} else {
  		return {type: 'error', errorMessage: "We're sorry, details couldn't be loaded."}
  	}
  })
  .catch(error =>  {
  	return {type: 'error', errorMessage: "We're sorry, details couldn't be loaded."}
  });
