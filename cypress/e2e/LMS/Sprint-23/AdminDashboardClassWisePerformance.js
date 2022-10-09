const adminDashboard = require('../../../support/pageObjects/LMS-2/AdminDashboardPage')

describe("Verify admin dashboard classwise performance - Sprint 23(EL-5023)", function () {

    before(function () {
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/adminDashboardCredentials.json").as("dashboard")
    })

    it("EL-5023/ES5023-01 To validate user is able to view 'Class wise' performance in the performance insight section of the dash board .", function () {
        adminDashboard.getGradeWiseAttendanceInSiteAnalyticsSection().click()
        adminDashboard.getClassWisePerformanceTxtInGradeWiseAttendance().should('be.visible')
    })

    it("EL-5023/ES5023-02 To validate class details are present in 'Line graph'chart",function(){
        adminDashboard.getClassWisePerformanceTxtInGradeWiseAttendance().each(($e1,list,$index) => {
            cy.wrap($e1).should('contain.text',"Grade")
        })
    })

    it("EL-5023/ES5023-03 To validate matrix in the Line graph chart:X-axis represent months April to March Y-axis represent Percentage (40…100) and Legends at the top",function(){
        
    })

})