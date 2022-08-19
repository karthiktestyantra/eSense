/// <reference types="Cypress"/>

import AdminGradeBookPage from "../../support/pageObjects/AdminGradeBookPage";
import AdminPostSetupHomePage from "../../support/pageObjects/AdminPostSetupHomePage";

const home = new AdminPostSetupHomePage();
const gradebook = new AdminGradeBookPage();

describe("Verify Admin Account Page functionalities", function () {
  before(function () {
   cy.visit(Cypress.env('urlQA'))
   cy.fixture("AdminLoginCredentials").then(function (validAdminLoginData) {
       cy.AdminPostSetup(validAdminLoginData.newUser,validAdminLoginData.password)
       })
  })
  beforeEach(function (){
    cy.fixture("AdminReports").then(function(report){
      this.report = report;
    })
  })

 //pre-condition
 it("Validate user clicks on “Create Template”, the user redirected to the “Create New Template” screen/EL-4151/ES4151_02",function(){
    home.getReportsSectionLnk().click({force:true})
    gradebook.getStudentGradebookLnk().click()
    gradebook.getStudentGradeBooktitle().should('have.text',this.report.title)
    gradebook.getCreateTemplateBtn().click()
    gradebook.getNewTemplateTitleTxt().should('have.text',this.report.Create_Template)
 })

 it("Validate user is able to click on 'My school' radio button/EL-4151/ES4151_03",function(){
    gradebook.getTopSchoolRadioBtn().click()
    gradebook.getMySchoolRadioBtn().should('be.enabled').click()
 })

 it("Validate user is able to Click on 'Grade' drop down filed, List of values to be loaded based on Grades onboarded for the school/EL-4151/ES4151_05",function(){
    gradebook.getGradeDrpDwn().click()
    gradebook.getGradeLst().should('have.length.gte',10)
    gradebook.getGradeLst().contains(this.report.Grade).click()
 })

 it("Validate user is able to Click on 'Number of terms' drop down filed/EL-4151/ES4151_08",function(){
    gradebook.getNoOfTermsDrpDwn().click({force:true})
    gradebook.getSectionsLst().should('have.length.gte',1)
    gradebook.getSectionsLst().contains(this.report.Terms).click()
 })

 it("Validate user able to click on “Add Test type” in Scholastic activities/EL-4151/ES4151_09",function(){
    gradebook.getAddTestBtn().click({force:true})
 })

 it("Validate whether user is able to allow to add Maximum 5 tests type or not/EL-4151/ES4151_10",function(){
    for(let i=0;i<=4;i++){
        gradebook.getAddTestBtn().click({force:true})
        cy.wait(1000)
    }
    gradebook.getAlertMsgTxt().should('have.text',"Maximum five test  only allowed")
 })

 it("Validate User is able to delete the test added/EL-4151/ES4151_16",function(){
    gradebook.getDltTestBtnLst().each(($e1,index,$list)=>{
        gradebook.getDltTestBtnLst().eq(0).click({force:true})
    })
 })

 it("Validate user is abe to click on term drop down filed/EL-4151/ES4151_11",function(){
    gradebook.getAddTestBtn().click({force:true})
    gradebook.getAddTestTermDrpDwn().click({force:true})
 })

 it("Validate user selected is 1 then Term 1 to be populated in all the test/EL-4151/ES4151_12",function(){
    gradebook.getAddTestTermDrpDwnLstTxt().should('have.text',1).click()
    gradebook.getAddTestTermDrpDwn().click({force:true})
 })

 it("Validate user selected is 2 then Term 1 and Term 2 to be populated in all the test/EL-4151/ES4151_13",function(){
    gradebook.getNoOfTermsDrpDwn().click({force:true})
    gradebook.getSectionsLst().contains(2).click()
    gradebook.getAddTestTermDrpDwnLstTxt().should('have.text',12)
    cy.wait(1000)
    gradebook.getSectionsLst().eq(1).click()
 })

 it("Validate user is able to List the values fetched from “Test type” master (eSense admin DB)/EL-4151/ES4151_14",function(){
   gradebook.getAddTestTstTypeDrpdwn().click({force:true})
   gradebook.getSectionsLst().contains("Annual examination").click()
 })

 it("Validate user is able to Click on 'Section' drop down filed, List of values to be loaded based on section added for the Grade selected during onboarding for the school. By default it will select all sections/EL-4151/ES4151_06",function(){
   gradebook.getSectionDrpDwn().click({force:true})
   gradebook.getSectionsLst().should('have.length.gte',1)
   gradebook.getSectionsLst().contains(this.report.Section).click()
})

it("Validate user is abel to select Number from 0 to 100 in multiple of 5/EL-4151/ES4151_15",function(){
   home.getReportsSectionLnk().click({force:true})
   gradebook.getStudentGradebookLnk().click()
   gradebook.getCreateTemplateBtn().click()
   gradebook.getAddTestBtn().click({force:true})
   cy.wait(1000)
   gradebook.getMaxMarksDrpDwn().click({force:true})
   for(let i=1;i<=10;i++){
      let txt = Number(i*5);
      gradebook.getSectionsLst().eq(i).should('have.text',txt);
   }
   gradebook.getSectionsLst().contains(20).click()
})

it("Validate user clicks on “Add Subjects” button the list of mandatory and optional subjects with code should be populated based on the grade and section selected/EL-4151/ES4151_17",function(){
    gradebook.getGradeDrpDwn().click()
    gradebook.getGradeLst().contains(this.report.Grade).click()
    gradebook.getNoOfTermsDrpDwn().click()
    gradebook.getSectionsLst().contains(this.report.Terms).click()
    gradebook.getSectionDrpDwn().click({force:true})
    gradebook.getSectionsLst().contains(this.report.Section).click()
    gradebook.getNoOfTermsDrpDwn().click({force:true})
    gradebook.getSectionsLst().eq(0).click()
    gradebook.getAddTestTstTypeDrpdwn().click({force:true})
    gradebook.getSectionsLst().contains("Annual examination").click()
    gradebook.getAddSubBtn().click({force:true})
    gradebook.getAddSubdrpDwnInAddSub().click({force:true})
    gradebook.getSectionsLst().contains("Tamil").click({force:true})
   //  gradebook.getCodeTxtLst().should('contain.text',"Mathematics").and('contain.text',"Hindi")
   //  .and('contain.text',"English").and('contain.text',"EVS")
   //  gradebook.getSubTxtLst().should('contain.text',"Mathematics").and('contain.text',"Hindi")
   //  .and('contain.text',"English").and('contain.text',"EVS")
})

it("Validtae subject is selected from the dropdown, system should not allow user to select the same subject again and subject should be grey-out in the list/EL-4151/ES4151_18",function(){
   gradebook.getAddTheoryBtnLst().eq(1).click({force:true})
   gradebook.getAddTestTypeDrpDwnInAddTheory().click({force:true})
   gradebook.getSectionsLst().contains("Annual examination").click({force:true})
   gradebook.getAddTestBtn().click({force:true})
   gradebook.getAddTestTermDrpDwn().click({force:true})
   gradebook.getSectionsLst().eq(0).click()
   gradebook.getAddTestTstTypeDrpdwn().click({force:true})
   gradebook.getSectionsLst().contains("Half Yearly").click({force:true})
   gradebook.getMaxMarksDrpDwn().click({force:true})
   gradebook.getSectionsLst().contains(20).click({force:true})
   gradebook.getAddTheoryBtnLst().eq(1).click({force:true})
   gradebook.getAddTestTypeDrpDwnInAddTheory().click({force:true})
   gradebook.getAddTheoryAddTermDrpDwnLst().contains("Annual examination").should('not.exist')
})

it("Validate user clicks on Add theory and practical option, following details should be captured/EL-4151/ES4151_19",function(){
   gradebook.getAddTheoryTheoryFld().should('be.enabled').and('be.enabled')
   gradebook.getAddTheoryPracticalFld().should('be.enabled').and('be.enabled')
})

it("Validate user get List of values based on test type added in “Add Test and Subjects to Scholastic details” section",function(){
   gradebook.getAddTestTypeDrpDwnInAddTheory().click({force:true})
   gradebook.getAddTheoryAddTermDrpDwnLst().should('contain.text',"Half Yearly")
})

it("Validate whether Number (should not exceed the “Test type max. marks”)/EL-4151/ES4151_21",function(){
   gradebook.getAddTheoryAddTermDrpDwnLst().contains("Half Yearly").click({force:true})
   gradebook.getAddTheoryTheoryFld().click({force:true}).type(20,{force:true})
   cy.contains("Marks should  be equal to the  max marks of the test").should('not.exist')
})

it("Validate whether error is thrown when marks exceeds or not/EL-4151/ES4151_22",function(){
   gradebook.getAddTheoryTheoryFld().click({force:true}).type(25,{force:true})
   gradebook.getErrorMsgTxt().should('have.text',"Marks should  be equal to the  max marks of the test")
})

it("Validate user can delete the subject or Theory and Practical  added to the subject/EL-4151/ES4151_25",function(){
   gradebook.getAddTheoryDltBtnLst().click({force:true})
})

it("Validate user is able to add Co-Scholastic Activities on clicking on 'Add activity'/EL-4151/ES4151_26",function(){
   cy.scrollTo('bottom')
   gradebook.getAddActivityBtn().click({force:true})
   gradebook.getActivityDrpDwn().should('be.visible')
})

it("Validate User can add maximum 4 Activities/EL-4151/ES4151_27",function(){
   for (let i=0;i<=3;i++){
      gradebook.getAddActivityBtn().click({force:true})
   }
   gradebook.getAlertMsgTxt().contains("Maximum Four Activity can be Added").should('be.visible')
})

it("Validate user can delete the Activity added/EL-4151/ES4151_29",function(){
   gradebook.getDltActivityBtnLst().each(($e1,index)=>{
      gradebook.getDltActivityBtnLst().eq(0).click({force:true})
   })
})

it("Validtate user can enter Alpha + Special characters in Activity text field/EL-4151/ES4151_28",function(){
   gradebook.getAddActivityBtn().click({force:true})
   gradebook.getActivityDrpDwn().type("123aws",{force:true})
})

it("Validate user click on Save and Preview button, redirected to the Template preview screen/EL-4151/ES4151_32",function(){
   gradebook.getDltTestBtnLst().eq(1).click({force:true})
   gradebook.getAddTheoryBtnLst().eq(1).click({force:true})
   gradebook.getAddTestTypeDrpDwnInAddTheory().click({force:true})
   gradebook.getAddTheoryAddTermDrpDwnLst().contains("Half Yearly").click({force:true})
   gradebook.getAddTheoryTheoryFld().click({force:true}).type(20,{force:true})
   gradebook.getPracticalFld().type(0,{force:true})
   gradebook.getSaveAndPreviewBtn().click({force:true})
   cy.contains("Gradebook Grade 10 Preview").should('be.visible')
})

it("Validtae user click on Cancel button, redirected to the Template list screen/EL-4151/ES4151_33",function(){
   gradebook.getCancelBtn().click()
})

it("Validate user is able to view the details of the gradebook template by clicking the “View” icon in the template list screen/EL-3974/ES3974_01",function(){
   gradebook.getGradesLstInTemplate().each(($e1,index,$list)=>{
      const txt =$e1.text()
      if(txt.includes("Grade 10")){
         gradebook.getViewIconsLst().eq(index).click()
         return false
      }
   })
   gradebook.getGradeDrpDwn().should('be.visible')
   gradebook.getNoOfTermsDrpDwn().should('be.visible')
   gradebook.getAddTheoryTheoryFld().should('be.visible')
   gradebook.getPracticalFld().should('be.visible')
})

it(" Validate User is able to redirected to the “Preview Gradebook(Grade)” screen/EL-3974/ES3974_02",function(){
   cy.contains("Preview Gradebook Grade 10").should('be.visible')
})

it("Validate whether user is able to view the details present in the  preview gradebook screen(Scholastic, co-scholastic details)/EL-3974/ES3974_03",function(){
   gradebook.getNoOfTermsDrpDwn().should('have.text',"1")
   gradebook.getAddTheoryTheoryFld().should('have.value',"20")
   gradebook.getPracticalFld().should('have.value',"0")
   gradebook.getAddTestTypeDrpDwnInAddTheory().should('have.text',"Half Yearly")
   gradebook.getActivityDrpDwn().should('have.value',"123aws")
})

it("Validate user is able to click on 'Edit' button/EL-3974/ES3974_04",function(){
   gradebook.getEditBtnInViewPage().should('be.enabled').click()
})

it("Validate user clicking on Edit button, redirected to Edit Gradebook screen/EL-3974/ES3974_05",function(){
   cy.contains("Edit Gradebook Grade 10").should('be.visible')
})

it("Validate user is able to click on 'Create new' button/EL-3974/ES3974_06",function(){
   gradebook.getGoBackBtn().click()
   gradebook.getGradesLstInTemplate().each(($e1,index,$list)=>{
      const txt =$e1.text()
      if(txt.includes("Grade 10")){
         gradebook.getViewIconsLst().eq(index).click()
         return false
      }
   })
   gradebook.getCreateNwBtnInViewPage().click()
})

it("Validate user clicking on 'create new' button, rediredted to create template screen/EL-3974/ES3974_07",function(){
   cy.contains("Create New Template").should('be.visible')
}) 
})

