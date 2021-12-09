import faker from "faker";
// let firstname;
// let lastname;
// let email;
// let password;
class initialise {
   // constructor(firstName, lastName, email) {
   //    this.firstname = firstName;
   //    this.lastname = lastName;
   //    this.email = email;
   //    this.password = "123456";
   // }

   loginRegisteredUser = async (firstname) => {
      this.firstname = firstname;
      //faker.name.firstName();
      // this.lastname = faker.name.lastName();
      // this.email = faker.internet.email();
      // this.password = "123456";
   };

   async getFirstName() {
      return this.firstname;
   }
}
module.exports = initialise;
// export default new initialise();
