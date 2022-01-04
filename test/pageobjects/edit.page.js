
const Page = require('./page');

class EditPage extends Page {
 
   
  get butnSignInSubmit() {
    return $('#SubmitLogin');
 }
 get butnMyPersonalInformation(){
    return $('//*[@id="center_column"]/div/div[1]/ul/li[4]/a');
 }
get inputEmail(){
   return $('#email');
}

get inputPassword(){
   return $('#old_passwd');
} 
 get messageSuccess(){
    return $('.alert-success');
 }   
 
async goToEditPage (email, password) {
      await this.butnMyPersonalInformation.click();
      await this.inputEmail.setValue(email);
      await this.inputPassword.setValue(password);
       
}




}

module.exports = new EditPage();
