class HomePage {
   /**
    * define selectors using getter methods
    */
   get btnSignIn() {
      return $("=Sign in");
   }
   get btnSignOut() {
      return $("=Sign out");
   }
   async navitageToLandingPage() {
      await browser.url("http://automationpractice.com/index.php");
      await browser.pause(5000);
   }

   async navigateToSignInPage() {
      await this.btnSignIn.waitForExist({ timeout: 7000 });
      await this.btnSignIn.click();
      browser.pause(5000);
   }

   async signOutApplication() {
      await this.btnSignOut.waitForExist({ timeout: 2000 });
      await this.btnSignOut.click();
   }
}
export default new HomePage();
