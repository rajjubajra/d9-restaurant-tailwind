class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;
  }

  async getSessionToken(){
    await fetch(`${this.token_url}`,{
      method: 'GET',
      withCredentials: true // required to send auth cookie
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

}


const tablebooking = new TableBooking;
console.log(tablebooking.getSessionToken());

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