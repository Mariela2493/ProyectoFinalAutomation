const LoginPage = require('../pageobjects/login.page');
const EditPage = require('../pageobjects/edit.page');


describe('Edit Page', () => {  
    beforeAll(async function(){
        await LoginPage.open();
    });
        it('should allow to login an user', async () => { 
       
        await LoginPage.login('mariesafa3@hotmail.com','12345');       
        await expect(browser).toHaveUrl('http://automationpractice.com/index.php?controller=my-account');
        
    });

    it('should allow to edit a user', async () => { 
               
        await EditPage.goToEditPage('mariesafa4@hotmail.com', '12345');
        await expect(EditPage.messageSuccess.toBeDisplayed());
        
    });

    
});      


    


    


