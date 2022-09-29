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

    it("EL-4791/ES4791-07 To valiadte by default grade wise performance graph is displayed for the user", function () {
        adminHomePage.getGradeWiseAttendanceTab().should('be.enabled')
        cy.verifyAttributeValue(adminHomePage.getGradeWiseAttendanceTab(), "class", "Mui-selected")
    })

    it("EL-4791/ES4791-04 To validate Grade filter is displayed  and by default  all the grades are selecetd and displayed", function () {
        adminHomePage.getGradeDrpDwnInGradeWiseAttendance().should('be.visible')
    })

    it("EL-4791/ES4791-05 To valiadte user is able to select daily,weekly,monthly  by clicking on filters", function () {
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().should('be.visible')
        adminHomePage.getSectionDrpDwnInGradeWiseAttendance().click()
        adminHomePage.getSectionDrpDwnLstInGradeWiseAttendance().should('contain.text', "Daily").and('contain.text', "Weekly")
            .and('contain.text', "Monthly").should('be.visible')
        adminHomePage.getSectionDrpDwnLstInGradeWiseAttendance().contains("Daily").click({ force: true })
    })

    it("EL-4791/ES4791-08 To validate Grade and its attendance details are  displayed", function () {
        adminHomePage.getGradeDrpDwnInGradeWiseAttendance().click({ force: true })
        adminHomePage.getGradeDrpDwnLstInGradeWiseSection().contains("Grade 3")
        adminHomePage.getBarGraphInGradewiseSection().should('be.visible')
        adminHomePage.getGradeDrpDwnLstInGradeWiseSection().contains("Grade 10").click({ force: true })
        adminHomePage.getBarGraphInGradewiseSection().should('not.be.visible')
    })

    it("EL-4791/ES4791-11 To valiadte user is able to see the attendance percenatge ,on hovering class bar",function(){
        adminHomePage.getGradeDrpDwnInGradeWiseAttendance().click({force:true})
        adminHomePage.getGradeDrpDwnLstInGradeWiseSection().contains("Grade 1").click({force:true})
        adminHomePage.getBarGraphInGradewiseSection().trigger('mouseover')
        cy.verifyAttributeValue(adminHomePage.getBarGraphInGradewiseSection(),"aria-describedby","mui")
    })

    it("EL-4791/ES4791-12 To validate attendance for calculation  is fetched from the teacher from 'Mark class Attendnace'module",function(){
        cy.contains("50% present").should('be.visible')
    })

    //Student Registration

    it("EL-4969/ES4969-03 Check dropdown in Student Registration",function(){
        adminHomePage.getStudentRegistrationTab().click()
        adminHomePage.getDrpdwnInStudentRegistrationTab().should('be.visible').click()
        adminHomePage.getDrpDwnLstInStudentRegistrationTab().should('contain.text',"Monthly").and('contain.text',"Yearly")
        adminHomePage.getDrpDwnLstInStudentRegistrationTab().contains("Monthly").click()
    })

    it("EL-4969/ES4969-04 To validate count is dynamic and it is restricted to only to 5 values in the y-axis(Dynamic)",function(){
        adminHomePage.getCountLstInStudentRegistrationTab().should('be.',5)
    })


})