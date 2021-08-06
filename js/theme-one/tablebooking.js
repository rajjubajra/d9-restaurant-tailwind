class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }


  getCsrfToken(){
    this.crfurl = '/d9-restaurant/session/token';
    this.token = fetch(this.crfurl,{method:'GET'})
                  .then(res=>{res})
    return this.token;
  }





}


const tablebooking = new TableBooking;

console.log(tablebooking.getCsrfToken);


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