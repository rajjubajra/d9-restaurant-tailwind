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
  console.log("ABOUT PAGE DATA",data);
})