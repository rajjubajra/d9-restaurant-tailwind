class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }


  getCsrfToken(){
    
    fetch('/d9-restaurant/session/token',
    {
      method:'GET', 
      headers: {
      Appcept: 'application/vnd.api+json'
      }
    })
    .then(res => {
      return console.log(res)}
      )
    
  }





}


const tablebooking = new TableBooking;

console.log(tablebooking.getCsrfToken());


const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  
  fetch(`/d9-restaurant/jsonapi/webform_submission/table_booking`,{
    method: 'POST',
    headers:{
      'Content-Type':'application/vnd.api+json',
      'X-CSRF-Token': csrfToken
    },
    body: formData
  }).then(res => {    
    console.log("DATA FORM DATA",res.json);
  })

})