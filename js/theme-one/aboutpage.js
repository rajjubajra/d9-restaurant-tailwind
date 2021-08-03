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



newData.map(item => {  
  const page = '';
  return page += `
  <div class="px-20 w-full"><h1 class="text-5xl">${item.title}</h1></div>
  <div class="flex flex-col md:flex-row">
    <div class="md:p-20 p-5 order-2 md:order-1">${item.body}</div>
    <div class="order-1 md:order-2 my-10 md:my-0">
      <img 
      class="object-cover h-32 w-10/12 m-auto lg:h-auto lg:w-full md:h-full"
      src="${item.image}"
      alt=""
      />
    </div>
  </div>`;
})

document.getElementById('about-page').innerHTML = page + 'TESt text';

})



