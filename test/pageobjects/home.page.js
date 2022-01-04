const Page = require('./page');

class HomePage extends Page {
 
    get butnHeaderLogo() {
        return $('#header_logo');
     }
      get butnAddToCart(){

        return $('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]');
      }

      get succesTitle(){
          return $('//*[@id="layer_cart"]/div[1]/div[1]/h2/text()');
      }
 
     async addToCart () {
        await this.butnHeaderLogo.click();        
        await this.butnAddToCart.scrollIntoView(); 
        await this.butnAddToCart.click();   
              
 }


open() {
   return super.open();
}


}

module.exports = new HomePage();