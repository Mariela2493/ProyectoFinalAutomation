const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');
const CheckOutPage = require('../pageobjects/checkout.page');


describe('Checkout Page', () => {
    beforeAll(async function(){
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');
    });


    it('Display Checkout', async () => { 
     
    await CartPage.goToCartPage();  
    await  CheckOutPage.goToCheckout()
    await expect (CheckOutPage.tittle).toHaveTextContaining('ADDRESSES');
        
    });

    

}); 