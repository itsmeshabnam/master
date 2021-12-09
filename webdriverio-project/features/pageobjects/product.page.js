class ProductPage {
   /**
    * define selectors using getter methods
    */
   get btnHome() {
      return $("[title='Return to Home']");
   }
   get btnAddToCart() {
      return $("//button[@name='Submit']");
   }
   get txtQuantity() {
      return $("#quantity_wanted");
   }

   async clickOnAddToCart() {
      await this.btnAddToCart.waitForExist({ timeout: 7000 });
      await this.btnAddToCart.scrollIntoView();
      await this.btnAddToCart.click();
   }
}
export default new ProductPage();
