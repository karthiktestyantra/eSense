const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const loginPageAdmin = require('../../../../support/pageObjects/LMS-1/LoginPageAdmin')
const teacherAccountsPage = require('../../../../support/pageObjects/LMS-1/TeacherAccountsPage')
const userPostSetupPage = require('../../../../support/pageObjects/LMS-1/UserPostSetupPage')

describe("Verify the User Menu related Functionalities", function () {
  before(function () {
    cy.visit(Cypress.env('urlQAPreSetup'))
    cy.exec("npm cache clear --force");
    indexPage.getAdmin().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/addNewStudent").as("addNewStudentData")
    cy.fixture("LMS/teacherSearchClasses").as("searchClassesData")
  })

  it("Verify that the Admin should be able to login the application", function () {
    loginPageAdmin.getLoginTitle().should("have.text", "Hello Admin");
    cy.title().should("contain", "Top School");
    cy.login(this.validAdminLoginData.username, this.validAdminLoginData.password);
  });

  it("Verify that user is able to click Students tab", function () {
    teacherAccountsPage.getUsersMenu().click();
    teacherAccountsPage.getStudentsTab().click({ force: true });
  });

  it("Verify that Students tab should have add student + icon", function () {
    teacherAccountsPage.getAddStudentIcon().should('be.visible');
  });

  it("Verify that Add Student screen should be displayed by clicking add student + icon", function () {
    teacherAccountsPage.getAddStudentIcon().click();
    teacherAccountsPage.getAddStudentScreenTitle().should('have.text', 'Add Student');
  });

  it("Verify that Add Student screen should have Basic Details and Academic Details tab", function () {
    teacherAccountsPage.getStudentsBasicDetailsTab().should('be.visible');
    teacherAccountsPage.getStudentsAcademicDetailsTab().should('be.visible');
  });

  it("Verify that Basic Details should have Upload Profile picture, Primary details section, Guardian details section, Address section", function () {
    teacherAccountsPage.getStudentPrimaryDetailsSection().should('be.visible');
    teacherAccountsPage.getStudentGuardianDetailsSection().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentAddressSection().scrollIntoView().should('be.visible');
  });

  it("Verify that Primary details section should have First Name, Last Name, Email, Date of Birth, Gender, Contact Number and Blood Group", function () {
    teacherAccountsPage.getStudentFullName().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentEmail().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentDOB().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentGender().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentContactNumber().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentBloodGroup().scrollIntoView().should('be.visible');
  });

  it("Verify that Guardian details section should have Father's Name, Mother's Name, Father's Email, Mother's Email, Father's Occupation, Mother's Occupation, Father's Contact and Mother's Contact", function () {
    teacherAccountsPage.getSelectRelationDrpDwn().last().scrollIntoView().should('be.visible');
    teacherAccountsPage.getGuardianNameTxtFld().scrollIntoView().should('be.visible');
    teacherAccountsPage.getContactNumTxtFld().last().scrollIntoView().should('be.visible');
    teacherAccountsPage.getEmailAdrssTxtFld().last().scrollIntoView().should('be.visible');
  });

  it("Verify that Address section should have Address Line 1, Address Line 2, Pincode, State and City", function () {
    teacherAccountsPage.getStudentAddressLineOne().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentAddressLineTwo().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentPincode().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentState().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentCity().scrollIntoView().should('be.visible');
  });

  it("Verify that Add Student screen should have Add Student button, Cancel Button and Close icon", function () {
    teacherAccountsPage.getStudentsAddStudentButton().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentsCancelButton().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentsCloseIcon().scrollIntoView().should('be.visible');
    teacherAccountsPage.getStudentsCloseIcon().click({ force: true });
    teacherAccountsPage.getDiscardBtn().click({ force: true });
    teacherAccountsPage.getStudentsTab().click({ force: true });
  });

  it("Verify that the user is able to view search student search box", function () {
    teacherAccountsPage.getStudentSearch().should('be.visible');
  });

  it("Verify that the user is able to search particular student", function () {
    userPostSetupPage.getStudentNameList().each((ele, index, $list) => {
      userPostSetupPage.getStudentSearchBar().type(Cypress.$(ele).text());
      userPostSetupPage.getStudentNameList().should("contain", Cypress.$(ele).text());
      userPostSetupPage.getStudentSearchBar().clear();
    });
  });

  it("Verify that on Click on School menu from the side menus, School page should be load", function () {
    userPostSetupPage.getSchoolMenu().click({ force: true });
  });

  it("Verify that the Quick Links and School Notice Board section should be displayed", function () {
    userPostSetupPage.getQuickLinksTitle().should('have.text', 'Quick Links');
    userPostSetupPage.getSchoolNoticeBoardTitle().should('have.text', 'School Notice Board');
  });

  it("Verify that the Quick Links should have School Information, Grades & Departments, School Infrastructure, Curriculum Builder, Timetable Management and Admin Accounts", function () {
    userPostSetupPage.getSchoolInformationLink().should('be.visible');
    userPostSetupPage.getGradesAndDepartmentsLink().should('be.visible');
    userPostSetupPage.getSchoolInfrastructureLink().should('be.visible');
    userPostSetupPage.getCurriculumBuilderLink().should('be.visible');
    userPostSetupPage.getTimetableManagementLink().should('be.visible');
    userPostSetupPage.getAdminAccountsLink().should('be.visible');
  });

  it("Verify that the Add Notice button should be displayed", function () {
    userPostSetupPage.getAddNoticeButton().should('be.visible');
  });

  it("Verify that the School Information page should be displayed by clicking School Information quick link", function () {
    userPostSetupPage.getSchoolInformationLink().click();
    userPostSetupPage.getSchoolInformationPageTitle().should('have.text', 'School Information');
    cy.wait(3000);
  });

  it("Verify that click on ‘Save Changes’ button, to save the changes to School basic information and return to School page", function () {
    userPostSetupPage.getSchoolInfoSaveChangesButton().click({ force: true });
    userPostSetupPage.getSchoolInformationLink().should('have.text', 'School Information');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to School basic information and return to School page", function () {
    userPostSetupPage.getSchoolInformationLink().click();
    userPostSetupPage.getSchoolInfoGoBackButton().click();
  });

  it("Verify that the Grade and Departments page should be displayed with Academic Setup Grades and Dept page in an editable mode with pagination by clicking Grade and Departments quick link", function () {
    userPostSetupPage.getGradesAndDepartmentsLink().click();
    userPostSetupPage.getGradesandDepartmentsPageTitle().should('have.text', 'Grades & Stream');
    userPostSetupPage.getDepartmentsTab().should('be.visible');
    userPostSetupPage.getGradesTab().should('be.visible');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Grades and Departments and return to School page", function () {
    userPostSetupPage.getGradesTab().click();
    userPostSetupPage.getDeptandGradesGoBackButton().click({ force: true });
    cy.wait(2000);
  });

  it("Verify that the School Infrastructure page should be displayed with Infrastructure page in an editable mode with pagination by clicking School Infrastructure quick link", function () {
    userPostSetupPage.getSchoolInfrastructureLink().click();
    userPostSetupPage.getSchoolInfrastructurePageTitle().should('have.text', 'School Infrastructure');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to School Infrastructure and return to School page", function () {
    userPostSetupPage.getSchoolInfrastructureGoBackButton().click();
  });

  it("Verify that the Curriculum Builder page should be displayed with Curriculum page in an editable mode with pagination by clicking Curriculum Builder quick link", function () {
    userPostSetupPage.getCurriculumBuilderLink().click();
    userPostSetupPage.getCurriculumBuilderPageTitle().should('have.text', 'Curriculum Builder');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Curriculum Builder and return to School page", function () {
    userPostSetupPage.getCurriculumBuilderGoBackButton().click({ force: true });
  });

  it("Verify that the Timetable Management page should be displayed with Timetable page in an editable mode with pagination by clicking Curriculum Builder quick link", function () {
    userPostSetupPage.getTimetableManagementLink().click();
    userPostSetupPage.getTimeTableManagementTitle().should('have.text', 'Timetable Management');
  });


  it("Verify that click on ‘Go back’ button, to clear the changes to Timetable Management and return to School page", function () {
    cy.go('back')
  });

  it("Verify that the Admin Accounts page should be displayed with admin accounts page in an editable mode with pagination by clicking Curriculum Builder quick link", function () {
    userPostSetupPage.getAdminAccountsLink().click();
    userPostSetupPage.getTimetableManagementPageTitle().should('have.text', 'Admin Accounts');
  });


  it("Verify that click on ‘Save Changes’ button, to save the changes to Admin Accounts and return to School page", function () {
    userPostSetupPage.getAdminAccountsSaveChangesButton().click();
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Admin Accounts and return to School page", function () {
    userPostSetupPage.getAdminAccountsLink().click();
    userPostSetupPage.getAdminAccountsGoBackButton().click();
  });

  it("Verify that the Admin should be able to navigate to User Lists screen by clicking User icon", function () {
    userPostSetupPage.getUsersMenu().click({ force: true });
  });

  it("Verify that the teachers list should be shown under User Lists > Teacher tab", () => {
    userPostSetupPage.getTeacherList().should('be.visible');
  });

  it("Verify that the teachers can be filtering using teachers’ subjects drop down", () => {
    userPostSetupPage.getTeachersFilter().click();
    cy.wait(2000);
    userPostSetupPage.getTeachersFilterDropdownValues().each(($e2, index, $list) => {
      const text = $e2.text()
      if (text.includes("V - a")) {
        cy.wrap($e2).click({ force: true })
      }
    })
    userPostSetupPage.getTeacherClassesColumnValues().should("contain.text", "Grade 3 - A");
  });

  it("Verify that the Admin can navigate to teacher’s workload threshold using Workload Threshold button", () => {
    userPostSetupPage.getWorkloadThresholdsButton().click({ force: true });
    cy.wait(4000);
    userPostSetupPage.getWorkloadThresholdsPopupTitle().should('have.text', 'Teacher Workload Thresholds');
    userPostSetupPage.getWorkloadThresholdsCloseIcon().click({ force: true });
  });

});
