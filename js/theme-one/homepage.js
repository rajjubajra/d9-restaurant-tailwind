class HomePage{

  
  constructor(){

    this.homepage_url = `/d9-restaurant/jsonapi/node/home_page?include=field_home_block_1_image,field_home_block_2_image,field_home_block_3_col_1_image,field_home_block_3_col_2_image,field_home_block_3_col_3_image,field_home_block_4_image&fields[node--home_page]=title,field_home_block_1_text,field_home_block_2_text,field_home_block_3_col_1_text,field_home_block_3_col_2_text,field_home_block_3_col_3_text&
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

