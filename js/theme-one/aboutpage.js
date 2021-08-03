class AboutPage{
  constructor(){
    this.url = `/d9-restaurant/jsonapi/node/about_page?include=field_about_page_image`;

  }


  async getAboutPage(){
    const response_data = await fetch(this.url,{
      method: 'GET',
      headers:{
        Accept: {
          Accept: 'application/vnd.api+json'
        }
      }
    })

    const respones = await response_data.json();
    return respones;
  }

}

/** UI */
const aboutpage = new AboutPage;



aboutpage.getAboutPage()
.then( data => {

  /** new array with included json data */
  let newData = [];


  data.data.map(item=>{
    const {attributes:{title,field_about_page_text:{value}}} = item;
    data.included.map(inc =>{
      const {attributes:{uri:{url}}} = inc
      newData.push({title: title, body: value, image: url})
    })  
  })

//  console.log("ABOUT PAGE DATA",data);
/** To DOM */
console.log("new data",newData);


})



