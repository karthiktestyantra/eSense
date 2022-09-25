const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")


describe("Verify Admin student grade book functionalities", function () {


    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.fNew, validAdminLoginData.password)
        })
    })

    it('EL-4745/ES4745_1 Validate whether user is able to view "Total Classes", "Total Teachers", "Total Students" and "Admins" widgets with a count in the dashboard', function () {
        adminDashboardPage.getCountOfTeacherWidget().should('be.visible')
    })

    it('EL-4745/ES4745_2 Validate whether the counts mentioned in "Total Classes" is dependent on total number of sections associated with the grades (pre-setup and post-setup) of the school.', function () {
        adminDashboardPage.getSideMenuAdminSchoolImg().click()
        adminDashboardPage.getGradesAndDepartmentQuickLink().click()
        adminDashboardPage.getGradesAndSubjectBtn().click()
        var gradeLen = 0;
        adminDashboardPage.getCountOfGrades().each(($e1, index, $list) => {
            gradeLen = gradeLen + $e1.length
            cy.wrap(gradeLen).as('gradeLen')
        })
        cy.get('@gradeLen').then((gradeLen) => {
            cy.log(gradeLen)
            adminDashboardPage.getGobackBnt().click()
            adminDashboardPage.getSideMenuAdminDashboardImg().click()
            cy.wait(5000)
            cy.verifyTextEquals(adminDashboardPage.getDashboardCountOfTotalClass(), String(gradeLen))

        })
    })

    it('EL-4745/ES4745_4 Validate whether the counts mentioned in "Total Students" is dependent on total number of students onboarded for all the classes in the school.', function () {
        adminDashboardPage.getSideMenuAdminUserImg().click()
        adminDashboardPage.getStudentBtn().click()
        var studentNameLen = 0;
        adminDashboardPage.getStudentNameCount().each(($e1, index, $list) => {
            studentNameLen = studentNameLen + $e1.length
            cy.wrap(studentNameLen).as('studentNameLen')
        })
        cy.get('@studentNameLen').then((studentNameLen) => {
            cy.log(studentNameLen)
            cy.go('back')
            cy.wait(1000)
            cy.go('back')
            adminDashboardPage.getSideMenuAdminDashboardImg().click()
            cy.wait(5000)
            cy.verifyTextEquals(adminDashboardPage.getDashboardCountOfTotalStudent(), String(studentNameLen))

        })

    })

        it('EL-4745/ES4745_3 Validate whether the counts mentioned in "Total Teachers" is dependent on total number of teachers onboarded (pre-setup and post-setup) in the school', function () {
        adminDashboardPage.getSideMenuAdminUserImg().click()
        var teacherNameLen = 0;
        adminDashboardPage.getTeachertNameCount().each(($e1, index, $list) => {
            teacherNameLen = teacherNameLen + $e1.length
            cy.wrap(teacherNameLen).as('teacherNameLen')
        })
        cy.get('@teacherNameLen').then((teacherNameLen) => {
            cy.log(teacherNameLen)
            cy.go('back')
            cy.wait(5000)
            cy.verifyTextEquals(adminDashboardPage.getDashboardCountOfTotalTeacher(), String(teacherNameLen))

        })
    })

    it('EL-4745/ES4745_5 Validate whether the counts mentioned in "Admins" is dependent on total number of Admin onboarded in the school.', function () {
        adminDashboardPage.getSideMenuAdminSchoolImg().click()
        adminDashboardPage.getAdminAccountsQuickLink().click()
        adminDashboardPage.getAdminsBtn().click({force: true})
        var adminNameLen = 1;
        adminDashboardPage.getAdminNameCount().each(($e1, index, $list) => {
            adminNameLen = adminNameLen + $e1.length
            cy.wrap(adminNameLen).as('adminNameLen')
        })
        cy.get('@adminNameLen').then((adminNameLen) => {
            cy.log(adminNameLen)
            cy.go('back')
            cy.wait(1000)
            cy.go('back')
            cy.wait(5000)
            cy.verifyTextEquals(adminDashboardPage.getDashboardCountOfTotalAdmin(), String(adminNameLen))

        })

    })

    it('EL-4745/ES4745_6 Validate user clicks on "Total Classes", user is re-directed to “Academic Setup> Grades and Subjects tab".', function () {
        adminDashboardPage.getDashboardCountOfTotalClass().click() 
        cy.isVisible(adminDashboardPage.getGradesAndSubjectBtn())
    })

    it('EL-4745/ES4745_7 Validate user clicks on "Total Teachers", user is re-directed to “Users > Teachers tab”.', function () {
        adminDashboardPage.getGobackBnt().click()
        adminDashboardPage.getSideMenuAdminDashboardImg().click()
        adminDashboardPage.getDashboardCountOfTotalTeacher().click()
        cy.isVisible(adminDashboardPage.getTeacherTableHeader())
    })
    it('EL-4745/ES4745_8 Validate user clicks on "Total Students", user is re-directed to “Users > Students tab”.”.', function () {
        adminDashboardPage.getSideMenuAdminDashboardImg().click()
        adminDashboardPage.getDashboardCountOfTotalStudent().click()
        cy.isVisible(adminDashboardPage. getStudentTableHeader())

    })

    it('EL-4745/ES4745_9 Validate user clicks on "Admins", user is re-directed to the “Admin Accounts > Admins".', function () {
        cy.go('back')
        adminDashboardPage.getSideMenuAdminDashboardImg().click()
        adminDashboardPage.getDashboardCountOfTotalAdmin().click()
        cy.isVisible(adminDashboardPage.getAdminsTableHeader())


    })

})