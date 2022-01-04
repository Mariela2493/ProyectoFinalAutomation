const LoginPage = require('../pageobjects/login.page');




describe('My Login application', () => {  
   
    it('should allow to login an user', async () => { 
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');       
        await expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=my-account');

   
        
    });
    //it('should not allow to login an user', async () => { 

   // await LoginPage.open();
    //await LoginPage.login('mariesafa2@hotmail.com','12345');       
   // await expect(LoginPage.errorMsg.toBeDisplayed());
    
//});

   
    
});      
 