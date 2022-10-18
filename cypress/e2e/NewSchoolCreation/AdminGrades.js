const ip = require('../../../../support/pageObjects/LMS-1/IndexPage')
const lpa = require('../../../../support/pageObjects/LMS-1/LoginPageAdmin')
const abip = require('../../../../support/pageObjects/LMS-1/AdminBasicInfoPage')
const agp = require('../../../../support/pageObjects/LMS-1/AdminGradesPage')

describe("Verify School Admin Grades Functionalities", function () {
  before(function () {
    cy.visit('https://prodautomation1.thetopschool.com');
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("LMS/validPreSetupAdminCredentials").then(function (
      validAdminLoginData
    ) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });

    beforeEach(function(){
      cy.fixture("LMS/addGrades").then(function (gradeData) {
        this.gradeData = gradeData;
      });
    });

  it("Verify that the Step C should display list of Grades with the provision to add sections", function () {
    lpa.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(
      this.validAdminLoginData.username,
      this.validAdminLoginData.password
    );
    abip.getThirdCarouselIcon().click();
    cy.wait(1000);
    agp.getGradesList().should("have.length", 12);
  });

  it("Verify that the Admin should have provision to rename the Grade", function () {
    agp.getGradeListOne().click();
    cy.wait(2000);
    agp.getGradeListofItem().clear();
    agp.getGradeListofItem().type(this.gradeData.editGradeName);
  });

  it("Verify that the Add New Section pop up window should be displayed by clicking on + symbol against the Grade", function () {
    agp.getAddNewSectionIcon().click({ force: true });
    agp.getAddNewSectionPopupTitle().should("have.text", "Add New Section");
  });

  it("Verify that the Add New Section pop up should have Section Name (text box) , Department (drop down), Mandatory Subjects,  Optional Subjects (drop down), Cancel (button), Add Section (button) and Close icon", function () {
    agp.getAddNewSectionPopupSectionName().should("be.visible");
    agp.getAddNewSectionPopupMandatorySubjects().should("be.visible");
    agp.getAddNewSectionPopupOptionalSubjects().should("be.visible");
    agp.getAddNewSectionPopupAddSectionButton().should("be.visible");
    agp.getAddNewSectionPopupCancelButton().should("be.visible");
    agp.getAddNewSectionPopupCloseicon().should("be.visible");
    agp.getAddNewSectionPopupCloseicon().click();
  });

  it("Verify that the Add New Section should be closed by clicking close icon", function () {
    agp.getAddNewSectionIcon().click({ force: true });
    agp.getAddNewSectionPopupCloseicon().click({ force: true });
  });


  it("Verify that by clicking cancel button should close the pop up and focus should be back to Step C", function(){
    agp.getAddNewSectionIcon().click({ force: true });
    agp.getEditSectionCancelButton().click();
  });

  it("Verify that the admin should be able to add the section", function(){
    agp.getAddNewSectionIcon().click();
    agp.getAddNewSectionPopupSectionName().type(this.gradeData.addSectionName);
    agp.getAddNewSectionPopupOptionalSubjects().click();
    agp.getAddNewSectionPopupOptionalSubjectsOptions().each((el, index, $list) => {
      cy.log(el.text())
      if (el.text() === this.gradeData.addOptionalSubject) {
        cy.wrap(el).click({force:true});
      }
    });
    agp.getAddNewSectionPopupOptionalSubjects().click({force:true});
    agp.getAddNewSectionPopupAddSectionButton().click({force:true});
    cy.wait(1000);
  });

  it("Verify that the Delete Section option should be provided in the Edit Section pop up", function(){
    agp.getSections().contains(this.gradeData.addSectionName).click();
    agp.getDeleteSectionIcon().should('be.visible');
  });

  it("Verify that clicking on Delete Section icon should display the pop up with the options Delete Section and Cancel", function(){
    agp.getDeleteSectionIcon().click();
    agp.getDeleteSectionButtonInPopup().should('be.visible');
    agp.getCancelButtonInPopup().should('be.visible');
  });

  it("Verify that clicking on Cancel button Should close the pop up", function(){
    agp.getCancelButtonInPopup().click();
  });

  it("Verify that clicking on Delete Section button should inactivate the given section at the backend and should display Section deleted message pop up", function(){
    agp.getDeleteSectionIcon().click({force:true});
    agp.getDeleteSectionButtonInPopup().click();
    agp.getDeletedSectionMessage().should('contain', 'Section deleted successfully!');
    cy.wait(2000);
  });

  //Add section for the purpose Add room in Admin Infrastructure

  it("Verify that the admin should be able to add the section in different grade", function(){
    agp.getAddNewSecIcon().click();
    agp.getAddNewSectionPopupSectionName().type(this.gradeData.addAnotherSectionName);
    agp.getAddNewSectionPopupOptionalSubjects().click();
    agp.getAddNewSectionPopupOptionalSubjectsOptions().each((el, index, $list) => {
      cy.log(el.text())
      if (el.text() === this.gradeData.addOptionalSubject) {
        cy.wrap(el).click({force:true});
      }
    });
    agp.getAddNewSectionPopupOptionalSubjects().click({force:true});
    agp.getAddNewSectionPopupAddSectionButton().click({force:true});
  })

//   it("Verify that clicking on Continue should be moved to Step D, Which is Infrastructure", function(){
//     agp.getContinueButton().click({force:true});
//     aip.getStepDContent().should('have.text', 'D');
//   });
});
