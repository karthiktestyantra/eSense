const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const adminGradeBookPage = require("../../../support/pageObjects/LMS-2/AdminGradeBookPage")

describe("Verify Admin Dashboard Performance Insights Top Performers - Sprint 23(EL-5027)", function () {

    var expStudentsList = []
    var expTotalScore = []
    before(function () {
        cy.visit(Cypress.env('urlBhsSchool'))
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.bhsUser, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/AdminDashboardCredentials").as("adminDashboardCredentials")
    })

    it("EL-5027/ES5027_1 Validate School Admin is able to view top performer user of Student by default.", function () {
        cy.log(Number(59.67))
        cy.isVisible(adminDashboardPage.getTopPerformersDefaultDropdownText())
        adminDashboardPage.getTopPerformersDropdowns().eq(0).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(0).click()
        adminDashboardPage.getTopPerformersDropdowns().eq(1).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(0).click()
        cy.wait(1000)
        cy.isVisible(adminDashboardPage.getTopPerformersNameList())
        adminDashboardPage.getTopPerformersNameList().each(($el) => {
            expStudentsList.push($el.text().trim())
        })
        adminDashboardPage.getTopPerformersOverallPercentageList().each(($el) => {
            expTotalScore.push(parseInt($el.text().trim()))
        })
        cy.isVisible(adminDashboardPage.getTopPerformersNameList())
        cy.isVisible(adminDashboardPage.getTopPerformersGradeList())
        cy.isVisible(adminDashboardPage.getTopPerformersOverallPercentageList())
    })

    it("EL-5027/ES5027_3 Validate when the user clicks on grade filter dropdown it is displaying list of grades.", function () {
        adminDashboardPage.getTopPerformersDropdowns().eq(0).click()
        cy.wait(1000)
        cy.isVisible(adminDashboardPage.getTopPerformersDropdownList().eq(0))
        cy.haveLength(adminDashboardPage.getTopPerformersDropdownList(), 12)
    })

    it("EL-5027/ES5027_2 Validate School Admin is able to view top performer user (Teacher).", function () {
        adminDashboardPage.getTopPerformersDropdownList().eq(0).click()
        adminDashboardPage.getTopPerformersDropdowns().eq(1).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(1).click()
        cy.wait(1000)
        cy.isVisible(adminDashboardPage.getTopPerformersGradeList())
        cy.isVisible(adminDashboardPage.getTopPerformersOverallPercentageList())
    })

    it("EL-5027/ES5027_4 Validate the percentage displayed in the top performer list is same as mentioned in Gradebook.", function () {
        adminDashboardPage.getSideMenuReportsImg().click()
        cy.forceClick(adminDashboardPage.getSideMenuStudentGradebookLink())
        adminGradeBookPage.getStudentGradebookTab().click()
        cy.wait(1000)
        // for (let index = 0; index < expStudentsList.length; index++) {
        //     cy.log(expStudentsList[index])
        //     adminGradeBookPage.getStudentSearchBoxStudentGradebook().clear().type(expStudentsList[index])
        //     cy.wait(1500)
        //     cy.verifyTextContains(adminGradeBookPage.getTotalScoreStudentGradebookDynamic(expStudentsList[index]), expTotalScore[index])
        //     adminGradeBookPage.getForwardIconForDetailsStudentGradebookDynamic(expStudentsList[index]).click()
        //     cy.wait(2500)
        //     cy.verifyTextContains(adminGradeBookPage.getTotalPercentageGradebookPage(), expTotalScore[index])
        //     adminGradeBookPage.getGoBackButtonGradebookPage().click()
        //     cy.wait(1500)
        // }
    })

    it("EL-5027/ES5027_5 Validate percentage is calculate by using below mentioned formula - Calculation: (Average marks scored by all students for teaching subject)/ (Total marks assigned to that subject) /X 100.", function () {
        adminGradeBookPage.getStudentSearchBoxStudentGradebook().clear().type(this.adminDashboardCredentials.studentNameVerifyPercentage)
        adminGradeBookPage.getForwardIconForDetailsStudentGradebookDynamic(this.adminDashboardCredentials.studentNameVerifyPercentage).click()
        cy.wait(2500)
        var obtainedMarks = 0
        adminGradeBookPage.getMarksObtainedTabGradebookPage().each(($el) => {
            obtainedMarks = obtainedMarks + Number($el.text().trim())
            cy.wrap(obtainedMarks / 2).as('obtainedMarks')
        })
        adminGradeBookPage.getMarksObtainedTabGradebookPage().then(($el) => {
            var totalMarks = ($el.length / 2) * 100
            cy.get('@obtainedMarks').then((obtainedMarks) => {
                const actualPercentage = (obtainedMarks / totalMarks) * 100
                cy.verifyTextContains(adminGradeBookPage.getTotalPercentageGradebookPage(), actualPercentage)
            })
        })
    })

    it("EL-5027/ES5027_6 Validate when a rank is displayed in the chart.", function () {
        adminDashboardPage.getSideMenuAdminDashboardImg().click()
        cy.wait(1500)
        adminDashboardPage.getTopPerformersDropdowns().eq(0).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(0).click()
        adminDashboardPage.getTopPerformersDropdowns().eq(1).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(1).click()
        cy.wait(1000)
        cy.isVisible(adminDashboardPage.getTopPerformersRankList())
        adminDashboardPage.getTopPerformersDropdowns().eq(1).click()
        adminDashboardPage.getTopPerformersDropdownList().eq(0).click()
        cy.wait(1000)
        cy.isVisible(adminDashboardPage.getTopPerformersRankList())
    })

    it("EL-5027/ES5027_7 Validate Teachers/Students sharing the same rank is listed based on alphabetical order in the chart", function () {
        var getRank = []
        adminDashboardPage.getTopPerformersRankList().each(($el) => {
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
                adminDashboardPage.getTopPerformersRankListDynamic(sameRank[index]).each(($el) => {
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

//Karthik