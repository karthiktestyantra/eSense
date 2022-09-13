// import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
// import LoginPageAdmin from "../../../../support/pageObjects/LMS-1/LoginPageAdmin";
// import AdminBasicInfoPage from "../../../../support/pageObjects/LMS-1/AdminBasicInfoPage";
// import AdminDepartmentsPage from "../../../../support/pageObjects/LMS-1/AdminDepartmentsPage";

// const ip = new IndexPage();
// const lpa = new LoginPageAdmin();
// const abip = new AdminBasicInfoPage();
// const adp = new AdminDepartmentsPage();

// describe("Verify School Admin Basic Info Functionalities", function () {
//   before(function () {
//    cy.visit('https://liverpool.topschool.co.in');
//    //cy.visit("https://gvhss.thetopschool.com")
//     ip.getAdmin().click();
//     cy.reload();
//     cy.fixture("LMS/validPreSetupAdminCredentials").then(function (validAdminLoginData) {
//       this.validAdminLoginData = validAdminLoginData;
//   });
//   });
//     beforeEach(function () {
//     cy.fixture("LMS/mySchoolBasicInfo").then(function (basicInfoData){
//       this.basicInfoData = basicInfoData;
//     });
//   });


//   it("Verify that the successful admin login the page should be redirected into setup page", function () {
    
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//     cy.login(
//       this.validAdminLoginData.username,
//       this.validAdminLoginData.password
//     );
//     abip.getBasicInfoTitle().should("have.text", "Basic Information");
//   });

//   it("Verify that the setup page should display My School, Curriculum Builder, Teacher Accounts and Timetable Builder at the top and school admin should go through this order", function () {
//     abip
//       .getMySChoolSectionTitle()
//       .should("have.text", "My School")
//       .should("be.visible");
//     abip
//       .getCurriculumBuilderSectionTitle()
//       .should("have.text", "Curriculum Builder")
//       .should("be.visible");
//     abip
//       .getTeacherAccountsTitle()
//       .should("have.text", "Teacher Accounts")
//       .should("be.visible");
//     abip
//       .getTimetableBuilderTitle()
//       .should("have.text", "Timetable Builder")
//       .should("be.visible");
//   });

//   it("Verify that the My school should have following Sub steps", function () {
//     abip.getBasicInfoTitle().should("have.text", "Basic Information");
//     abip.getSecondCarouselIcon().click({ force: true });
//     cy.wait(2000);
//     abip.getDepartmentsTitle().should("have.text", "STREAMS");
//     abip.getThirdCarouselIcon().click();
//     cy.wait(2000);
//     abip.getGradesTitle().should("have.text", "Grades");
//     abip.getFourthCarouselIcon().click();
//     cy.wait(2000);
//     abip.getInfrastructureTitle().should("have.text", "Infrastructure");
//     abip.getFiveCarouselIcon().click();
//     cy.wait(2000);
//     abip.getAdminAccountsTitle().should("contain", "Admin Accounts");
//     abip.getFirstCarouselIcon().click();
//     cy.wait(2000);
//     abip.getBasicInfoTitle().should("have.text", "Basic Information");
//   });

//   it("Verify that the School Admin should start with Step A of My School, which is Basic Information", function () {
//     abip.getStepAContent().should("have.text", "A");
//     abip.getBasicInfoTitle().should("have.text", "Basic Information");
//   });

//   it("Verify that the Basic Information should have following sub sections", function () {
//     abip.getSchoolAndBranch().should("have.text", "School & Branch");
//     abip.getCBSEAffiliation().should("have.text", "CBSE Affiliation");
//     abip.getContactDetails().should("have.text", "Contact Details");
//     abip.getSocialLinks().should("have.text", "Social Links");
//     abip.getPointOfContact().should("have.text", "Point of Contact");
//   });

//   it("Verify that the School & Branch section should have Institution Name *, Branch Name *, Date of first Opening * and Trust/Society/Company fields and the fields should be enabled", function () {
//     abip.getInstituteName().should("be.enabled");
//     abip.getInstituteName().clear().type(this.basicInfoData.instituteName);
//     abip.getBranchName().should("be.enabled");
//     abip.getBranchName().clear().type(this.basicInfoData.branchName);
//     abip.getDateOfFirstOpening().should("be.visible");
//     abip.getTrust().should('be.enabled');
//     abip.getTrust().clear().type(this.basicInfoData.trust);
//   });

//   it("Verify that the user should be able to select the date by using date picker in the Date of first opening fields", function () {
//     abip.getCalendarIconOfDateOfFirstOpening().click();
//     abip.getCalendarPreviousIcon().click();
//     abip.getCalendarYearDropdown().click();
//     abip.getCalendarYear().contains(this.basicInfoData.dateOfFirstOpeningYear).click({force : true});
//     abip.getCalendarNextIcon().click();
//     abip.getCalendarDay().contains(this.basicInfoData.dateOfFirstOpeningDate).click();
//   });

//   it("Verify that the CBSE Affiliation section should have Affiliation Type *, Affiliation Number *, Affiliation Period Start Date * and Affiliation Period End Date fields and the fields should be enabled", function () {
//     abip.getAffiliationType().should("be.enabled");
//     abip.getAffiliationType().clear().type(this.basicInfoData.affiliationType)
//     abip.getAffiliationNumber().should("be.enabled");
//     abip.getAffiliationNumber().clear().type(this.basicInfoData.affiliationNumber)
//     abip.getDateofAffiliationPeriodStartDate().should("be.visible");
//     abip.getDateofAffiliationPeriodEndDate().should("be.visible");
//   });

//   it("Verify that the user should be able to select the date by using date picker in the Affiliation Period Start Date field", function () {
//     abip.getCalendarIconOfAffiliationStartDate().click();
//     cy.wait(2000);
//     abip.getCalendarPreviousIcon().click();
//     abip.getCalendarYearDropdown().click();
//     abip.getCalendarYear().contains(this.basicInfoData.affiliationPeriodStartYear).click({force : true});
//     abip.getCalendarNextIcon().click();
//     abip.getCalendarDay().contains(this.basicInfoData.affiliationPeriodStartdate).click();
//   });

//   it("Verify that the user should be able to select the date by using date picker in the Affiliation Period End Date field", function () {
//     abip.getCalendarIcoOfAffiliationEndDate().click();
//     cy.wait(2000);
//     abip.getCalendarYearDropdown().click();
//     abip.getCalendarYear().contains(this.basicInfoData.affiliationPeriodEndYear).click({force : true});
//     abip.getCalendarDay().contains(this.basicInfoData.affiliationPeriodEnddate).click();
//   });

//   it("Verify that the Contact Details section should have Phone Number *, Email Address, Website, Address Line 1 *, Address Line 2 *, PinCode *, State and City Fields", function () {
//     abip.getPhoneNumber().should("be.visible");
//     abip.getPhoneNumber().clear().type(this.basicInfoData.phoneNumber);
//     abip.getEmail().should("be.visible");
//     abip.getWebsite().should("be.visible");
//     abip.getWebsite().clear().type(this.basicInfoData.website);
//     abip.getAddressOne().should("be.visible");
//     abip.getAddressOne().clear().type(this.basicInfoData.addressLine1);
//     abip.getAddressTwo().should("be.visible");
//     abip.getAddressTwo().clear().type(this.basicInfoData.addressLine2);
//     abip.getPincode().should("be.visible");
//     abip.getState().should("be.visible");
//     abip.getCity().should("be.visible");  
//   });

//   it("Verify that the Email Address field should allow the user to enter valid email id", function(){
//     abip.getEmail().click();
//     abip.getEmail().clear().type(this.basicInfoData.emailAddress);
//   });

//   it("Verify that the Pincode field should allow the user to enter 6 digits", function(){
//     abip.getPincode().click();
//     abip.getPincode().clear().type(this.basicInfoData.pincode);
//   });

//   it("Verify that the State and City fields should be automatically populated based on the given valid Pincode number", function(){
//     abip.getState().should('have.value',this.basicInfoData.state);
//     abip.getCity().should('have.value', this.basicInfoData.city);
//   });

//   it("Verify that the Social Links should have Facebook Link, Instagram Link and Youtube Link fields and the fields should be enabled", function(){
//     abip.getFacebookLink().should('be.visible');
//     abip.getInstagramLink().should('be.visible');
//     abip.getYoutubeLink().should('be.visible');
//   });

//   it("Verify that the Point of Contact should have “+Add POC” button and the button should be visible", function(){
//     abip.getAddPOCButton().should('be.visible');
//   });

//   it("Verify that the “Add POC” pop up should be displayed by clicking +Add POC button", function(){
//     abip.getAddPOCButton().click();
//     abip.getAddPOCPopupTitle().should('have.text','Add POC');
//   });

//   it("Verify that the  “Add POC” pop up should have Contact Name *, Contact Email *, Phone Number *, Designation, Add, Cancel and close icon ", function(){
//     abip.getPOCContactName().should('be.visible');
//     abip.getPOCContactEmail().should('be.visible');
//     abip.getPOCPhoneNumber().should('be.visible');
//     abip.getPOCDesignation().should('be.visible');
//     abip.getPOCAddButton().should('be.visible');
//     abip.getPOCCancelButton().should('be.visible');
//     abip.getPOCCloseIcon().should('be.visible');
//     abip.getPOCCloseIcon().click();
//   });

//   it("Verify that the Contact Name *, Contact email *, Phone number *, Designation fields should allow the user to provide the valid input", function(){
//     abip.getAddPOCButton().click();
//     abip.getPOCContactName().click().type(this.basicInfoData.POCContactName);
//     abip.getPOCContactEmail().click().type(this.basicInfoData.POCContactEmail);
//     abip.getPOCPhoneNumber().click().type(this.basicInfoData.POCPhoneNumber);
//     abip.getPOCDesignation().click().type(this.basicInfoData.POCDesignation);
//   });

//   it("Verify that the user should be able to add the POC by clicking Add button after provide the valid inputs", function(){
//     abip.getPOCAddButton().click();
//     abip.getPOCAddedMessage().should('have.text','inserted successfully');
//     abip.getAddedPOCContactVerify().should('contain', 'Rohan');
//   });
  
//   it("Verify that click on ‘Continue’ button, should Save/Edit the Basic Information and Move to Step B, which is ‘Departments’", function(){
//     abip.getContinueButton().click({force:true});
//     cy.wait(2000);
//     adp.getStepBContent().should('have.text','B');
//     adp.getDepartmentsTitle().should('have.text','STREAMS');
//   });
// });
