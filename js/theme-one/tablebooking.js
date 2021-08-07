class TableBooking{

  constructor(){    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;

    this.singleton = null  // a singleton instance of axios that the default init function returns

    console.log("singlton?",this.singleton);
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


  async handlesubmit(e){

    e.preventDefault()
    
    var node = {
      type: [{
        target_id: 'table-booking',
        target_type: 'node_type',
      }],
      name: [{
        value: "Rajju D Bajra",
      }],
      message: [{
        value: "This is test message from... axios",
        format: 'plain_text',
      }],
    };

    try{
      const axios = await this.getCsrfToken() // wait for an initialized axios object
      const response = await axios.post( this.url, node) // wait for the POST AJAX request to complete
      console.log('Node created: ', response)
      emitter.emit('NODE_UPDATED')
    }catch(e){
      console.log("Error",e)
    }
    const handleChange = (e, propName) => {
      data[propName] = e.target.value
    }
  }




}


const tablebooking = new TableBooking;
//console.log("GET Session token",tablebooking.getCsrfToken());

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', tablebooking.handlesubmit)