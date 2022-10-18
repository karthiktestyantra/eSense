const ip = require('../../../../support/pageObjects/LMS-1/IndexPage')
const lpa = require('../../../../support/pageObjects/LMS-1/LoginPageAdmin')
const abip = require('../../../../support/pageObjects/LMS-1/AdminBasicInfoPage')
const cbp = require('../../../../support/pageObjects/LMS-1/CurriculumBuilderPage')
const tap = require('../../../../support/pageObjects/LMS-1/TeacherAccountsPage')
const upp = require('../../../../support/pageObjects/LMS-1/UserPostSetupPage')

describe("Verify the Teacher Accounts Functionalities", function () {
  before(function () {
    cy.visit('https://prodautomation1.thetopschool.com');
    cy.exec("npm cache clear --force");
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("LMS/validPreSetupAdminCredentials").then(function (
      validAdminLoginData
    ) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });
  beforeEach(function () {
    cy.fixture("LMS/mySchoolBasicInfo").then(function (basicInfoData) {
      this.basicInfoData = basicInfoData;
    });
    cy.fixture("LMS/addNewTeacher").then(function (addNewTeacherData) {
      this.addNewTeacherData = addNewTeacherData;
    });
    cy.fixture("LMS/addNewStudent").then(function (addNewStudentData) {
      this.addNewStudentData = addNewStudentData;
    });
  });

  it("Verify that the Admin should be able to login the application", function () {
    lpa.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(
      this.validAdminLoginData.username,
      this.validAdminLoginData.password
    );
  });

  it("Verify that the Admin should be able to navigate to Teacher Accounts screen", function () {
    for(var i=1;i<=3;i++){
        cy.get('button.MuiButton-root').contains('Continue').click()
        cy.wait(1000)
        }
        cy.get('.continue-btn').click()
        cy.wait(1000)
    tap.getTeacherAccountsScreenTitle().should("have.text", "Teacher Accounts");
  });

  it("Verify that the Upload CSV File button should be displayed and enabled", function () {
    upp.getTeacherBulkUploadCSVButton().should("be.visible");
  });

  it("Verify that the Upload Teacher Accounts In Bulk pop up should be displayed once clicking Upload CSV File button/icon", function () {
    upp.getTeacherBulkUploadCSVButton().click();
    upp
      .getUploadTeacherAccountPopupTitle()
      .should("have.text", "Upload Teacher Accounts in bulk");
  });

  it("Verify that the user should be able to view 'Download Teacher's Profile Template' link", function () {
    upp.getDownloadTeachersProfileLink().should("be.visible");
    cy.get('svg[data-testid="CloseIcon"]').click();
  });

  it("Verify that the Teacher Accounts screen should have Add Teacher tile button", function () {
    tap.getAddTeacherButton().should("be.visible");
  });
});
