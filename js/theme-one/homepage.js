class HomePage{

  
  constructor(){

    this.homepage_url = `/d9-restaurant/jsonapi/node/home_page?include=field_home_block_2_image,field_home_block_3_col_1_image,field_home_block_3_col_2_image,field_home_block_3_col_3_image,field_home_block_4_image&fields[node--home_page]=title,field_home_block_1_text,field_home_block_2_text,field_home_block_3_col_1_text,field_home_block_3_col_2_text,field_home_block_3_col_3_text&
fields[file--file]=uri,filesize`;

  }

  async getHomePage(){
    const response_data = await fetch(`${this.homepage_url}`,{
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
const homepage = new HomePage;

homepage.getHomePage()
.then(data =>{
  console.log("homepage data", data);
  console.log(data.data[0]);
  /** main title */
  document.getElementById('main-title').innerHTML = `${data.data[0].attributes.field_home_block_1_text.value}`;
  /** BLOCK TWO */
  document.getElementById('block-two').innerHTML = `${data.data[0].attributes.field_home_block_2_text.value}`

  /** BLOCK 3 COL 1 */
  document.getElementById('block-3-col-1').innerHTML = `${data.data[0].attributes.feild_home_block_3_col_1_text}`
  /** BLOCK 3 COL 2 */
  document.getElementById('block-3-col-2').innerHTML = `${data.data[0].attributes.feild_home_block_3_col_2_text}`
  /** BLOCK 3 COL 3 */
  document.getElementById('block-3-col-3').innerHTML = `${data.data[0].attributes.feild_home_block_3_col_3_text}`
  
})