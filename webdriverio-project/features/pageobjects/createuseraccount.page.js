class CreateUserAccount {
   get txtFirstName() {
      return $("#customer_firstname");
   }

   get txtLastName() {
      return $("#customer_lastname");
   }

   get txtPassword() {
      return $("#passwd");
   }

   get txtAddressFirstName() {
      return $("[name='firstname']");
   }

   get txtAddressLastName() {
      return $("[name='lastname']");
   }

   get txtAddress() {
      return $("[name='address1']");
   }

   get txtCity() {
      return $("#city");
   }

   get drpDwnStateElement() {
      return $("$uniform-id_state");
   }

   get drpDwnState() {
      return $("#id_state");
   }

   get txtPostalCode() {
      return $("#postcode");
   }
   get drpDwnCountry() {
      return $("#id_country");
   }

   get txtMobilePhone() {
      return $("#phone_mobile");
   }

   get txtAddressAlias() {
      return $("#alias");
   }

   get btnSubmit() {
      return $("[name='submitAccount']");
   }

   get radioGender() {
      return $("#uniform-id_gender2");
   }
   registerUser = async (firstName, lastName, password, address, city) => {
      await this.radioGender.waitForExist({ timeout: 15000 });
      await this.txtFirstName.setValue(firstName);
      await this.txtLastName.setValue(lastName);
      await this.txtPassword.setValue(password);
      await this.txtAddress.setValue(address);
      await this.txtAddressFirstName.setValue(firstName);
      await this.txtAddressLastName.setValue(lastName);
      await this.txtCity.setValue(city);
      await browser.pause(5000);
      await $("//option[contains(text(),'Alaska')]").click();
      await browser.pause(5000);
      await this.txtPostalCode.setValue("00000");
      await $("//option[contains(text(),'United States')]").click();
      await this.txtMobilePhone.setValue("9321732178");
      await $("//option[contains(text(),'Alaska')]").click();
      await this.txtAddressAlias.setValue(address);
      await browser.pause(30000);
      await this.btnSubmit.click();
   };
}

export default new CreateUserAccount();
