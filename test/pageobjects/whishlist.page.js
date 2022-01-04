const Page = require('./page');

class WhishListPage extends Page {
 
   get butnWhishList() {
      return $('//*[@id="center_column"]/div/div[2]/ul/li/a');
   }
  get pageTitle(){
        return $('//*[@id="mywishlist"]/h1');

  }
  

 
async navigateToWhhishList () {
       await this.butnWhishList.click();
       
       
}



open() {
   return super.open();
}


}

module.exports = new WhishListPage();