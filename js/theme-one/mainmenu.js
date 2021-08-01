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
  data.map(item=>{
      const {attributes:{title, url}} = item;
      document.getElementById('main-menu').innerHTML += `<li><a href="${theme}/${url}">${title}</a></li>`;
  })
  
})

