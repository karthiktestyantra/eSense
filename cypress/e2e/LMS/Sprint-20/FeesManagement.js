describe("Verify Teacher Calender functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
          })
    })

    it('Validate the school admin logs into the portal, he is able to view the fee management icon/EE-52/EE52_1',function () {
        
    })
})