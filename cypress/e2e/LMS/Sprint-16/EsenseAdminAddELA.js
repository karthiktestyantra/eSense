const mainAdminAddELAPage = require("../../../support/pageObjects/LMS-2/MainAdminAddELAPage")

describe("Verify Esense Admin Main add ELA functionalities", function () {

    before(function () {
        cy.clearLocalStorage()
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
            cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/mainAdminELACredentials").as("esenseAdminAddELAData")
    })

    it("Validate user is able to create the Add ELA from a Chapter, under Courses sections/EL-5058/ES5058_02", function () {
        mainAdminAddELAPage.getMenuCoursesBtn().click()
        cy.wait(1000)
        mainAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        cy.wait(3000)
        cy.get('button.MuiPaginationItem-rounded').eq(2).scrollIntoView().click()
        cy.wait(2000)
        mainAdminAddELAPage.getSearchListOfCourseName().each(($e1, index, $list) => {
            const CourseTxt = $e1.text()
            if (CourseTxt.includes('Hindi V')) {
                // cy.get('button.MuiPaginationItem-rounded').eq(2).scrollIntoView().click()  
                // cy.wait(2000)
                mainAdminAddELAPage.getCoursesKebabMenu().eq(6).scrollIntoView().click({ force: true })
                return false;
            }
        })
        mainAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()
        mainAdminAddELAPage.getElaCardNameBtn().each(($e8, index, $list) => {
            const elaName = $e8.text()
            if (elaName.includes(this.esenseAdminAddELAData.ElaCardName)) {
                mainAdminAddELAPage.getChaterListKebabMenu().eq(index).click()
            }
        })
        mainAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        mainAdminAddELAPage.getTopicNameDropdown().should('be.visible').select(1)

        // })

        // it("Validate that user is able to Enter alphaNumeric Characters into Type Textbox/EL-5058/ES5058_03",function () {
        mainAdminAddELAPage.getTypeTxtField().clear().type(this.esenseAdminAddELAData.topictype).should('have.value', this.esenseAdminAddELAData.topictype)
        // })

        // it("Validate that user is able to Enter value more than 50 characters into Type Text field/EL-5058/ES5058_04",function () {
        mainAdminAddELAPage.getTypeTxtField().clear()
        mainAdminAddELAPage.getTypeTxtField().type(this.esenseAdminAddELAData.topictypemorethan50)
        mainAdminAddELAPage.getConductedForTxtField().click()
        mainAdminAddELAPage.getErrorMsgMoreThn50().should('contain.text', 'Must be at most 50 characters')

        // })

        // it("Validate that user is able to Add the questions in Add Question sections/EL-5058/ES5058_05",function () {
        mainAdminAddELAPage.getUploadQuestionsBtn().click()
        mainAdminAddELAPage.getUploadFileBtn().attachFile('LMS/SampleQuestions.xlsx')
        mainAdminAddELAPage.getImportQuestionBtn().click()
        // })

        // it("Validate that user is able to Add the parameters with the proper data validation/EL-5058/ES5058_06",function () {
        mainAdminAddELAPage.getParameterTxtField().clear().type(this.esenseAdminAddELAData.parameter).should('have.value', this.esenseAdminAddELAData.parameter)
        // })

        // it("Validate that user is able to Map the learning outcome/EL-5058/ES5058_07",function () {
        mainAdminAddELAPage.getLearningOutcomeTxtField().clear().type(this.esenseAdminAddELAData.learningoutcome).should('have.value', this.esenseAdminAddELAData.learningoutcome)
        // })

        // it("Validate that user is able to Map the Competency/EL-5058/ES5058_08",function () {
        mainAdminAddELAPage.getCompetencyDropdown().should('be.visible').select(1)
        mainAdminAddELAPage.getSubCompetencyTxtField().clear().type(this.esenseAdminAddELAData.subcompetency).should('have.value', this.esenseAdminAddELAData.subcompetency)
        mainAdminAddELAPage.getBackBtn().scrollIntoView().click()
        mainAdminAddELAPage.getBackPopupBtn().click()
        // })



        // it("Validate user is able to create the Add ELA from a Chapter, under Courses sections/EL-5058/ES5058_01",function () {
        // mainAdminAddELAPage.getMenuCoursesBtn().click()
        // cy.wait(1000)
        // mainAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        // cy.wait(2000)
        // mainAdminAddELAPage.getSearchListOfCourseName().each(($e1,index,$list)=>{
        // const CourseTxt = $e1.text()
        // if(CourseTxt.includes('Hindi V')){
        //     mainAdminAddELAPage.getCoursesKebabMenu().eq(index).click() 
        // }
        // })
        //  mainAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()

        mainAdminAddELAPage.getChaterListKebabMenu().eq(0).click()
        mainAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        mainAdminAddELAPage.getUploadQuestionsBtn().click()
        mainAdminAddELAPage.getUploadFileBtn().attachFile('LMS/SampleQuestions.xlsx')
        mainAdminAddELAPage.getImportQuestionBtn().click()
        mainAdminAddELAPage.getTopicNameDropdown().select(1)
        mainAdminAddELAPage.getTypeTxtField().type(this.esenseAdminAddELAData.topictype)
        mainAdminAddELAPage.getConductedForTxtField().type(this.esenseAdminAddELAData.conducted)
        mainAdminAddELAPage.getLearningOutcomeTxtField().type(this.esenseAdminAddELAData.learningoutcome)
        mainAdminAddELAPage.getObjectiveTxtField().type(this.esenseAdminAddELAData.objecive)
        mainAdminAddELAPage.getParameterTxtField().type(this.esenseAdminAddELAData.parameter)
        mainAdminAddELAPage.getDomainDropdown().select(1)
        mainAdminAddELAPage.getMainSkillDropdown().select(1)
        mainAdminAddELAPage.getSubSkillTxtField().type(this.esenseAdminAddELAData.subskill)
        mainAdminAddELAPage.getDomainExcellentTxtField().type(this.esenseAdminAddELAData.domainexcellent)
        mainAdminAddELAPage.getDomainGoodTxtField().type(this.esenseAdminAddELAData.domaingood)
        mainAdminAddELAPage.getDomainSatisTxtField().type(this.esenseAdminAddELAData.domainsatisifactory)
        mainAdminAddELAPage.getDomainBetterTxtField().type(this.esenseAdminAddELAData.domaincandobetter)
        mainAdminAddELAPage.getCompetencyDropdown().select(1)
        mainAdminAddELAPage.getSubCompetencyTxtField().type(this.esenseAdminAddELAData.subcompetency)
        mainAdminAddELAPage.getcompetencyExcellentTxtField().type(this.esenseAdminAddELAData.competencyexcellent)
        mainAdminAddELAPage.getcompetencyGoodTxtField().type(this.esenseAdminAddELAData.competencygood)
        mainAdminAddELAPage.getCompetencySatisTxtField().type(this.esenseAdminAddELAData.competencysatisifactory)
        mainAdminAddELAPage.getcompetencyBetterTxtField().type(this.esenseAdminAddELAData.competencycandobetter)
        mainAdminAddELAPage.getUploadRankingsBtn().click()
        mainAdminAddELAPage.getSelectFolderUploadRankings().attachFile('LMS/SampleRankings.xlsx')
        mainAdminAddELAPage.getImportUploadRankingsBtn().click()
        mainAdminAddELAPage.getSaveELABtn().should('be.visible').click()
        mainAdminAddELAPage.getELASuccessFullySavedMsg().should('have.text', 'Saved Successfully')
        mainAdminAddELAPage.getOkBtn().click()
        mainAdminAddELAPage.getOrganizationmanagementBtn().click()
        mainAdminAddELAPage.getListOfOrganizationmanagementNames().each(($e2, index, $lis) => {
            const orgNames = $e2.text()
            if (orgNames.includes('Starship Institute')) {
                mainAdminAddELAPage.getListOfOrganizationmanagementKababMenu().eq(index).click()
            }
        })

        mainAdminAddELAPage.getSchoolManagementBtn().click({ force: true })
        mainAdminAddELAPage.getSchoolManagementSubDomain().each(($e3, index, $list) => {
            const subDomainTxt = $e3.text()
            if (subDomainTxt.includes('new')) {
                cy.wait(1000)
                mainAdminAddELAPage.getListOfSchoolmanagementKababMenu().eq(index).scrollIntoView().click()
            }
        })

        cy.wait(2000)
        mainAdminAddELAPage.getSyncNowBtn().click({ force: true })
        cy.wait(2000)
        mainAdminAddELAPage.getOkBtn().click()
        cy.wait(1000)
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://new.staging.topschool.co.in')
        cy.fixture('LMS/AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.updUserName, validAdminLoginData.password)
        })
        mainAdminAddELAPage.getAdminUserImg().click()
        mainAdminAddELAPage.getAdminTeacherNames().each(($e4, index, $list) => {
            const userNamesTxt = $e4.text()
            if (userNamesTxt.includes('Vinay')) {
                mainAdminAddELAPage.getListOfTeacherEditBtn().eq(index).click()

            }
        })
        mainAdminAddELAPage.getSectionAndSubBtn().click()
        mainAdminAddELAPage.getSectionName().each(($e5, index, $list) => {
            const secNameTxt = $e5.text()
            if (secNameTxt.includes('Grade 5 - B')) {
                mainAdminAddELAPage.getSectionDropdown().eq(index).click()
            }

        })

        mainAdminAddELAPage.getSectionDropDwnNameLst().each(($e6, index, $list) => {
            const text = $e6.text()
            if (text.includes('Hindi V')) {
                mainAdminAddELAPage.getSectionDrpDwnCheckBxLst().eq(index).check({ force: true })
            }
        })

        mainAdminAddELAPage.getSaveChangesBtn().click({ force: true })

        cy.go('back')
        mainAdminAddELAPage.getMenuProfileImg().click({ force: true })
        mainAdminAddELAPage.getMenuProfileLogoutBtn().click()
        cy.fixture('LMS/TeacherLoginCredentials').then(function (validTeacherLoginData) {
            cy.TeacherPostSetupLogin(validTeacherLoginData.updUsername, validTeacherLoginData.password)
        })

        mainAdminAddELAPage.getTeacherMyclassImg().click()
        mainAdminAddELAPage.getTeacherMyclassGradeName().click()
        mainAdminAddELAPage.getTeacherAssessmentBtn().click()
        mainAdminAddELAPage.getTeacherAsignmentBtn().click()
        mainAdminAddELAPage.getTeacherAddElaBtn().click()
        // mainAdminAddELAPage.getTeacherElaCardNameTxt().should('contain.text',this.esenseAdminAddELAData.ElaCardName)
        mainAdminAddELAPage.getTeacherMyProfileBtn().click({ force: true })
        mainAdminAddELAPage.getMenuProfileLogoutBtn().click()
        cy.wait(2000)
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
            cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        mainAdminAddELAPage.getMenuCoursesBtn().click()
        cy.wait(1000)
        mainAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        cy.wait(2000)
        mainAdminAddELAPage.getSearchListOfCourseName().each(($e1, index, $list) => {
            const CourseTxt = $e1.text()
            if (CourseTxt.includes('Hindi V')) {
                mainAdminAddELAPage.getCoursesKebabMenu().eq(index).scrollIntoView().click({ force: true })
            }
        })
        mainAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()
        mainAdminAddELAPage.getElaCardNameBtn().each(($e8, index, $list) => {
            const elaName = $e8.text()
            if (elaName.includes(this.esenseAdminAddELAData.ElaCardName)) {
                mainAdminAddELAPage.getChaterListKebabMenu().eq(index).click()
            }
        })
        mainAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        cy.wait(4000)

        mainAdminAddELAPage.getEsenseAdminElaDeleteBtn().scrollIntoView().click({ force: true })
        mainAdminAddELAPage.getDeletePopupOkBtn().click()
        mainAdminAddELAPage.getOkBtn().click()




        // //   })






    })

})