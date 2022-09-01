// /// <reference types="Cypress"/>

// import IndexPage from "../../../support/pageObjects2/IndexPage";
// import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
// import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
// import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
// import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";

// const ip = new IndexPage();
// const lpa = new LoginPageAdmin();
// const abip = new AdminBasicInfoPage();
// const adp = new AdminDepartmentsPage();
// const agp = new AdminGradesPage();

// describe("Verify School Admin Department Functionalities", function () {
//   before(function () {
//     cy.visit("https://liverpool.topschool.co.in")
//     ip.getAdmin().click();
//     cy.reload();
//     cy.fixture("validPreSetupAdminCredentials").then(function (
//       validAdminLoginData
//     ) {
//       this.validAdminLoginData = validAdminLoginData;
//     });
//   });

//   beforeEach(function () {
//     cy.fixture("addDepartment").then(function (departmentData) {
//       this.departmentData = departmentData;
//     });
//   });

//   it("Verify that the Departments should have following headers", function () {
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//     cy.login(
//       this.validAdminLoginData.username,
//       this.validAdminLoginData.password
//     );
//     abip.getSecondCarouselIcon().click({ force: true });
//     adp
//       .getDepartmentHeader()
//       .should("have.text", "Streams")
//       .should("be.visible");
//     adp
//       .getForGradesHeader()
//       .should("have.text", "For Grades")
//       .should("be.visible");
//     adp
//       .getMandatorySubjectsHeader()
//       .should("have.text", "MANDATORY SUBJECTS")
//       .should("be.visible");
//   });

//   it("Verify that the '+ Add Department' option should be given", function () {
//     adp.getWholeDeptPage().scrollTo("bottom", { ensureScrollable: false });
//     adp.getAddDepartmentOption().should("be.visible");
//   });

//   it("Verify that the Add Department pop up should be displayed to add the department by clicking the “+ Add Department” ", function () {
//     adp.getAddDepartmentOption().click();
//     adp.getAddDepartmentTitle().should("be.visible");
//   });

//   it("Verify that the Add Department should have Department Name (text box) , For Grades (drop down), Mandatory Subjects  (drop down),  Add (button), Cancel (button) and Close icon", function () {
//     adp.getDepartmentName().should("be.visible");
//     adp.getForGrades().should("be.visible");
//     adp.getMandatorySubjects().should("be.visible");
//     adp.getAddButton().should("be.visible");
//     adp.getCancelButton().should("be.visible");
//     adp.getCloseIcon().should("be.visible");
//     adp.getCloseIcon().click();
//   });

//   it("Verify that the Department should allow the admin to enter the text", function () {
//     adp.getWholeDeptPage().scrollTo("bottom", { ensureScrollable: false });
//     adp.getAddDepartmentOption().click({ force: true });
//     adp.getDepartmentName().type(this.departmentData.departmentName);
//   });

//   it("Verify that the admin is able to select the grades, mandatory subjects and add the department", function () {
//     adp.getForGrades().click();
//     adp.getForGradesOption4().first().click();
//     cy.wait(1000);
//     adp.getForGrades().click();
//     adp.getMandatorySubjects().click();
//     cy.wait(1000);
//     adp.getMandatorySubjectsOption().first().click();
//     adp.getMandatorySubjects().click();
//     adp.getAddButton().click();
//     cy.wait(2000);
//   });

  

//   it("Verify that the Edit icon and Delete icon to be provided against each row of data", function () {
//     cy.wait(2000);
//     adp.getDepartmentEditIcon().should("be.visible");
//     adp.getDeptDeleteIcon().scrollIntoView().should("be.visible");
//   });

//   it("Verify that the Edit Department pop up should be displayed by clicking the edit icon of the selected department", function () {
//     adp.getDepartmentEditIcon().click();
//     adp.getEditDepartmentTitle().should("be.visible");
//   });

//   it("Verify that the Admin should be able to edit the Department name", function () {
//     adp.getDepartmentName().clear();
//     adp.getDepartmentName().type(this.departmentData.editDepartmentName);
//   });

//   it("Verify that by clicking Save Changes button should save the entered data and focus should be back to Step B", function () {
//     adp.getAddButton().click();
//     adp.getStepBContent().should("have.text", "B");
//   });

//   it("Verify that the Edit Department should be closed by clicking close icon", function () {
//     adp.getDepartmentEditIcon().click();
//     adp.getCloseIcon().click();
//     adp.getStepBContent().should("have.text", "B");
//   });

//   it("Verify that clicking on Delete icon against the row should pop up a modal window asking for the confirmation with Delete Department and Cancel option", function () {
//     adp.getDeptDeleteIcon().click();
//     adp.getDeletePopupDeleteButton().should("be.visible");
//     adp.getDeletePopupCancelButton().should("be.visible");
//   });

//   it("Verify that clicking on 'Cancel' button Should close the modal pop up and focus should be back to Step B", function () {
//     adp.getDeletePopupCancelButton().click();
//     adp.getStepBContent().should("have.text", "B");
//   });

//   it("Verify the admin is able to delete the added department", function () {
//     adp.getDepartmentRows().then((ele) => {
//       cy.log(ele.length);
//       for (let i = 0; i < ele.length; i++) {
//         adp.getDepartmentNames(i).then((el) => {
//           cy.log(el.text());
//           if (el.text() === this.departmentData.departmentName) {
//             adp.getDepartmentDeleteIcon(i).click();
//             adp.getDeletePopupDeleteButton().click();
//             adp
//               .getDeleteDepartmentPopup()
//               .should("contain", " has been deleted.");
//           }
//         });
//       }
//     });
//   });

//   it("Verify that clicking on Continue should be moved to Step C, Which is Grades", function () {
//     adp.getContinueButton().click();
//     agp.getStepCContent().should("have.text", "C");
//   });
// });
