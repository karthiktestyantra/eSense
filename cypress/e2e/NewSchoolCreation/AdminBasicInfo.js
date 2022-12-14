const indexPage = require('../../support/pageObjects/LMS-1/IndexPage')
const loginPageAdmin = require('../../support/pageObjects/LMS-1/LoginPageAdmin')
const adminBasicInfoPage = require('../../support/pageObjects/LMS-1/AdminBasicInfoPage')
const adminDepartmentsPage = require('../../support/pageObjects/LMS-1/AdminDepartmentsPage')
const adminGradesPage = require('../../support/pageObjects/LMS-1/AdminGradesPage')
const dayjs = require('dayjs')

describe("Verify Admin School Creation Functionalities", function () {

  beforeEach(function () {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearLocalStorageSnapshot()
    Cypress.config('numTestsKeptInMemory', 0)
    cy.visit(Cypress.env("urlPreSetUpNewSchool"))
    indexPage.getAdmin().click()
    loginPageAdmin.getLoginTitle().should("have.text", "Hello Admin")
    cy.title().should("contain", "Top School")
    cy.fixture("LMS/newSchoolCreationBasicInfo").then(function (newSchoolCreationBasicInfo) {
      this.newSchoolCreationBasicInfo = newSchoolCreationBasicInfo
      cy.login(this.newSchoolCreationBasicInfo.userName, this.newSchoolCreationBasicInfo.password)
    })
    adminBasicInfoPage.getBasicInfoTitle().should("have.text", "Basic Information")
  })

  it("Verify PreSetUp Screen - 1", function () {
    adminBasicInfoPage.getProfilePicFileUpload().attachFile(this.newSchoolCreationBasicInfo.ProfilePic)
    adminBasicInfoPage.getInstituteName().clear().type(this.newSchoolCreationBasicInfo.instituteName)
    adminBasicInfoPage.getBranchName().clear().type(this.newSchoolCreationBasicInfo.branchName)
    adminBasicInfoPage.getTrust().clear().type(this.newSchoolCreationBasicInfo.trust)
    adminBasicInfoPage.getCalendarIconOfDateOfFirstOpening().click()
    adminBasicInfoPage.getCalendarPreviousIcon().click()
    adminBasicInfoPage.getCalendarYearDropdown().click()
    cy.forceClick(adminBasicInfoPage.getCalendarYear().contains(this.newSchoolCreationBasicInfo.dateOfFirstOpeningYear))
    adminBasicInfoPage.getCalendarNextIcon().click({ waitForAnimations: false })
    cy.wait(1000)
    adminBasicInfoPage.getCalendarDay().contains(this.newSchoolCreationBasicInfo.dateOfFirstOpeningDate).click({ waitForAnimations: false })
    adminBasicInfoPage.getAffiliationType().clear().type(this.newSchoolCreationBasicInfo.affiliationType)
    adminBasicInfoPage.getAffiliationNumber().clear().type(this.newSchoolCreationBasicInfo.affiliationNumber)
    adminBasicInfoPage.getCalendarIconOfAffiliationStartDate().click()
    cy.wait(1000)
    adminBasicInfoPage.getCalendarPreviousIcon().click()
    adminBasicInfoPage.getCalendarYearDropdown().click()
    cy.forceClick(adminBasicInfoPage.getCalendarYear().contains(this.newSchoolCreationBasicInfo.affiliationPeriodStartYear))
    adminBasicInfoPage.getCalendarNextIcon().click()
    adminBasicInfoPage.getCalendarDay().contains(this.newSchoolCreationBasicInfo.affiliationPeriodStartdate).click({ force: true })
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
    cy.get('body').then(($el) => {
      if ($el.find('[class*="delBtnBasicInfo"] img').length > 0) {
        adminDepartmentsPage.getDeleteIconPOCPreSetup().then(($el) => {
          var pocLen = $el.length
          cy.wrap(pocLen).as('pocLen')
        })
        cy.get('@pocLen').then((pocLen) => {
          for (let index = 0; index < pocLen; index++) {
            adminDepartmentsPage.getDeleteIconPOCPreSetup().eq(0).click()
            adminDepartmentsPage.getDeleteConfirmBtnPOCPreSetup().click()
            cy.wait(3000)
          }
        })
      }
    })
    adminBasicInfoPage.getAddPOCButton().click()
    adminBasicInfoPage.getPOCContactName().click().type(this.newSchoolCreationBasicInfo.POCContactName)
    adminBasicInfoPage.getPOCContactEmail().click().type(this.newSchoolCreationBasicInfo.POCContactEmail)
    adminBasicInfoPage.getPOCPhoneNumber().click().type(this.newSchoolCreationBasicInfo.POCPhoneNumber)
    adminBasicInfoPage.getPOCDesignation().click().type(this.newSchoolCreationBasicInfo.POCDesignation)
    adminBasicInfoPage.getPOCAddButton().click()
    cy.wait(2000)
  })

  it("Verify PreSetUp Screen - 2", function () {
    cy.wait(2500)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2500)
    //To delete department stream
    cy.get('body').then(($el) => {
      if ($el.find('[class*="departmentDeleteIcon"] img').length > 0) {
        adminDepartmentsPage.getDeleteIconGradesPreSetup().then(($el) => {
          var gradeLen = $el.length
          cy.wrap(gradeLen).as('gradeLen')
        })
        cy.get('@gradeLen').then((gradeLen) => {
          cy.log(gradeLen)
          for (let index = 0; index < gradeLen; index++) {
            adminDepartmentsPage.getDeleteIconGradesPreSetup().eq(0).click()
            cy.wait(1000)
            adminDepartmentsPage.getDeleteConfirmBtnGradesPreSetup().click()
            cy.wait(3000)
          }
        })
      }
    })
    adminDepartmentsPage.getAddDepartmentOption().click()
    cy.wait(2000)
    adminDepartmentsPage.getDepartmentName().type(this.newSchoolCreationBasicInfo.departmentName1)
    adminDepartmentsPage.getForGrades().click()
    cy.wait(1000)
    adminDepartmentsPage.getForGradesDynamic('Grade 11').click()
    cy.wait(1000)
    adminDepartmentsPage.getForGrades().click()
    adminDepartmentsPage.getMandatorySubjects().click()
    cy.wait(1000)
    adminDepartmentsPage.getMandatorySubjectsOption().first().click()
    adminDepartmentsPage.getMandatorySubjects().click()
    adminDepartmentsPage.getAddButton().click()
    cy.wait(4000)
    cy.get('body').then(($el) => {
      if ($el.find('[class*="closeModal"]').length > 0) {
        adminDepartmentsPage.getAddStreamCloseIcon().click()
      }
      cy.wait(1000)
    })
    adminDepartmentsPage.getAddDepartmentOption().click()
    cy.wait(2000)
    adminDepartmentsPage.getDepartmentName().type(this.newSchoolCreationBasicInfo.departmentName2)
    adminDepartmentsPage.getForGrades().click()
    cy.wait(1000)
    adminDepartmentsPage.getForGradesDynamic('Grade 12').click()
    cy.wait(1000)
    adminDepartmentsPage.getForGrades().click()
    adminDepartmentsPage.getMandatorySubjects().click()
    cy.wait(1000)
    adminDepartmentsPage.getMandatorySubjectsOption().last().click()
    adminDepartmentsPage.getMandatorySubjects().click()
    adminDepartmentsPage.getAddButton().click()
    cy.wait(4000)
    cy.get('body').then(($el) => {
      if ($el.find('[class*="closeModal"]').length > 0) {
        adminDepartmentsPage.getAddStreamCloseIcon().click()
      }
      cy.wait(1000)
    })
  })


  it("Verify PreSetUp Screen - 3", function () {
    cy.wait(2000)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2500)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2000)
    adminDepartmentsPage.getGradeCheckboxPreSetup().eq(0).uncheck()
    cy.wait(3000)
    adminDepartmentsPage.getGradeCheckboxPreSetup().eq(0).check()
    cy.wait(3000)
    //To delete the sections
    cy.get('body').then(($el) => {
      if ($el.find('[class*="sectionsBtn"]').length > 0) {
        adminDepartmentsPage.getSectionBtnPreSetup().then(($el) => {
          var sectionLen = $el.length
          cy.wrap(sectionLen).as('sectionLen')
        })
        cy.get('@sectionLen').then((sectionLen) => {
          for (let index = 0; index < sectionLen; index++) {
            adminDepartmentsPage.getSectionBtnPreSetup().eq(0).click()
            cy.wait(1000)
            adminDepartmentsPage.getDeleteBtnSectionPreSetup().click()
            cy.wait(1000)
            adminDepartmentsPage.getDeleteConfirmBtnSectionPreSetup().click()
            cy.wait(2000)
          }
        })
      }
    })
    //To Add Sections for Grades
    adminDepartmentsPage.getGradesTextPreSetup().then(($el) => {
      var actGrades = $el.text()
      cy.wrap(actGrades).as('actGrades')
    })
    var expGrades = this.newSchoolCreationBasicInfo.grades
    var sections = this.newSchoolCreationBasicInfo.sections
    cy.get('@actGrades').then((actGrades) => {
      for (let gradeIndex = 0; gradeIndex < expGrades.length; gradeIndex++) {
        cy.log(actGrades)
        if (actGrades.includes(expGrades[gradeIndex])) {
          for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
            cy.log(expGrades[gradeIndex])
            adminDepartmentsPage.getGradePlusIconPreSetupDynamic(expGrades[gradeIndex]).click()
            cy.wait(2000)
            adminDepartmentsPage.getSectionNameTextfieldPreSetup().clear().type(sections[sectionIndex])
            cy.wait(2000)
            cy.get('body').then(($el) => {
              if ($el.find('#deparment').length > 0) {
                adminDepartmentsPage.getStreamDropdownInSectionPreSetup().click()
                cy.wait(1000)
                cy.focused().click()
                cy.wait(2000)
              }
            })
            adminDepartmentsPage.getOptionalSubDropdownPreSetup().click({ force: true })
            cy.wait(1000)
            adminDepartmentsPage.getOptionalSubDropdownListChechboxPreSetup().then(($el) => {
              const uuid = () => Cypress._.random(1, $el.length - 1)
              const index = uuid()
              cy.wrap($el).eq(0).click()
              cy.wrap($el).eq(index).click()
              cy.wait(1000)
              cy.clickOnBody()
              adminDepartmentsPage.getAddSectionBtnPreSetup().click()
              cy.wait(2000)
            })
          }
        }
      }
    })
  })

  it("Verify PreSetUp Screen - Teacher [Add Basic Details]", function () {
    cy.wait(2000)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2500)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2000)
    adminDepartmentsPage.getContinueButton().click()
    cy.wait(3000)
    cy.get('body').then(($el) => {
      if ($el.find('[class*="TeacherAccounts_icon_del"] img').length > 0) {
        adminDepartmentsPage.getDeleteIconTeacherPreSetup().then(($el) => {
          var teacherLen = $el.length
          cy.wrap(teacherLen).as('teacherLen')
        })
        cy.get('@teacherLen').then((teacherLen) => {
          cy.log(teacherLen)
          for (let index = 0; index < teacherLen; index++) {
            adminDepartmentsPage.getDeleteIconTeacherPreSetup().eq(0).click()
            cy.wait(1000)
            adminDepartmentsPage.getDeleteConfirmBtnTeacherPreSetup().click()
            cy.wait(3000)
            cy.clickOnBody()
          }
        })
      }
    })
    //Add teacher by Bulk Upload
    cy.wait(2000)
    adminDepartmentsPage.getBulkUploadTeacherPreSetup().click()
    cy.wait(1000)
    adminDepartmentsPage.getFileUploadBulkUploadTeacherPreSetup().attachFile(this.newSchoolCreationBasicInfo.TeacherData)
    cy.wait(2000)
    adminDepartmentsPage.getFileUploadImportButtonTeacherPreSetup().should('be.visible').click()
    adminDepartmentsPage.getTeacherImportedMsgTeacherPreSetup().should('be.visible')
    cy.wait(2000)
    cy.reload()
    cy.wait(4000)
  })

  it("Verify PreSetUp Screen - Teacher [Add Academic Details and Sections & Subjects]", function () {
    cy.wait(2000)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2500)
    adminBasicInfoPage.getStepDotIconPreSetup().eq(0).click()
    cy.wait(2000)
    adminDepartmentsPage.getContinueButton().click()
    cy.wait(3000)
    adminDepartmentsPage.getEditTeacherOption().then((len) => {
      cy.log('Teachers Present ' + len.length)
      let teacherSection = 'A';
      let teacherGrade = 0;
      for (let index = 0; index < len.length; index++) {
        cy.log('Teacher Editing ' + (index + 1))
        cy.log('Teacher Section ' + teacherSection)
        cy.log('Teacher Grade ' + (teacherGrade + 1))
        adminDepartmentsPage.getEditTeacherOption().eq(index).scrollIntoView().click()
        cy.wait(5000)
        adminDepartmentsPage.getContinueBtnBasicDetailsTeacherPreSetup().click()
        cy.wait(5000)
        adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(0).click()
        cy.wait(1000)
        adminDepartmentsPage.getGenderDropdownList().then(($el) => {
          const uuid = () => Cypress._.random(0, $el.length - 1)
          const ran = uuid()
          cy.wrap($el).eq(ran).scrollIntoView().click()
        })
        cy.wait(1000)
        adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(1).click()
        cy.wait(1000)
        adminDepartmentsPage.getDropdownListCheckbox().then(($el) => {
          for (let check = 0; check < $el.length; check++) {
            if (check == 0 || check == Math.round($el.length / 2) || check == Math.round($el.length / 2) + 2 || check == Math.round($el.length / 2) - 2 || check == $el.length - 1) {
              adminDepartmentsPage.getDropdownListCheckbox().eq(check).check()
              cy.clickOnBody()
              adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(1).click()
            }
          }
        })
        cy.clickOnBody()
        adminDepartmentsPage.getAcademicDetailsAddQualificationBtnTeacherPreSetup().click()
        cy.wait(1000)
        adminDepartmentsPage.getQualificationTitleAcademicDetailsTeacherPreSetup().type(this.newSchoolCreationBasicInfo.qualificationTitle)
        adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(2).click()
        cy.wait(1000)
        adminDepartmentsPage.getGenderDropdownList().then(($el) => {
          const uuid = () => Cypress._.random(0, $el.length - 1)
          const ran = uuid()
          cy.wrap($el).eq(ran).scrollIntoView().click()
        })
        cy.wait(1000)
        adminDepartmentsPage.getQualificationAddBtnAcademicDetailsTeacherPreSetup().click()
        cy.wait(2000)
        adminDepartmentsPage.getContinueBtnBasicDetailsTeacherPreSetup().click()
        cy.wait(5000)
        adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(0).click()
        cy.wait(1000)
        adminDepartmentsPage.getSectionSubjectDropdownListCheckbox(this.newSchoolCreationBasicInfo.grades[teacherGrade]).scrollIntoView().check()
        cy.clickOnBody()
        cy.wait(1000)
        if (teacherSection == 'A') {
          adminDepartmentsPage.getSectionCheckBoxTeacherPreSetup().eq(0).check()
          cy.wait(1000)
          adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(1).click()
          cy.wait(1000)
          adminDepartmentsPage.getDropdownListCheckbox().then(($el) => {
            for (let check = 0; check < Math.round($el.length / 3); check++) {
              adminDepartmentsPage.getDropdownListCheckbox().eq(check).check()
              cy.clickOnBody()
              adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(1).click()
            }
          })
          cy.clickOnBody()
          cy.wait(1000)
          adminDepartmentsPage.getAddClassTeacherRadioBtn().eq(0).click()
          cy.wait(3000)
          teacherSection = 'B'
        }
        else if (teacherSection == 'B') {
          adminDepartmentsPage.getSectionCheckBoxTeacherPreSetup().eq(1).check()
          cy.wait(1000)
          adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(2).click()
          cy.wait(1000)
          adminDepartmentsPage.getDropdownListCheckbox().then(($el) => {
            for (let check = Math.round($el.length / 3); check < $el.length - Math.round($el.length / 3); check++) {
              adminDepartmentsPage.getDropdownListCheckbox().eq(check).check()
              cy.clickOnBody()
              adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(2).click()
            }
          })
          cy.clickOnBody()
          cy.wait(1000)
          teacherSection = 'C'
        }
        else if (teacherSection == 'C') {
          adminDepartmentsPage.getSectionCheckBoxTeacherPreSetup().eq(2).check()
          cy.wait(1000)
          adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(3).click()
          cy.wait(1000)
          adminDepartmentsPage.getDropdownListCheckbox().then(($el) => {
            for (let check = $el.length - 1; check > Math.round($el.length / 3); check--) {
              adminDepartmentsPage.getDropdownListCheckbox().eq(check).check()
              cy.clickOnBody()
              adminDepartmentsPage.getAcademicDetailsDropdownsTeacherPreSetup().eq(3).click()
            }
          })
          cy.clickOnBody()
          cy.wait(1000)
          teacherSection = 'A'
          teacherGrade++
        }
        adminDepartmentsPage.getContinueBtnBasicDetailsTeacherPreSetup().click()
        adminDepartmentsPage.getTeachedUpdatedSuccessMsg().should('be.visible')
        cy.wait(6000)
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearLocalStorageSnapshot()
      }
    })
    //adminDepartmentsPage.getContinueButton().click()
    cy.wait(6000)
  })

})
