/// <reference types="Cypress"/>

import EsenseAdminCurriculumPlanPage from "../../support/PageObjects/EsenseAdminCurriculumPlanPage";

const esenseAdminCurriculumPlanPage = new EsenseAdminCurriculumPlanPage()

describe("Verify Curriculum plan view Page functionalities", function () {
    before(function () {
        cy.visit(Cypress.env('url'))
        cy.fixture('mainAdminLoginCredentials').then(function(validEsenseAdminLoginData){
        cy.login(validEsenseAdminLoginData.username,validEsenseAdminLoginData.password)  
        })
    })

   it("To validate that Curriculum items are converted to List view from Thumbnail view/EL-4157/ES4157_01",function () {
    esenseAdminCurriculumPlanPage.getCurriculamPlanBtn().click() 
    esenseAdminCurriculumPlanPage.getThumbnailViewTable().should('be.visible') 
//    })


//    it("To validate that in one page only 50 Curiculum list or records is dispalyed/EL-4157/ES4157_02",function () {
    esenseAdminCurriculumPlanPage.getCurriculamRecordList().should('have.length','50')
//    })

  
//    it("To validate that Go to next page button is provided to the user to view next set of list in next pages/EL-4157/ES4157_04",function () {
    esenseAdminCurriculumPlanPage.getCurriculamNextPagePagination().should('be.visible').click()
//    })


//    it("To validate that for more than 50 records pagination will display to take user to next set of list in next pages /EL-4157/ES4157_03",function () {
    esenseAdminCurriculumPlanPage.getCurriculamRecordList().should('have.length.lte',50)
//    })

//    it("To validate that when user clicks on Add curriculum” button it's navigating to Create Curriculum page/EL-4157/ES4157_05",function () {
    esenseAdminCurriculumPlanPage.getCurriculamPreviousPagePagination().click()
    esenseAdminCurriculumPlanPage.getAddCurriculamPlanBtn().eq(11).click()
    cy.url().should('include','add-curriculum')

//    })

//    it("To validate that when user click on "Action" button, view, edit, delete options are provided./EL-4157/ES4157_06",function () {
    esenseAdminCurriculumPlanPage.getCurriculamViewDetailsStatus().should('be.visible')
    esenseAdminCurriculumPlanPage.getCurriculamEditStatus().should('be.visible')
    esenseAdminCurriculumPlanPage.getCurriculamDeleteStatus().should('be.visible')
})

})