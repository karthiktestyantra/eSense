/// <reference types="Cypress"/>

import AdminGradePage from "../../support/pageObjects/AdminGradePage";
import AdminPostSetupHomePage from "../../support/pageObjects/AdminPostSetupHomePage";

const Adminhome = new AdminPostSetupHomePage();
const Admingrade = new AdminGradePage();

describe("Verify Grades and department page functionalities", function () {
    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
        cy.AdminPostSetup(validAdminLoginData.fNew,validAdminLoginData.password)
        })
      })
      beforeEach(function (){
        cy.fixture("sprint14CurriculumBuilder").then(function(curriculumBuilder){
          this.curriculumBuilder = curriculumBuilder;
        })
      })

it("Validate admin Click on “Grades and subject ” Tab, Will show all list of Grades along with its section/EL-3988/ES3988_02",function(){
    Adminhome.getSchoolLnk().click({force:true})
    Adminhome.getGradesAndDeptSectionBtn().click()
    Adminhome.getGradesAndDeptSectionBtn2().click()
    Admingrade.getGradeLst().should('be.visible')
  })

  it("Validate admin click on Quick link, “Grade and Departments” page with Academic Setup Grades and Department page in an editable mode with pagination/EL-3988/ES3988_01",function(){
    Admingrade.getGradeLst().each(($e1,index,$list) =>{
      const actualText = $e1.text()
      if(actualText.includes("Grade 3")){
        cy.wrap($e1).click({force:true})
        Admingrade.getEditableGradeLst().should('be.enabled')
      }
    })
  })

  it("Validate admin click on particular Section '+' button, Add new section/Edit  Pop-up screen will be displayed/EL-3988/ES3988_03",function(){
    Adminhome.getGradesAndDeptSectionBtn2().click()
    Admingrade.getGradeLst().each(($e2,index,$list) =>{
      const actualText = $e2.text()
      if(actualText.includes("Grade 8")){
        Admingrade.getSectionAddBtn().eq(index).click({force:true})
      }
    })
    Admingrade.getAddNewSectionPopupTitle().should('contain',this.curriculumBuilder.AddSectionTitle)
  })

  it("Validate admin click on the “Class Details” Quick link will navigate to Overview “Class Dashboard” as per new UI Screen/EL-3988/ES3988_04",function(){
      Admingrade.getAddSectionCloseBtn().click()
      Admingrade.getSectionsLst().eq(0).click()
    Admingrade.getClassDetailBtnInAddSectionPopup().click()
    Admingrade.getClassDetailsTitle().contains(this.curriculumBuilder.ClassDetailTitle)
  })
  })