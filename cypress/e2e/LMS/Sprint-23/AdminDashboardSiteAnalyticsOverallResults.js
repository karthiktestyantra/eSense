const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")

describe("Verify Admin Dashboard Site Analytics - Sprint 23(EL-4965)", function () {

    before(function () {
        cy.visit(Cypress.env('urlBhsSchool'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.bhsUser, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it('EL-4965/ES4965-01 To validate user is able to view "overall " results of all the grade in school by clicking on "Overall result"tab in site analytics section of the dashboard.', function () {
        adminDashboardPage.getOverallResultTab().click()
        cy.isVisible(adminDashboardPage.getRanksOverallResult())
    })

    it('EL-4965/ES4965-02 "To validate details are present in ""Horizontal "bar chart."', function () {
        cy.isVisible(adminDashboardPage.getHorizontalBarChartOverallResult())
    })

    it('EL-4965/ES4965-03 "To validate matrix in the Line graph chart:X-axis represent Percentage (10,…..,100).Y-axis represent Ranks (1,…..,10)"', function () {
        var number = 10
        adminDashboardPage.getPercentageXAxisOverallResult().each(($el) => {
            expect($el.text().trim()).to.contains(number)
            number = number + 10
        })
    })
    it('EL-4965/ES4965-04 To validate "Grade "filter is present in the dashboard.', function () {
        cy.isVisible(adminDashboardPage.getFilterOverallResultDropdown())
        cy.isVisible(adminDashboardPage.getFilterOverallResultDropdownAllOpt())
    })

    it('EL-4965/ES4965-05 To validate "High to Low / Low to high "filter is present in the dashboard.', function () {
        cy.isVisible(adminDashboardPage.getHighToLowFilterOverallResultDropdown())
        cy.isVisible(adminDashboardPage.getHighToLowFilterOverallResultOpt())
        var rank1 = []
        var rank2 = []
        adminDashboardPage.getRanksOverallResult().each(($el) => {
            rank1.push($el.text())
            cy.wrap(rank1).as('rank1')
            rank2.push($el.text())
            rank2.sort((a, b) => b - a)
            cy.wrap(rank2).as('rank2')
        })
        cy.get('@rank1').then((rank1) => {
            cy.get('@rank2').then((rank2) => {
                for (let index = 0; index < rank1.length; index++) {
                    expect(rank1[index]).to.equal(rank2[index])
                }
            })
        })
    })
    it('EL-4965/ES4965-07 To validate if rank is shared by multiple grades then list of grades are displayed.', function () {
        var getRank = []
        adminDashboardPage.getRanksOverallResult().each(($el) => {
            getRank.push($el.text().trim())
            cy.wrap(getRank).as('getRank')
        })
        cy.get('@getRank').then((getRank) => {
            const toFindSameRank = getRank => getRank.filter((item, index) => getRank.indexOf(item) !== index)
            const sameRank = toFindSameRank(getRank);
            cy.wrap(sameRank).as('sameRank')
        })
        cy.get('@sameRank').then((sameRank) => {
            var getName = []
            for (let index = 0; index < sameRank.length; index++) {
                adminDashboardPage.getGradeListOverallResultDynamic(sameRank[index]).each(($el) => {
                    getName.push($el.text().trim())
                    cy.wrap(getName).as('getName')
                })
                cy.get('@getName').then((getName) => {
                    expect(getName).to.equal(getName.sort())
                    getName.length = 0
                })
            }
        })
    })

})

//Author - Manohara (EL-4965)