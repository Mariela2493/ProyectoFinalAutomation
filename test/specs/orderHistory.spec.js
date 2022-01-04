const LoginPage = require('../pageobjects/login.page');
const HistoryPage = require('../pageobjects/orderHistory.page');




describe('Order History ', () => {  
   
    it('should allow to navigate to order history', async () => { 
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');       
        await HistoryPage.navigateToOrderHistory();
        await expect (HistoryPage.pageTitle).toHaveTextContaining('ORDER HISTORY');

   
        
    });
    
    
});      