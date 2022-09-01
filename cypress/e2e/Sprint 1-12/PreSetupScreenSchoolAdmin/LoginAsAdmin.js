// /// <reference types="Cypress"/>

// import IndexPage from "../../../support/pageObjects2/IndexPage";
// import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
// import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
// import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
// import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";
// import AdminInfrastructurePage from "../../../support/pageObjects2/AdminInfrastructurePage";
// import AdminAccountsPage from "../../../support/pageObjects2/AdminAccountsPage";
// import CurriculumBuilderPage from "../../../support/pageObjects2/CurriculumBuilderPage";
// import TimetableBuilderPage from "../../../support/pageObjects2/TimetableBuilderPage";

// const ip = new IndexPage();
// const lpa = new LoginPageAdmin();
// const abip = new AdminBasicInfoPage();
// const adp = new AdminDepartmentsPage();
// const agp = new AdminGradesPage();
// const aip = new AdminInfrastructurePage();
// const aap = new AdminAccountsPage();
// const cbp = new CurriculumBuilderPage();
// const ttb = new TimetableBuilderPage();


// describe("Verify Login Page Functionalities", function () {
//   beforeEach(function () {
//     cy.visit("https://liverpool.topschool.co.in")
//     ip.getAdmin().click();
//     cy.reload();
//     cy.fixture("invalidAdminLoginCredentials").then(function (invalidAdminLoginData) {
//       this.invalidAdminLoginData = invalidAdminLoginData;
//       cy.fixture("validPreSetupAdminCredentials").then(function (validAdminLoginData) {
//         this.validAdminLoginData = validAdminLoginData;
//       });
//     });
//   });

//   it("Verify that the Admin login page should be by clicking Admin login in Index Page", function(){
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//   })

//   it("Verify that the fields available in login page are enabled", function () {
//     lpa.getUserName().should("be.enabled");
//     lpa.getPassword().should("be.enabled");
//     lpa.getForgotPassword().should("be.visible");
//     lpa.getLogin().should("be.enabled");
//     lpa.getLoginWithPhoneNumber().should("be.enabled");
//   });

//   it("Verify that the error message Uh oh! Invalid username or password should be displayed for invalid login credentials", function () {
//     this.invalidAdminLoginData.invalidAdminLogin.forEach(function (loginData) {
//       lpa.getUserName().type(loginData.username);
//       lpa.getPassword().type(loginData.password);
//       lpa.getLogin().click();
//       lpa.getLoginErrorMessage().should(
//         "have.text",
//         "Uh oh! Invalid username or password"
//       );
//       cy.reload();
//     });
//   });


//   it("Login with Username empty", function () {
//     cy.title().should("contain", "Top School");
//     lpa.getPassword().type(this.validAdminLoginData.password);
//     lpa.getLogin().click();
//     lpa.getLoginErrorMessage().should("have.text", "Enter username to log in");
//   });

//   it("Login with Password empty", function () {
//     cy.title().should("contain", "Top School");
//     lpa.getUserName().type(this.validAdminLoginData.username);
//     lpa.getLogin().click();
//     lpa.getLoginErrorMessage().should("have.text", "Enter password to log in");
//   });

//   it("Verify that the registered user should be able to successfully login by entering valid credentials and clicking on the Login button", function () {
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//     cy.login(this.validAdminLoginData.username, this.validAdminLoginData.password);
//     abip.getLoginSuccessfulMessage().should('have.text','Logged in successfully');
//   });
// });
