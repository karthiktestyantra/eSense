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

describe("Verify the Teacher Accounts Functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.topschool.co.in")
    cy.exec("npm cache clear --force");
    ip.getAdmin().click();
    cy.reload();
    cy.fixture("validPreSetupAdminCredentials").then(function (
      validAdminLoginData
    ) {
      this.validAdminLoginData = validAdminLoginData;
    });
  });
  beforeEach(function () {
    cy.fixture("mySchoolBasicInfo").then(function (basicInfoData) {
      this.basicInfoData = basicInfoData;
    });
    cy.fixture("addNewTeacher").then(function (addNewTeacherData) {
      this.addNewTeacherData = addNewTeacherData;
    });
    cy.fixture("addNewStudent").then(function (addNewStudentData) {
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
    abip.getFiveCarouselIcon().click({ force: true });
    aap.getContinueButton().click({ force: true });
    cbp.getContinueButton().click({ force: true });
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
