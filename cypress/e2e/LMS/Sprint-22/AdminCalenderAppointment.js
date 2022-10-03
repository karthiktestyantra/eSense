describe("Verify admin calender Appointment functionalities - Sprint 21(EL-375)", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("").as("")
    })
    it('EL-6267/ES6267-01 To validate school admin/teacher is able to edit  appointment so that he can mak any changes in the created  appointment .',function () {
        cy.get()
    })
})