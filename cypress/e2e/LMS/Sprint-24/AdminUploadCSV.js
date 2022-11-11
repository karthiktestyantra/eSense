describe("Verify School Admin Uplioad CSV functionalities - Sprint 24(EL-7977)", function () {

    before(function () {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.clearLocalStorageSnapshot();
        cy.visit(Cypress.env('urlMain'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.newUsername, validAdminLoginData.password)
        })
        cy.saveLocalStorage();
    })
    beforeEach(function () {
        cy.restoreLocalStorage();
        cy.viewport(1920, 1080)
        // cy.fixture("").as("")
    })
    it('ES7977_1  "Validate mentioned extensions is accepted while uploading CSV -Excel Workbook.xlsx, -Excel Workbook.xls, -CSV (Common delimited).csv"',function () {
        
    })

    it('ES7977_2  Validate User when tries to export the file, the system is able to download the file in Excel Workbook.xlsx,  extensions',function () {
        
    })
})