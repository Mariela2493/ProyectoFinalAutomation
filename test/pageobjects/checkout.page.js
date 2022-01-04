const Page = require('./page');

class CheckOutPage extends Page {
 
   
  get butnCheckOut() {
    return $('//*[@id="center_column"]/p[2]/a[1]');
 }

 get tittle(){
     return $('.page-heading');
 }
 get butnCheckOutStep1() {
    return $('/html/body/div/div[2]/div/div[3]/div/form/p/button');
 }
 get termsnConditions(){
     return $('.cgv');
 }
 get butnCheckOutStep2() {
    return $('/html/body/div/div[2]/div/div[3]/div/div/form/p/button');
 }
 get paymentMethod(){

    return $('.bankwire');
 }
 get butnConfirmOrder() {
    return $('//*[@id="cart_navigation"]/button');
 }
async goToCheckout() {
      
  await this.butnCheckOut.click();  
  await this.butnCheckOutStep1.click();  
  await this.termsnConditions.click();     
  await this.butnCheckOutStep2.click(); 
  await this.paymentMethod.click(); 
  await this.butnConfirmOrder.click();    
       
}

open() {
  return super.open();
}



}

module.exports = new CheckOutPage();
