class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;
    this.token_url = `/d9-restaurant/session/token`;
  }

  async getSessionToken(){
    const response_data = await fetch(`${this.token_url}`,{
      method: 'GET',
      withCredentials: true // required to send auth cookie
    })
    const response = await response_data;
    return  console.log("SESSION TOKEN",response.ok);
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
    body: formData
  }).then(res => {    
    console.log("DATA FORM DATA",res.text);
  })
  .then(err=>console.log("Error Message",err))

})