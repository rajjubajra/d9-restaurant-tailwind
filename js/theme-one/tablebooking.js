class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }




}


const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  console.log("FORM DATA",formData);
})