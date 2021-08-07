class TableBooking{

  constructor(){    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;
  }



}


const tablebooking = new TableBooking;
//console.log("GET Session token",tablebooking.getCsrfToken());

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  
  fetch(`/d9-restaurant/webform_rest/submit`,{
    method: 'POST',
    headers:{
      Accept: 'application/vnd.api+json',
      'Content-Type':'application/vnd.api+json',
    },
    body: {
      "webform_id": "table_booking",
      "name": "Rajju",
      "email": "myemail@mydomain.com.au",
      "message": "This webform rest post message..."
    }
    
  }).then(res => {    
    console.log("DATA FORM DATA",res.json);
  })
  .then(err=>console.log("Error Message",err))

})