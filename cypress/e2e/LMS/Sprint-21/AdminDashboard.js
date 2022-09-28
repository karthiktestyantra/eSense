const adminHomePage = require("../../../support/pageObjects/LMS-2/AdminHomePage")

describe("Verify 360 Report functionalities - Sprint 21(EL-4791)", function () {

    before(function () {
        cy.visit(Cypress.env("urlMain"))
        cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("dashboard")
    })

    it("To mention created mark attendace in dashboard",function(){

    })

    it("EL-4791/ES4791-07 To valiadte by default grade wise performance graph is displayed for the user", function () {
        adminHomePage.getGradeWiseAttendanceTab().should('be.enabled')
        cy.verifyAttributeValue(adminHomePage.getGradeWiseAttendanceTab(),"class","Mui-selected")
    })

    it("EL-4791/ES4791-04 To validate Grade filter is displayed  and by default  all the grades are selecetd and displayed",function(){
        adminHomePage.getGradeDrpDwnInGradeWiseAttendance().should('be.visible')
    })

    it("EL-4791/ES4791-05 To valiadte user is able to select daily,weekly,monthly  by clicking on filters",function(){
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().should('be.visible')
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().click()
        adminHomePage.getSectionDrpDwnLstInGradeWiseAttendance().should('contain.text',"Daily").and('contain.text',"Weekly")
        .and('contain.text',"Monthly").should('be.visible')
    })
})