// /// <reference types="Cypress"/>

// import IndexPage from "../../../support/pageObjects2/IndexPage";
// import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
// import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
// import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
// import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";
// import AdminInfrastructurePage from "../../../support/pageObjects2/AdminInfrastructurePage";
// import AdminAccountsPage from "../../../support/pageObjects2/AdminAccountsPage";
// import CurriculumBuilderPage from "../../../support/pageObjects2/CurriculumBuilderPage";

// const ip = new IndexPage();
// const lpa = new LoginPageAdmin();
// const abip = new AdminBasicInfoPage();
// const adp = new AdminDepartmentsPage();
// const agp = new AdminGradesPage();
// const aip = new AdminInfrastructurePage();
// const aap = new AdminAccountsPage();
// const cbp = new CurriculumBuilderPage();

// describe("Verify the curriculum builder Functionalities", function () {
//   before(function () {
//     cy.visit("https://liverpool.topschool.co.in")
//     cy.exec("npm cache clear --force");
//     ip.getAdmin().click();
//     cy.reload();
//     cy.fixture("validPreSetupAdminCredentials").then(function (
//       validAdminLoginData
//     ) {
//       this.validAdminLoginData = validAdminLoginData;
//     });
//   });

//   beforeEach(function(){
//     cy.fixture("addCurriculum").then(function (curriculumData) {
//       this.curriculumData = curriculumData;
//     });
//   });

//   it("Verify that the Step 2 should be curriculum builder", function () {
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//     cy.login(
//       this.validAdminLoginData.username,
//       this.validAdminLoginData.password
//     );
//     cy.wait(1000);
//     abip.getFiveCarouselIcon().click({ force: true });
//     aap.getContinueButton().click({ force: true });
//     cbp.getStep2Content().should("have.text", "Curriculum Builder");
//   });

//   it("Verify that the curriculum builder section list should have Columns such as Grades, Edited By, Last Edited, Status and Actions", function () {
//     cbp.getGradesColumnTitle().should("be.visible");
//     cbp.getEditedByColumnTitle().should("be.visible");
//     cbp.getLastEditedColumnTitle().should("be.visible");
//     cbp.getStatusColumnTitle().should("be.visible");
//     cbp.getActionsColumnTitle().should("be.visible");
//   });

//   it("Verify that Grades column should list the grades which build in previous school setup", function () {
//     cbp.getGradesColumnValues().each(($el, index, $list) => {
//       let gradesList = $el.text();
//       cy.log(gradesList);
//     });
//   });

//   it("Verify that Edited by column should show last edited time of the particular record", function () {
//     cbp.getEditedbyColumnValues().each(($ele, index, $list) => {
//       let editedByList = $ele.text();
//       cy.log(editedByList);
//     });
//   });

//   it("Verify that Last Edited column should show last edited time of the particular record", function () {
//     cbp.getLastEditedColumnValues().each(($ele, index, $list) => {
//       let lastEditedList = $ele.text();
//       cy.log(lastEditedList);
//     });
//   });

//   it("Verify that the Status column should show consolidated status of all subject within the grades", function () {
//     cbp.getStatusColumnValues().each(($ele, index, $list) => {
//       let StatusList = $ele.text();
//       cy.log(StatusList);
//     });
//   });

//   it("Verify that the Actions column should have + Add curriculum button on each record", function () {
//     cbp.getActionsColumnValues().each(($ele, index, $list) => {
//       let ActionsList = $ele.text();
//       cy.log(ActionsList);
//     });
//   });

//   it("Verify that by clicking  + Add curriculum button should take to Create Curriculum screen", function () {
//     cbp.getAddCurriculumButton().click();
//     cbp
//       .getCreateCurriculumScreenTitle()
//       .should("contain", "Create Curriculum - ");
//   });

//   it("Verify that the Create Curriculum should have Grade name, Department drop down and Subject drop down", function () {
//     cbp.getCreateCurriculumScreenTitle().should("be.visible");
//     cbp.getSubjectDropdown().should("be.visible");
//     cbp.getGobackbutton().click();
//   });

//   // it("Verify that the Add Themes / Units and Chapters section should be displayed", function () {
//   //   cbp.getAddCurriculumButton().last().click();
//   //   cbp.getAddThemeUnitAndChapterSection().should("be.visible");
//   // });

//   // it("Verify that the Create Curriculum page should have Start With Theme / Unit and Start With Chapter options under the Add Themes / Unit and Chapters section", function () {
//   //   cbp.getSubjectDropdown().click();
//   //   cbp.getSubjectDropdownValues().contains(this.curriculumData.addSubject).click();
//   //   cbp.getStartWithThemeUnit().should("be.visible");
//   //   cbp.getStartWithChapter().should("be.visible");
//   // });

//   // it("Verify that On click on Start with Chapter the subject is assigned to Chapter flow of curriculum builder", function () {
//   //   cbp.getStartWithChapter().click();
//   //   cbp.getAddNewChapterTitle().should("have.text", "Add New Chapter");
//   //   cbp.getAddNewThemeUnitOrChapterCloseIcon().click();
//   // });

//   // it("Verify that On click on  Start with Theme/Unit the subject is assigned to Theme based flow of curriculum builder", function () {
//   //   cbp.getStartWithThemeUnit().click();
//   //   cbp.getAddNewThemeUnitTitle().should("have.text", "Add New Theme/Unit");
//   //   cbp.getAddNewThemeUnitOrChapterCloseIcon().click();
//   // });

//   // it("Verify that the user is able to add new chapter", function () {
//   //   cbp.getStartWithChapter().click();
//   //   cbp.getChapterName().type(this.curriculumData.addChapterName);
//   //   cbp.getChapterNum().type(this.curriculumData.addChapterNum);
//   //   cbp.getChapterDescription().type(this.curriculumData.addChapterDescription);
//   //   cbp.getTotalSessionsPeriod().type(this.curriculumData.addChapterNum)
//   //   cbp.getChapterContinueButton().click();
//   //   cbp.getChapterList().should("contain", this.curriculumData.addChapterDescription);
//   // });

//   // it("Verify that the user is able to delete the added chapter", function () {
//   //   cbp.getChapterDeleteIcon().click();
//   //   cbp.getDeleteChapterButton().click({ force: true });
//   //   cy.wait(2000);
//   // });

//   // it("Verify that the user is able to add theme or unit", function () {
//   //   cbp.getStartWithThemeUnit().click();
//   //   cbp.getThemeName().type(this.curriculumData.addThemeName);
//   //   cbp.getThemeDescription().type(this.curriculumData.addThemeDescription);
//   //   cbp.getTotalSessionsPeriod().type(this.curriculumData.addChapterNum)
//   //   cbp.getThemeContinueButton().click();
//   //   cbp.getThemeList().should("contain", this.curriculumData.addThemeName);
//   // });

//   // it("Verify that the user is able to delete the added theme or unit", function () {
//   //   cbp.getThemeDeleteIcon().click();
//   //   cbp.getDeleteThemeButton().click({ force: true });
//   // });
// });
