const teacherDashboardPage = require('../../../support/pageObjects/LMS-2/TeacherDashboardPage')
const teacherLiveClassPage = require('../../../support/pageObjects/LMS-2/TeacherLiveClassesPage')
var randomstring = require("randomstring")

describe("Verify Teacher Live classes Functionalities - Sprint 22(EL-6500)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
    })

    it("EL-6500/ES6500-01 To validate user is able to create live class by clicking on + Create New Live Class” button available on the live class listing screen", function () {
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherLiveClassPage.getLiveClassesTab().click()
        teacherLiveClassPage.getCreateNewLiveClassBtn().should('be.visible').click()
        teacherLiveClassPage.getCreateLiveClassTitleTxt().should('have.text', "Create Live Class")
        teacherLiveClassPage.getClassDrpDwn().should('have.text', "Grade 3 - A").and('be.visible').click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        cy.clickOnBody()
        teacherLiveClassPage.getSubDrpDwn().should('have.text', "Tamil").click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        cy.clickOnBody()
        teacherLiveClassPage.getClassTypeDrpDwn().click()
        teacherLiveClassPage.getDrpdwnLst().should('contain.text', "Online").and('contain.text', "Offline")
        teacherLiveClassPage.getDrpdwnLst().contains("Online").click()
        cy.clickOnBody()
        teacherLiveClassPage.getEnterClassTitleFld().type("Social")
        teacherLiveClassPage.getAttendeeDrpDwn().click()
        teacherLiveClassPage.getAttendeeLst().should('be.visible')
        teacherLiveClassPage.getAttendeeLstCheckBx().check({ multiple: true })
        teacherLiveClassPage.getAttendeeFldCloseBtn().click()
        teacherLiveClassPage.getDateFld().click()
        teacherLiveClassPage.getLastDateInCalendarPopup().click()
        teacherLiveClassPage.getStartTimePicker().click()
        teacherLiveClassPage.getAMStartTime().click()
        cy.clickOnBody()
        teacherLiveClassPage.getEndTimePicker().click()
        teacherLiveClassPage.getPMStartTime().click()
        cy.clickOnBody()
        teacherLiveClassPage.getRemindDrpDwn().click()
        teacherLiveClassPage.getDrpdwnLst().should('contain.text', "Do Not Remind").and('contain.text', "15 minutes before the event").
            and('contain.text', "30 minutes before the event").and('contain.text', "1 hour before the event")
        teacherLiveClassPage.getDrpdwnLst().first().click()
        teacherLiveClassPage.getAddDescriptionTxtFld().click().type(randomstring.generate(51))
        teacherLiveClassPage.getDescriptionAlertMsg().should('have.text', "Description must not exceed 50 Characters").should('be.visible')
        teacherLiveClassPage.getAddDescriptionTxtFld().clear().type('Live Class')
        teacherLiveClassPage.getMeetingLnkFld().click().type("www.meet.com")
        teacherLiveClassPage.getSaveLiveClassBtn().click()
        cy.contains("Live Class Created successfully").should('be.visible')
    })

    it("EL-6500/ES6500-02 To validate user on clicking live class link is redirected to calendar page", function () {
        teacherLiveClassPage.getCalendarPagetitle().should('be.visible')
        teacherDashboardPage.getMyclassLnk().click({ force: true })
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherLiveClassPage.getLiveClassesTab().click()
        cy.wait(2000)
        teacherLiveClassPage.getCreatedClassesLst().should('contain.text', "Social")
        teacherLiveClassPage.getCreatedClassesLst().each(($e1,index,$list)=>{
            const tx = $e1.text()
            if(tx === "Social"){
                teacherLiveClassPage.getClassDetailsLst().eq(index).click()
            }
        })
        cy.wait(1000)
        teacherLiveClassPage.getLiveClassDltBtn().click()    
        teacherLiveClassPage.getLiveClassdltConfirmBtn().click()
        cy.wait(3000) 
    })

})
