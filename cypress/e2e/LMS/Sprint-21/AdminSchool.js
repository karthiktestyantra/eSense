describe("Verify admin school functionalities", function () {

    before(function () {
        cy.visit(Cypress.env('urlQAPreSetup'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })
    it('EL-6151/ES6151_1 /Validate user is able to view the "Edit" icon in the “Action” column in the School Notice Board/ Private Notice Board screen.',function () {
        cy.get('.menu-txt ').contains('School').click({force:true})
        cy.get('button.noticeAddMembBtnFill').click()
        cy.get('#noticetitle').type('Test automation')
        cy.get('#demo-simple-select').click()
        cy.get('li.css-1km1ehz').contains('General').click()
        cy.get('div.css-1hof3tc').type('Automation testdata')
        cy.get('.css-1m9pwf3').eq(0).check()
        cy.get('.css-1m9pwf3').eq(2).check()
        cy.get('#mui-p-69759-T-1').click()
        cy.get('button.css-1ujsas3').eq(0).should('be.visible')
    })
})