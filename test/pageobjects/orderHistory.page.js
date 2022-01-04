const Page = require('./page');

class HistoryPage extends Page {
 
   get butnOrderHistory() {
      return $('//*[@id="center_column"]/div/div[1]/ul/li[1]/a');
   }
  get pageTitle(){
        return $('//*[@id="center_column"]/h1');

  }
  

 
async navigateToOrderHistory () {
       await this.butnOrderHistory.click();
       
       
}



open() {
   return super.open();
}


}

module.exports = new HistoryPage();