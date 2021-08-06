class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }







}


const tablebooking = new TableBooking;




const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  
  fetch(`/d9-restaurant/jsonapi/webform_submission/table_booking`,{
    method: 'POST',
    headers:{
      'Content-Type':'application/vnd.api+json',
      'X-CSRF-Token': `/d9-restaurant/session/token`
    },
    body: formData
  }).then(res => {    
    console.log("DATA FORM DATA",res.json);
  })

})