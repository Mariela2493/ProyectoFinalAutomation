const LoginPage = require('../pageobjects/login.page');
const WhishListPage = require('../pageobjects/whishlist.page');




describe('Whislist ', () => {  
   
    it('should allow to navigate to order history', async () => { 
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');       
        await WhishListPage.navigateToWhhishList();
        await expect (WhishListPage.pageTitle).toHaveTextContaining('MY WISHLISTS');

   
        
    });
    
    
});      