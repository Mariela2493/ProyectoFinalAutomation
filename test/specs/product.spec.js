const LoginPage = require('../pageobjects/login.page');
const ProductsPage = require('../pageobjects/product.page');


describe('Products Page', () => {
    beforeAll(async function(){
        await LoginPage.open();
        await LoginPage.login('mariesafa3@hotmail.com','12345');
    });


    it('should display a product page', async () => { 
     
    await ProductsPage.goToProdcutsPage();  
    await expect(browser).toHaveUrl('http://automationpractice.com/index.php?id_product=1&controller=product');
        
    });

    it('Add product into cart', async () => { 
     
        await ProductsPage.goToProdcutsPage();  
        await ProductsPage.addProduct();
        await expect((ProductsPage.succesTitle).toContain('Product successfully added to your shopping cart'));        
    
            
        });

        
    it('proceed to check out ', async () => { 
     
        await ProductsPage.goToProdcutsPage();  
        await ProductsPage.addProduct();
        await expect((ProductsPage.succesTitle).toContain('Product successfully added to your shopping cart'));
        
    
            
        });

  //  it('should display a product page', async () => { 
     
     //   await ProductsPage.AddReview('Review Comment', 'Test Review');  
     //   await expect(ProductsPage.confirmationMessageTitle).toContain('New Message');
            
      //  });
    

}); 