const teacherDashboardPage = require('../../../support/pageObjects/LMS-2/TeacherDashboardPage')
const teacherLiveClassPage = require('../../../support/pageObjects/LMS-2/TeacherLiveClassesPage')

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
        teacherDashboardPage.getMyclassLnk().click({force:true})
        teacherDashboardPage.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                teacherDashboardPage.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        teacherLiveClassPage.getLiveClassesTab().click()
        teacherLiveClassPage.getCreateNewLiveClassBtn().should('be.visible').click()
        teacherLiveClassPage.getCreateLiveClassTitleTxt().should('have.text',"Create Live Class")
        teacherLiveClassPage.getClassDrpDwn().should('have.text',"Grade 3 - A").and('be.visible').click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        teacherLiveClassPage.getSubDrpDwn().click({force:true})
        teacherLiveClassPage.getSubDrpDwn().should('have.text',"Tamil").and('be.visible').click()
        teacherLiveClassPage.getDrpdwnLst().should('be.visible')
        teacherLiveClassPage.getSubDrpDwn().click({force:true})
        teacherLiveClassPage.getClassTypeDrpDwn().click()
        teacherLiveClassPage.getDrpdwnLst().should('contain.text',"Online").and('contain.text',"Offline")
        teacherLiveClassPage.getClassTypeDrpDwn().click({force:true})
    })
})
