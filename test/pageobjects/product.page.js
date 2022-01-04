const Page = require('./page');

class ProductsPage extends Page {
 
   get butnHeaderLogo() {
      return $('#header_logo');
   }
   
   get productPage() {
      return $('//*[@id="homefeatured"]/li[1]/div/div[1]/div');
   }

   get writeReviwbutton(){

      return $('.open-comment-form');
   }
   
   get reviewtittle(){
      return $('#comment_title');
   }
   get reviewContent(){

      return $('#content');
   }

get butnEnviarReview() {
   return $('#submitNewMessage');
}

get confirmationMessageTitle(){
   return $('//*[@id="product"]/div[2]/div/div/div/h2');
}

get butnAddToCart(){
   return $('#add_to_cart');
}
get succesTitle(){
   return $('//*[@id="layer_cart"]/div[1]/div[1]/h2/text()');
}
get closeModal(){
   return $('.cross');
}



async goToProdcutsPage () {
       await this.butnHeaderLogo.click();   
       await this.productPage.click();    
       
}

async AddReview (title, content) {
   await this.writeReviwbutton.click(); 
   await this.reviewtittle.SetValue(title);   
   await this.reviewContent.SetValue(content); 
   await this.butnEnviarReview.click();   
   
}
async addProduct() {
   await this.butnHeaderLogo.click();   
   await this.productPage.click();    
   await this.butnAddToCart.click();   
}




open() {
   return super.open();
}


}

module.exports = new ProductsPage();
