
const CreatePage = require('../pageobjects/createuser.page');



describe(' Create Account ', () => {
    it('should navigate to Create Account page', async () => { 
        await CreatePage.open();
        await CreatePage.setEmailNewUser('sanchez@marie1.com');    
        await CreatePage.fillForm ('Maria', 'Monge', 'password', 1, 1, 6,'company','Alabama','Alabama',1, 35242,50672232850, 'home');  
        await expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=my-account');
    
    });

  
});
 