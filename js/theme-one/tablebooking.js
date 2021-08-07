class TableBooking{

  constructor(){    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;
  }


  getCsrfToken(callback) {
    fetch(this.token_url)
    .done(function (data) {
    var csrfToken = data;
    callback(csrfToken);
    })
  }



}


const tablebooking = new TableBooking;
console.log("GET Session token",tablebooking.getCsrfToken());

const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  
  fetch(`/d9-restaurant/jsonapi/webform_submission/table_booking`,{
    method: 'POST',
    headers:{
      Accept: 'application/vnd.api+json',
      'Content-Type':'application/vnd.api+json',
      'X-CSRF-Token': tablebooking.getSessionToken()
    },
    body: JSON.stringify(formData)
  }).then(res => {    
    console.log("DATA FORM DATA",res.json);
  })
  .then(err=>console.log("Error Message",err))

})