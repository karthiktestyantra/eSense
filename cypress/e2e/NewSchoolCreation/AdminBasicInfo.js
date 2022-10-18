const indexPage = require('../../support/pageObjects/LMS-1/IndexPage')
const loginPageAdmin = require('../../support/pageObjects/LMS-1/LoginPageAdmin')
const adminBasicInfoPage = require('../../support/pageObjects/LMS-1/AdminBasicInfoPage')
const adminDepartmentsPage = require('../../support/pageObjects/LMS-1/AdminDepartmentsPage')
const adminGradesPage = require('../../support/pageObjects/LMS-1/AdminGradesPage')

describe("Verify Admin School Creation Functionalities", function () {

  before(function () {
    cy.visit('https://prodautomation1.thetopschool.com')
    indexPage.getAdmin().click()
    cy.reload()
    cy.fixture("LMS/validPreSetupAdminCredentials").then(function (validAdminLoginData) {
      this.validAdminLoginData = validAdminLoginData;
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/newSchoolCreationBasicInfo").as("newSchoolCreationBasicInfo")
  })

  it("Verify that the successful admin login the page should be redirected into setup page", function () {

    loginPageAdmin.getLoginTitle().should("have.text", "Hello Admin")
    cy.title().should("contain", "Top School")
    cy.login(
      "shamikbhattacharya01",
      "Test@12345"
    )
    adminBasicInfoPage.getBasicInfoTitle().should("have.text", "Basic Information")
  })

  it("Verify that the School & Branch section should have Institution Name *, Branch Name *, Date of first Opening * and Trust/Society/Company fields and the fields should be enabled", function () {
    adminBasicInfoPage.getProfilePicFileUpload().attachFile(this.newSchoolCreationBasicInfo.ProfilePic)
    adminBasicInfoPage.getInstituteName().clear().type(this.newSchoolCreationBasicInfo.instituteName)
    adminBasicInfoPage.getBranchName().clear().type(this.newSchoolCreationBasicInfo.branchName)
    adminBasicInfoPage.getTrust().clear().type(this.newSchoolCreationBasicInfo.trust)
    adminBasicInfoPage.getCalendarIconOfDateOfFirstOpening().click()
    adminBasicInfoPage.getCalendarPreviousIcon().click()
    adminBasicInfoPage.getCalendarYearDropdown().click()
    cy.forceClick(adminBasicInfoPage.getCalendarYear().contains(this.newSchoolCreationBasicInfo.dateOfFirstOpeningYear))
    adminBasicInfoPage.getCalendarNextIcon().click()
    adminBasicInfoPage.getCalendarDay().contains(this.newSchoolCreationBasicInfo.dateOfFirstOpeningDate).click()
    adminBasicInfoPage.getAffiliationType().clear().type(this.newSchoolCreationBasicInfo.affiliationType)
    adminBasicInfoPage.getAffiliationNumber().clear().type(this.newSchoolCreationBasicInfo.affiliationNumber)
    adminBasicInfoPage.getCalendarIconOfAffiliationStartDate().click()
    cy.wait(1000)
    adminBasicInfoPage.getCalendarPreviousIcon().click()
    adminBasicInfoPage.getCalendarYearDropdown().click()
    cy.forceClick(adminBasicInfoPage.getCalendarYear().contains(this.newSchoolCreationBasicInfo.affiliationPeriodStartYear))
    adminBasicInfoPage.getCalendarNextIcon().click()
    adminBasicInfoPage.getCalendarDay().contains(this.newSchoolCreationBasicInfo.affiliationPeriodStartdate).click()
    adminBasicInfoPage.getCalendarIcoOfAffiliationEndDate().click()
    cy.wait(1000)
    adminBasicInfoPage.getCalendarYearDropdown().click()
    cy.forceClick(adminBasicInfoPage.getCalendarYear().contains(this.newSchoolCreationBasicInfo.affiliationPeriodEndYear))
    adminBasicInfoPage.getCalendarDay().contains(this.newSchoolCreationBasicInfo.affiliationPeriodEnddate).click()
    adminBasicInfoPage.getPhoneNumber().clear().type(this.newSchoolCreationBasicInfo.phoneNumber)
    adminBasicInfoPage.getWebsite().clear().type(this.newSchoolCreationBasicInfo.website)
    adminBasicInfoPage.getAddressOne().clear().type(this.newSchoolCreationBasicInfo.addressLine1)
    adminBasicInfoPage.getAddressTwo().clear().type(this.newSchoolCreationBasicInfo.addressLine2)
    adminBasicInfoPage.getEmail().click()
    adminBasicInfoPage.getEmail().clear().type(this.newSchoolCreationBasicInfo.emailAddress)
    adminBasicInfoPage.getPincode().click()
    adminBasicInfoPage.getPincode().clear().type(this.newSchoolCreationBasicInfo.pincode)
    adminBasicInfoPage.getState().should('have.value', this.newSchoolCreationBasicInfo.state)
    adminBasicInfoPage.getCity().should('have.value', this.newSchoolCreationBasicInfo.city)
    adminBasicInfoPage.getAddPOCButton().click()
    adminBasicInfoPage.getPOCContactName().click().type(this.newSchoolCreationBasicInfo.POCContactName)
    adminBasicInfoPage.getPOCContactEmail().click().type(this.newSchoolCreationBasicInfo.POCContactEmail)
    adminBasicInfoPage.getPOCPhoneNumber().click().type(this.newSchoolCreationBasicInfo.POCPhoneNumber)
    adminBasicInfoPage.getPOCDesignation().click().type(this.newSchoolCreationBasicInfo.POCDesignation)
    adminBasicInfoPage.getPOCAddButton().click()
    cy.wait(2000)
    cy.forceClick(adminBasicInfoPage.getContinueButton())
  })

  it("Verify that the Add Department pop up should be displayed to add the department by clicking the “+ Add Department” ", function () {
    adminDepartmentsPage.getAddDepartmentOption().click();
    cy.wait(2000)
    // to be continued
  adminDepartmentsPage.getDepartmentName().should("be.visible");
    adminDepartmentsPage.getForGrades().should("be.visible");
    adminDepartmentsPage.getMandatorySubjects().should("be.visible");
    adminDepartmentsPage.getAddButton().should("be.visible");
    adminDepartmentsPage.getCancelButton().should("be.visible");
    adminDepartmentsPage.getCloseIcon().should("be.visible");
    adminDepartmentsPage.getCloseIcon().click();
  });

  it("Verify that the Department should allow the admin to enter the text", function () {
    adminDepartmentsPage.getWholeDeptPage().scrollTo("bottom", { ensureScrollable: false });
    adminDepartmentsPage.getAddDepartmentOption().click({ force: true });
    adminDepartmentsPage.getDepartmentName().type(this.departmentData.departmentName);
  });

  it("Verify that the admin is able to select the grades, mandatory subjects and add the department", function () {
    adminDepartmentsPage.getForGrades().click();
    adminDepartmentsPage.getForGradesOption4().first().click();
    cy.wait(1000);
    adminDepartmentsPage.getForGrades().click();
    adminDepartmentsPage.getMandatorySubjects().click();
    cy.wait(1000);
    adminDepartmentsPage.getMandatorySubjectsOption().first().click();
    adminDepartmentsPage.getMandatorySubjects().click();
    adminDepartmentsPage.getAddButton().click();
    cy.wait(2000);
  });

  

  it("Verify that the Edit icon and Delete icon to be provided against each row of data", function () {
    cy.wait(2000);
    adminDepartmentsPage.getDepartmentEditIcon().should("be.visible");
    adminDepartmentsPage.getDeptDeleteIcon().scrollIntoView().should("be.visible");
  });

  it("Verify that the Edit Department pop up should be displayed by clicking the edit icon of the selected department", function () {
    adminDepartmentsPage.getDepartmentEditIcon().click();
    adminDepartmentsPage.getEditDepartmentTitle().should("be.visible");
  });

  it("Verify that the Admin should be able to edit the Department name", function () {
    adminDepartmentsPage.getDepartmentName().clear();
    adminDepartmentsPage.getDepartmentName().type(this.departmentData.editDepartmentName);
  });

  it("Verify that by clicking Save Changes button should save the entered data and focus should be back to Step B", function () {
    adminDepartmentsPage.getAddButton().click();
    adminDepartmentsPage.getStepBContent().should("have.text", "B");
  });

  it("Verify that the Edit Department should be closed by clicking close icon", function () {
    adminDepartmentsPage.getDepartmentEditIcon().click();
    adminDepartmentsPage.getCloseIcon().click();
    adminDepartmentsPage.getStepBContent().should("have.text", "B");
  });

  it("Verify that clicking on Delete icon against the row should pop up a modal window asking for the confirmation with Delete Department and Cancel option", function () {
    adminDepartmentsPage.getDeptDeleteIcon().click();
    adminDepartmentsPage.getDeletePopupDeleteButton().should("be.visible");
    adminDepartmentsPage.getDeletePopupCancelButton().should("be.visible");
  });

  it("Verify that clicking on 'Cancel' button Should close the modal pop up and focus should be back to Step B", function () {
    adminDepartmentsPage.getDeletePopupCancelButton().click();
    adminDepartmentsPage.getStepBContent().should("have.text", "B");
  });

  it("Verify the admin is able to delete the added department", function () {
    adminDepartmentsPage.getDepartmentRows().then((ele) => {
      cy.log(ele.length);
      for (let i = 0; i < ele.length; i++) {
        adminDepartmentsPage.getDepartmentNames(i).then((el) => {
          cy.log(el.text());
          if (el.text() === this.departmentData.departmentName) {
            adminDepartmentsPage.getDepartmentDeleteIcon(i).click();
            adminDepartmentsPage.getDeletePopupDeleteButton().click();
            adminDepartmentsPage
              .getDeleteDepartmentPopup()
              .should("contain", " has been deleted.");
          }
        });
      }
    });
  });

  it("Verify that clicking on Continue should be moved to Step C, Which is Grades", function () {
    adminDepartmentsPage.getContinueButton().click();
    adminGradesPage.getStepCContent().should("have.text", "C");
  });

})
