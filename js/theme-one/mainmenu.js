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
    return response.data;
  }

}


const mainmenu = new MainMenu;

mainmenu.getMainMenu()
.then(data => {
  console.log("menu data", data);
  const theme = 'theme-one'
  let menuItem = '';
  data.map(item=>{
      const {attributes:{title, url}} = item;
      let comma = url.replace("/",",");
      let arr = comma.split(",");
      console.log("Array url: ",comma, arr);
      menuItem += `<li>
        <a class="p-1 m-1" href="${url}">${title}</a>
      </li>`;
  })

  document.getElementById('main-menu').innerHTML = `<ul class="flex">${menuItem}</ul>`;

})

