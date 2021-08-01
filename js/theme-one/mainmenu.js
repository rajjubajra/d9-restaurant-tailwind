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

const mainmenu = new MainMenu;

mainmenu.getMainMenu()
.then(data =>{
  console.log("menu data", data);
  document.getElementById('main-menu').innerHTML = 'This is main menu';
})

