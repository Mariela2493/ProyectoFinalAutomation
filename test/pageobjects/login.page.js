const Page = require('./page');

class LoginPage extends Page {
 
   get butnSignIn() {
      return $('.login');
   }
 
   get inputEmail(){
    return $('#email');
  }
  get inputPassword(){
    return $('#passwd');
  }

  get butnSignInSubmit() {
    return $('#SubmitLogin');
 } 
 
 get errorMsg(){
    return $('.alert-danger');
 }
 get butnSignOut() {
   return $('.logout');
}  

async singOut() {
    await this.butnSignOut.click();
   
}


 
async login (email, password) {
       await this.butnSignIn.click();
       await this.inputEmail.setValue(email);
       await this.inputPassword.setValue(password);
       await this.butnSignInSubmit.click();
}



open() {
   return super.open();
}


}

module.exports = new LoginPage();