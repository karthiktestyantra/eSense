/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPageAdmin from "../../../support/pageObjects2/LoginPageAdmin";
import AdminBasicInfoPage from "../../../support/pageObjects2/AdminBasicInfoPage";
import AdminDepartmentsPage from "../../../support/pageObjects2/AdminDepartmentsPage";
import AdminGradesPage from "../../../support/pageObjects2/AdminGradesPage";
import AdminInfrastructurePage from "../../../support/pageObjects2/AdminInfrastructurePage";
import AdminAccountsPage from "../../../support/pageObjects2/AdminAccountsPage";
import CurriculumBuilderPage from "../../../support/pageObjects2/CurriculumBuilderPage";
import TeacherAccountsPage from "../../../support/pageObjects2/TeacherAccountsPage";
import TimetableBuilderPage from "../../../support/pageObjects2/TimetableBuilderPage";
import UserPostSetupPage from "../../../support/pageObjects2/UserPostSetupPage";

const ip = new IndexPage();
const lpa = new LoginPageAdmin();
const abip = new AdminBasicInfoPage();
const adp = new AdminDepartmentsPage();
const agp = new AdminGradesPage();
const aip = new AdminInfrastructurePage();
const aap = new AdminAccountsPage();
const cbp = new CurriculumBuilderPage();
const tap = new TeacherAccountsPage();
const ttb = new TimetableBuilderPage();
const upp = new UserPostSetupPage();

describe("Verify the User Menu related Functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.staging.topschool.co.in")
    cy.exec("npm cache clear --force");
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("validAdminLoginCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });
  beforeEach(function () {
    cy.fixture("addNewStudent").then(function (addNewStudentData) {
      this.addNewStudentData = addNewStudentData;
    });
    cy.fixture("teacherSearchClasses").then(function (searchClassesData) {
      this.searchClassesData = searchClassesData;
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

  it("Verify that user is able to click Students tab", function(){
  tap.getUsersMenu().click();
  tap.getStudentsTab().click({ force: true });
  });

    it("Verify that Students tab should have add student + icon", function(){
      tap.getAddStudentIcon().should('be.visible');
    });

    it("Verify that Add Student screen should be displayed by clicking add student + icon", function(){
      tap.getAddStudentIcon().click();
      tap.getAddStudentScreenTitle().should('have.text', 'Add Student');
    });

    it("Verify that Add Student screen should have Basic Details and Academic Details tab", function(){
      tap.getStudentsBasicDetailsTab().should('be.visible');
      tap.getStudentsAcademicDetailsTab().should('be.visible');
    });

    it("Verify that Basic Details should have Upload Profile picture, Primary details section, Guardian details section, Address section", function(){
      tap.getStudentPrimaryDetailsSection().should('be.visible');
      tap.getStudentGuardianDetailsSection().scrollIntoView().should('be.visible');
      tap.getStudentAddressSection().scrollIntoView().should('be.visible');
    });

    it("Verify that Primary details section should have First Name, Last Name, Email, Date of Birth, Gender, Contact Number and Blood Group", function(){
      //changed
      tap.getStudentFullName().scrollIntoView().should('be.visible');
      tap.getStudentEmail().scrollIntoView().should('be.visible');
      tap.getStudentDOB().scrollIntoView().should('be.visible');
      tap.getStudentGender().scrollIntoView().should('be.visible');
      tap.getStudentContactNumber().scrollIntoView().should('be.visible');
      tap.getStudentBloodGroup().scrollIntoView().should('be.visible');
    });

    it("Verify that Guardian details section should have Father's Name, Mother's Name, Father's Email, Mother's Email, Father's Occupation, Mother's Occupation, Father's Contact and Mother's Contact", function(){
      //changed
      tap.getSelectRelationDrpDwn().last().scrollIntoView().should('be.visible');
      tap.getGuardianNameTxtFld().scrollIntoView().should('be.visible');
      tap.getContactNumTxtFld().last().scrollIntoView().should('be.visible');
      tap.getEmailAdrssTxtFld().last().scrollIntoView().should('be.visible');
    });

    it("Verify that Address section should have Address Line 1, Address Line 2, Pincode, State and City", function(){
      tap.getStudentAddressLineOne().scrollIntoView().should('be.visible');
      tap.getStudentAddressLineTwo().scrollIntoView().should('be.visible');
      tap.getStudentPincode().scrollIntoView().should('be.visible');
      tap.getStudentState().scrollIntoView().should('be.visible');
      tap.getStudentCity().scrollIntoView().should('be.visible');
    });

    it("Verify that Add Student screen should have Add Student button, Cancel Button and Close icon", function(){
      tap.getStudentsAddStudentButton().scrollIntoView().should('be.visible');
      tap.getStudentsCancelButton().scrollIntoView().should('be.visible');
      tap.getStudentsCloseIcon().scrollIntoView().should('be.visible');
      tap.getStudentsCloseIcon().click({force:true});
      tap.getDiscardBtn().click({force:true});
      tap.getStudentsTab().click({ force: true });
    });

    it("Verify that the user is able to view search student search box", function(){
      tap.getStudentSearch().should('be.visible');
    });

    it("Verify that the user is able to search particular student", function(){
      upp.getStudentNameList().each((ele, index, $list) => {
      upp.getStudentSearchBar().type(Cypress.$(ele).text());
      upp.getStudentNameList().should("contain", Cypress.$(ele).text());
      upp.getStudentSearchBar().clear();
    });
  });

  it("Verify that on Click on School menu from the side menus, School page should be load", function(){
  upp.getSchoolMenu().click({force:true});
  });

  it("Verify that the Quick Links and School Notice Board section should be displayed", function(){
    upp.getQuickLinksTitle().should('have.text','Quick Links');
    upp.getSchoolNoticeBoardTitle().should('have.text','School Notice Board');
  });

  it("Verify that the Quick Links should have School Information, Grades & Departments, School Infrastructure, Curriculum Builder, Timetable Management and Admin Accounts", function(){
    upp.getSchoolInformationLink().should('be.visible');
    upp.getGradesAndDepartmentsLink().should('be.visible');
    upp.getSchoolInfrastructureLink().should('be.visible');
    upp.getCurriculumBuilderLink().should('be.visible');
    upp.getTimetableManagementLink().should('be.visible');
    upp.getAdminAccountsLink().should('be.visible');
  });

  it("Verify that the Add Notice button should be displayed", function(){
    upp.getAddNoticeButton().should('be.visible');
  });

  it("Verify that the School Information page should be displayed by clicking School Information quick link", function(){
    upp.getSchoolInformationLink().click();
    upp.getSchoolInformationPageTitle().should('have.text','School Information');
    cy.wait(3000);
  });

  it("Verify that click on ‘Save Changes’ button, to save the changes to School basic information and return to School page", function(){
    upp.getSchoolInfoSaveChangesButton().click({force:true});
    upp.getSchoolInformationLink().should('have.text','School Information');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to School basic information and return to School page", function(){
    upp.getSchoolInformationLink().click();
    upp.getSchoolInfoGoBackButton().click();
  });

  it("Verify that the Grade and Departments page should be displayed with Academic Setup Grades and Dept page in an editable mode with pagination by clicking Grade and Departments quick link", function(){
    upp.getGradesAndDepartmentsLink().click();
    upp.getGradesandDepartmentsPageTitle().should('have.text','Grades & Stream');
    upp.getDepartmentsTab().should('be.visible');
    upp.getGradesTab().should('be.visible');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Grades and Departments and return to School page", function(){
    upp.getGradesTab().click();
    upp.getDeptandGradesGoBackButton().click({force:true});  
    cy.wait(2000);
  });

  it("Verify that the School Infrastructure page should be displayed with Infrastructure page in an editable mode with pagination by clicking School Infrastructure quick link", function(){
    upp.getSchoolInfrastructureLink().click();
    upp.getSchoolInfrastructurePageTitle().should('have.text','School Infrastructure');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to School Infrastructure and return to School page", function(){
    upp.getSchoolInfrastructureGoBackButton().click();
  });

  it("Verify that the Curriculum Builder page should be displayed with Curriculum page in an editable mode with pagination by clicking Curriculum Builder quick link", function(){
    upp.getCurriculumBuilderLink().click();
    upp.getCurriculumBuilderPageTitle().should('have.text','Curriculum Builder');
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Curriculum Builder and return to School page", function(){
    upp.getCurriculumBuilderGoBackButton().click({force:true});
  });

  it("Verify that the Timetable Management page should be displayed with Timetable page in an editable mode with pagination by clicking Curriculum Builder quick link", function(){
    upp.getTimetableManagementLink().click();
    upp.getTimeTableManagementTitle().should('have.text','Timetable Management');
  });

  
  it("Verify that click on ‘Go back’ button, to clear the changes to Timetable Management and return to School page", function(){
    cy.go('back')
  });

  it("Verify that the Admin Accounts page should be displayed with admin accounts page in an editable mode with pagination by clicking Curriculum Builder quick link", function(){
    upp.getAdminAccountsLink().click();
    upp.getTimetableManagementPageTitle().should('have.text','Admin Accounts');
  });

  
  it("Verify that click on ‘Save Changes’ button, to save the changes to Admin Accounts and return to School page", function(){
    upp.getAdminAccountsSaveChangesButton().click();
  });

  it("Verify that click on ‘Go back’ button, to clear the changes to Admin Accounts and return to School page", function(){
    upp.getAdminAccountsLink().click();
    upp.getAdminAccountsGoBackButton().click();
  });

  it("Verify that the Admin should be able to navigate to User Lists screen by clicking User icon", function(){
    upp.getUsersMenu().click({force:true});
  });

  it("Verify that the teachers list should be shown under User Lists > Teacher tab", () =>{
    upp.getTeacherList().should('be.visible');
  });

  it("Verify that the teachers can be filtering using teachers’ subjects drop down", () =>{
    upp.getTeachersFilter().click();
    cy.wait(2000);
    upp.getTeachersFilterDropdownValues().each(($e2,index,$list)=> {
      const text = $e2.text()
     if (text.includes("V - a")) {
       cy.wrap($e2).click({force:true})
     }
    })
    upp.getTeacherClassesColumnValues().should("contain.text", "Grade 3 - A");
  });

  it("Verify that the Admin can navigate to teacher’s workload threshold using Workload Threshold button", () =>{
    upp.getWorkloadThresholdsButton().click({force:true});
    cy.wait(4000);
    upp.getWorkloadThresholdsPopupTitle().should('have.text','Teacher Workload Thresholds');
    upp.getWorkloadThresholdsCloseIcon().click({force:true});
  });


  });
