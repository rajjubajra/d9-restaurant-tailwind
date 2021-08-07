class TableBooking{

  constructor(){    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;

    this.singleton = null  // a singleton instance of axios that the default init function returns    
  }

  // note the 'async' keyword, it allows us to call 'await' later
  async getCsrfToken(){

  if(!this.singleton) {
    const tokenURL = this.token_url;
    try {
      const response = await axios.get(tokenURL, {
        withCredentials: true // required to send auth cookie
      })
      const csrf_token = response.data
      singleton = axios.create({
        baseURL: config.drupal_url, // every request is relative to this URL
        withCredentials: true, // include auth cookie in every request
        headers: { 'X-CSRF-Token': csrf_token }, // include this header in every request
        params: { _format: 'json' }, // add these query params to every request
      })
      console.log('Created new axios instance', singleton)
    } catch(error) {
      console.error(error)
    }
  }
    return this.singleton
  }



}


const tablebooking = new TableBooking;
//console.log("GET Session token",tablebooking.getCsrfToken());

const bookingForm = document.getElementById("booking-form");
bookingForm.addEventListener('submit', handlesubmit)

async function handlesubmit(e){
  e.preventDefault();
  var node = {
    "name": "Rajju D Bajra",
    
  };

  try{
    //const axios = await tablebooking.getCsrfToken() // wait for an initialized axios object
    const response = await axios.post( '/d9-restaurant/session/token', node) // wait for the POST AJAX request to complete
    console.log('Node created: ', response)
  }catch(e){
    console.log("Error",e)
  }

}

