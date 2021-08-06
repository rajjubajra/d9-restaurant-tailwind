class TableBooking{

  constructor(){
    
    this.url = `/d9-restaurant/jsonapi/webform_submission/table_booking`;

  }







}


const tablebooking = new TableBooking;



fetch('/d9-restaurant/session/token')
  .then(response => console.log(response.json()))
  .then(data => console.log(data));