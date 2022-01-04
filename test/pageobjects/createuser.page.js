
const Page = require('./page');

 class CreatePage extends Page {
  
    get butnSignIn() {
        return $('.login');
    }
    get inputNewemail(){
        return $('#email_create');
    }
    get butnSubmitCreate(){
        return $('#SubmitCreate');
    } 
    get genderCheckpoint(){
        return $('#id_gender2');
    }
    get inputName(){

        return $('#customer_firstname');
    }
    get inputLastName(){

        return $('#customer_lastname');
    }

    get inputpassword(){

        return $('#passwd');
    }

    get inputdays(){

        return $('#days');
    }    

    setDayValuebyIndex(day){
        return this.inputdays.selectByIndex(day);
    }
    get inputMonth(){

        return $('#months');
    }    

    setMonthValuebyIndex(month){
        return this.inputMonth.selectByIndex(month);
    }
    get inputMonth(){

        return $('#months');
    }    

    setMonthValuebyIndex(month){
        return this.inputMonth.selectByIndex(month);
    }

    get inputYear(){

        return $('#years');
    }    

    setYearValuebyIndex(year){
        return this.inputYear.selectByIndex(year);
    }
    get inputNameAddress(){
        return $('#firstname');
    }
    get inputLastNameAddress(){
        return $('#lastname');
    }

    get inputCompany(){
        return $('#company');
    }

    get inputAddress(){
        return $('#address1');
    }
    get inputCity(){
        return $('#city');
    }
    get inputState(){

        return $('#id_state');
    }    

    setStateValuebyIndex(state){
        return this.inputState.selectByIndex(state);
    }

    get inputZipCode(){

        return $('#postcode');
    }    

    get inputMobilePhone(){

        return $('#phone_mobile');
    }    

    get inputAddressAlias(){

        return $('#alias');
    }    

    get butnRegister() {
        return $('#submitAccount');
    }


  
async setEmailNewUser (email) {
        await this.butnSignIn.click();
        await this.inputNewemail.setValue(email);
        await this.butnSubmitCreate.click(); 
        
}

async fillForm (name, lastname, password, day, month, year,company,address,city, state, zipcode,phonenumber, alias) {
    await this.genderCheckpoint.click(); 
    await this.inputName.setValue(name);
    await this.inputLastName.setValue(lastname);
    await this.inputpassword.setValue(password);
    await this.setDayValuebyIndex(day);
    await this.setMonthValuebyIndex(month);
    await this.setYearValuebyIndex(year);
    await this.inputNameAddress.setValue(name);
    await this.inputLastNameAddress.setValue(lastname);
    await this.inputCompany.setValue(company);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await this.setStateValuebyIndex(state);
    await this.inputZipCode.setValue(zipcode);
    await this.inputMobilePhone.setValue(phonenumber);
    await this.inputAddressAlias.setValue(alias);
    await this.butnRegister.click(); 

}

open() {
    return super.open();
}


 }

module.exports = new CreatePage();
