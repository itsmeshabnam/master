class LoginPage {
   /**
    * define selectors using getter methods
    */
   get lblAuthentication() {
      return $("#navigation_page");
   }
   get txtEmail() {
      return $('[name="email_create"]');
   }
   get btnCreateAccount() {
      return $('[name="SubmitCreate"]');
   }
   get txtRegisteredEmail() {
      return $("//input[@id='email']");
   }
   get txtPassword() {
      return $("//input[@id='passwd']");
   }
   get btnSignIn() {
      return $("[id='SubmitLogin']");
   }
   createAccount = async (emailId) => {
      await this.txtEmail.waitForExist({ timeout: 2000 });
      await this.txtEmail.setValue(emailId);
      await this.btnCreateAccount.click();
   };

   loginRegisteredUser = async (email, password) => {
      await this.txtRegisteredEmail.waitForExist({ timeout: 2000 });
      await this.txtRegisteredEmail.setValue(email);
      await this.txtPassword.setValue(password);
      await this.btnSignIn.click();
   };
}
export default new LoginPage();
