const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');


describe('Home', () => {  
    beforeAll(async function(){
        await LoginPage.open();
    });
        it('should allow to login an user', async () => { 
       
        await LoginPage.login('mariesafa3@hotmail.com','12345');
        await HomePage.addToCart(); 
        await expect(HomePage.succesTitle).toContain('Product successfully added to your shopping cart'); 
        
        
    });

});      


    


    


