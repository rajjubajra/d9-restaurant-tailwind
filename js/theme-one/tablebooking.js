class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }







}


const tablebooking = new TableBooking;


const newNode = {
  _links: {
    type: {
      href: 'http://example.com/rest/type/node/article'
    }
  },
  type: {
    target_id: 'article'
  },
  title: {
    value: 'Example node title'
  }
}; 


const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(this);
  
  fetch(`/d9-restaurant/jsonapi/node/artilce`,{
    method: 'POST',
    headers:{
      Accept: 'application/vnd.api+json'
    },
    data: JSON.stringify(newNode)
  }).then(res => {    
    console.log("POSTED DATA FORM DATA",res.json);
  })

})