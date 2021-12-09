class MyAccountPage {
   /**
    * define selectors using getter methods
    */
   get btnHome() {
      return $("[title='Return to Home']");
   }

   get btnMyAccount() {
      return $("//a[contains(text(),'My account')]");
   }

   get btnDresses() {
      return $('//*[@id="block_top_menu"]/ul/li[2]/a');
   }

   async navigateToHomePage() {
      await this.btnHome.click();
   }

   async clickOnDressesTab() {
      await this.btnDresses.waitForExist({ timeout: 7000 });
      await this.btnDresses.click();
   }
}
export default new MyAccountPage();
