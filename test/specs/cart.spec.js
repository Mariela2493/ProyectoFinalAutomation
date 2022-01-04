const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');


describe('Cart Page', () => {
    beforeAll(async function(){
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');
    });


    it('Display Cart', async () => { 
     
    await CartPage.goToCartPage();  
    await expect (CartPage.tittleCart).toHaveTextContaining('SHOPPING-CART SUMMARY');
        
    });

    

}); 