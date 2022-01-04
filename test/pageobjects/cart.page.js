
const Page = require('./page');

class CartPage extends Page {
 
   
  get butnShoppingCart() {
    return $('.shopping_cart');
 }
 
 get tittleCart(){
 return $('#cart_title');

 }
 
async goToCartPage() {
      
  await this.butnShoppingCart.click();    
       
}

open() {
  return super.open();
}



}

module.exports = new CartPage();
