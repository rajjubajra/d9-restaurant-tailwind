class MainMenu{

  constructor(){
    this.main_menu_url = `/d9-restaurant/jsonapi/menu_items/main`;

  }


  async getMainMenu(){
    const response_data = await fetch(`${this.main_menu_url}`,{
      method: 'GET',
      headers:{
        Accept: {
          Accept: 'application/vnd.api+json'
        }
      }
    })
    const response = await response_data.json();
    return response;
  }

}



/** UI */

const mainmenu = new MainMenu;

mainmenu.getMainMenu()
.then(data => {

  console.log("menu data", data);

  
  let menuItem = '';

  data.data.map(item=>{

      const {attributes:{title, url}} = item;

      /** Add 'theme-one' path withing the url */
      //regex '/', for url to array
      const re = /[/]/g;
      let arr = url.split(re);
      //add "theme-one" one array value 2
      arr.splice(2,0,"theme-one");
      // array to string back to url with theme-one path added
      let newurl = arr.toString().replace(/[,]/g,'/');
      //console.log("arr",arr, "newurl", newurl);

      menuItem += `<div class="grid gap-2 md:flex font-thin text-sm">
        <a class="px-3 py-2" href="${newurl}">${title}</a>
      </li>`;
  });

  document.getElementById('main-menu').innerHTML = `
  <div class="flex bg-gray-900 text-gray-100">
  <ul class="flex">${menuItem}</ul>
  </div>
  `;

})

