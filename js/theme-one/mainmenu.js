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
.then(data => {
  console.log("menu data", data);
  const theme = 'theme-one'
  let menuItem = '';
  data.data.map(item=>{
      const {attributes:{title, url}} = item;
      const re = /[/]/g;
      let arr = url.split(re);
      arr.splice(2,0,"theme-one");
      let newurl = arr.toString().replace(/[,]/g,'/');
      console.log("arr",arr, "newurl", newurl);
      menuItem += `<li>
        <a class="p-1 m-1" href="${newurl}">${title}</a>
      </li>`;
  })

  document.getElementById('main-menu').innerHTML = `<ul class="flex">${menuItem}</ul>`;

})

