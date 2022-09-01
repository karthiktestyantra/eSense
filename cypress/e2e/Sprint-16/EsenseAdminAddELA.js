/// <reference types="Cypress"/>

import MainAdminAddELAPage from "../../support/PageObjects/MainAdminAddELAPage";

const esenseAdminAddELAPage = new MainAdminAddELAPage();


describe("Verify Esense Admin Main Login Page functionalities", function () {
    before(function () {
        cy.clearLocalStorage()
        cy.visit(Cypress.env("url"))
        cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
            cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture('mainAdminELACredentials').then(function (esenseAdminAddELAData) {
            this.esenseAdminAddELAData = esenseAdminAddELAData;

        })
    })

    it("Validate user is able to create the Add ELA from a Chapter, under Courses sections/EL-5058/ES5058_02", function () {
        esenseAdminAddELAPage.getMenuCoursesBtn().click()
        cy.wait(1000)
        esenseAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        cy.wait(3000)
        cy.get('button.MuiPaginationItem-rounded').eq(2).scrollIntoView().click()
        cy.wait(2000)
        esenseAdminAddELAPage.getSearchListOfCourseName().each(($e1, index, $list) => {
            const CourseTxt = $e1.text()

            if (CourseTxt.includes('Hindi V')) {

                // cy.get('button.MuiPaginationItem-rounded').eq(2).scrollIntoView().click()  
                // cy.wait(2000)
                esenseAdminAddELAPage.getCoursesKebabMenu().eq(6).scrollIntoView().click({ force: true })
                return false;
            }
        })
        esenseAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()
        esenseAdminAddELAPage.getElaCardNameBtn().each(($e8, index, $list) => {
            const elaName = $e8.text()
            if (elaName.includes(this.esenseAdminAddELAData.ElaCardName)) {
                esenseAdminAddELAPage.getChaterListKebabMenu().eq(index).click()
            }
        })
        esenseAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        esenseAdminAddELAPage.getTopicNameDropdown().should('be.visible').select(1)

        // })

        // it("Validate that user is able to Enter alphaNumeric Characters into Type Textbox/EL-5058/ES5058_03",function () {
        esenseAdminAddELAPage.getTypeTxtField().type(this.esenseAdminAddELAData.topictype).should('have.value', this.esenseAdminAddELAData.topictype)
        // })

        // it("Validate that user is able to Enter value more than 50 characters into Type Text field/EL-5058/ES5058_04",function () {
        esenseAdminAddELAPage.getTypeTxtField().clear()
        esenseAdminAddELAPage.getTypeTxtField().type(this.esenseAdminAddELAData.topictypemorethan50)
        esenseAdminAddELAPage.getConductedForTxtField().click()
        esenseAdminAddELAPage.getErrorMsgMoreThn50().should('contain.text', 'Must be at most 50 characters')

        // })

        // it("Validate that user is able to Add the questions in Add Question sections/EL-5058/ES5058_05",function () {
        esenseAdminAddELAPage.getUploadQuestionsBtn().click()
        esenseAdminAddELAPage.getUploadFileBtn().attachFile('SampleQuestions.xlsx')
        esenseAdminAddELAPage.getImportQuestionBtn().click()
        // })

        // it("Validate that user is able to Add the parameters with the proper data validation/EL-5058/ES5058_06",function () {
        esenseAdminAddELAPage.getParameterTxtField().type(this.esenseAdminAddELAData.parameter).should('have.value', this.esenseAdminAddELAData.parameter)
        // })

        // it("Validate that user is able to Map the learning outcome/EL-5058/ES5058_07",function () {
        esenseAdminAddELAPage.getLearningOutcomeTxtField().type(this.esenseAdminAddELAData.learningoutcome).should('have.value', this.esenseAdminAddELAData.learningoutcome)
        // })

        // it("Validate that user is able to Map the Competency/EL-5058/ES5058_08",function () {
        esenseAdminAddELAPage.getCompetencyDropdown().should('be.visible').select(1)
        esenseAdminAddELAPage.getSubCompetencyTxtField().type(this.esenseAdminAddELAData.subcompetency).should('have.value', this.esenseAdminAddELAData.subcompetency)
        esenseAdminAddELAPage.getBackBtn().scrollIntoView().click()
        esenseAdminAddELAPage.getBackPopupBtn().click()
        // })



        // it("Validate user is able to create the Add ELA from a Chapter, under Courses sections/EL-5058/ES5058_01",function () {
        // esenseAdminAddELAPage.getMenuCoursesBtn().click()
        // cy.wait(1000)
        // esenseAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        // cy.wait(2000)
        // esenseAdminAddELAPage.getSearchListOfCourseName().each(($e1,index,$list)=>{
        // const CourseTxt = $e1.text()
        // if(CourseTxt.includes('Hindi V')){
        //     esenseAdminAddELAPage.getCoursesKebabMenu().eq(index).click() 
        // }
        // })
        //  esenseAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()

        esenseAdminAddELAPage.getChaterListKebabMenu().eq(0).click()
        esenseAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        esenseAdminAddELAPage.getUploadQuestionsBtn().click()
        esenseAdminAddELAPage.getUploadFileBtn().attachFile('SampleQuestions.xlsx')
        esenseAdminAddELAPage.getImportQuestionBtn().click()
        esenseAdminAddELAPage.getTopicNameDropdown().select(1)
        esenseAdminAddELAPage.getTypeTxtField().type(this.esenseAdminAddELAData.topictype)
        esenseAdminAddELAPage.getConductedForTxtField().type(this.esenseAdminAddELAData.conducted)
        esenseAdminAddELAPage.getLearningOutcomeTxtField().type(this.esenseAdminAddELAData.learningoutcome)
        esenseAdminAddELAPage.getObjectiveTxtField().type(this.esenseAdminAddELAData.objecive)
        esenseAdminAddELAPage.getParameterTxtField().type(this.esenseAdminAddELAData.parameter)
        esenseAdminAddELAPage.getDomainDropdown().select(1)
        esenseAdminAddELAPage.getMainSkillDropdown().select(1)
        esenseAdminAddELAPage.getSubSkillTxtField().type(this.esenseAdminAddELAData.subskill)
        esenseAdminAddELAPage.getDomainExcellentTxtField().type(this.esenseAdminAddELAData.domainexcellent)
        esenseAdminAddELAPage.getDomainGoodTxtField().type(this.esenseAdminAddELAData.domaingood)
        esenseAdminAddELAPage.getDomainSatisTxtField().type(this.esenseAdminAddELAData.domainsatisifactory)
        esenseAdminAddELAPage.getDomainBetterTxtField().type(this.esenseAdminAddELAData.domaincandobetter)
        esenseAdminAddELAPage.getCompetencyDropdown().select(1)
        esenseAdminAddELAPage.getSubCompetencyTxtField().type(this.esenseAdminAddELAData.subcompetency)
        esenseAdminAddELAPage.getcompetencyExcellentTxtField().type(this.esenseAdminAddELAData.competencyexcellent)
        esenseAdminAddELAPage.getcompetencyGoodTxtField().type(this.esenseAdminAddELAData.competencygood)
        esenseAdminAddELAPage.getCompetencySatisTxtField().type(this.esenseAdminAddELAData.competencysatisifactory)
        esenseAdminAddELAPage.getcompetencyBetterTxtField().type(this.esenseAdminAddELAData.competencycandobetter)
        esenseAdminAddELAPage.getUploadRankingsBtn().click()
        esenseAdminAddELAPage.getSelectFolderUploadRankings().attachFile('SampleRankings.xlsx')
        esenseAdminAddELAPage.getImportUploadRankingsBtn().click()
        esenseAdminAddELAPage.getSaveELABtn().should('be.visible').click()
        esenseAdminAddELAPage.getELASuccessFullySavedMsg().should('have.text', 'Saved Successfully')
        esenseAdminAddELAPage.getOkBtn().click()
        esenseAdminAddELAPage.getOrganizationmanagementBtn().click()
        esenseAdminAddELAPage.getListOfOrganizationmanagementNames().each(($e2, index, $lis) => {
            const orgNames = $e2.text()
            if (orgNames.includes('Starship Institute')) {
                esenseAdminAddELAPage.getListOfOrganizationmanagementKababMenu().eq(index).click()
            }
        })

        esenseAdminAddELAPage.getSchoolManagementBtn().click({ force: true })
        esenseAdminAddELAPage.getSchoolManagementSubDomain().each(($e3, index, $list) => {
            const subDomainTxt = $e3.text()
            if (subDomainTxt.includes('new')) {
                cy.wait(1000)
                esenseAdminAddELAPage.getListOfSchoolmanagementKababMenu().eq(index).scrollIntoView().click()
            }
        })

        cy.wait(2000)
        esenseAdminAddELAPage.getSyncNowBtn().click({ force: true })
        cy.wait(2000)
        esenseAdminAddELAPage.getOkBtn().click()
        cy.wait(1000)
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://new.staging.topschool.co.in')
        cy.fixture('AdminLoginCredentials').then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.updUserName, validAdminLoginData.password)
        })
        esenseAdminAddELAPage.getAdminUserImg().click()
        esenseAdminAddELAPage.getAdminTeacherNames().each(($e4, index, $list) => {
            const userNamesTxt = $e4.text()
            if (userNamesTxt.includes('Vinay')) {
                esenseAdminAddELAPage.getListOfTeacherEditBtn().eq(index).click()

            }
        })
        esenseAdminAddELAPage.getSectionAndSubBtn().click()
        esenseAdminAddELAPage.getSectionName().each(($e5, index, $list) => {
            const secNameTxt = $e5.text()
            if (secNameTxt.includes('Grade 5 - B')) {
                esenseAdminAddELAPage.getSectionDropdown().eq(index).click()
            }

        })

        esenseAdminAddELAPage.getSectionDropDwnNameLst().each(($e6, index, $list) => {
            const text = $e6.text()
            if (text.includes('Hindi V')) {
                esenseAdminAddELAPage.getSectionDrpDwnCheckBxLst().eq(index).check()
            }
        })

        esenseAdminAddELAPage.getSaveChangesBtn().click({ force: true })

        cy.go('back')
        esenseAdminAddELAPage.getMenuProfileImg().click({ force: true })
        esenseAdminAddELAPage.getMenuProfileLogoutBtn().click()
        cy.fixture('TeacherLoginCredentials').then(function (validTeacherLoginData) {
            cy.TeacherPostSetupLogin(validTeacherLoginData.updUsername, validTeacherLoginData.password)
        })

        esenseAdminAddELAPage.getTeacherMyclassImg().click()
        esenseAdminAddELAPage.getTeacherMyclassGradeName().click()
        esenseAdminAddELAPage.getTeacherAssessmentBtn().click()
        esenseAdminAddELAPage.getTeacherAsignmentBtn().click()
        esenseAdminAddELAPage.getTeacherAddElaBtn().click()
        // esenseAdminAddELAPage.getTeacherElaCardNameTxt().should('contain.text',this.esenseAdminAddELAData.ElaCardName)
        esenseAdminAddELAPage.getTeacherMyProfileBtn().click({ force: true })
        esenseAdminAddELAPage.getMenuProfileLogoutBtn().click()
        cy.wait(2000)
        cy.visit(Cypress.env("url"))
        cy.fixture("mainAdminLoginCredentials").then(function (validAdminLoginData) {
            cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
        })
        esenseAdminAddELAPage.getMenuCoursesBtn().click()
        cy.wait(1000)
        esenseAdminAddELAPage.getSearchCourseNameTxtField().type('hindi')
        cy.wait(2000)
        esenseAdminAddELAPage.getSearchListOfCourseName().each(($e1, index, $list) => {
            const CourseTxt = $e1.text()
            if (CourseTxt.includes('Hindi V')) {
                esenseAdminAddELAPage.getCoursesKebabMenu().eq(index).scrollIntoView().click({ force: true })
            }
        })
        esenseAdminAddELAPage.getCoursesKebabMenuChapterListBtn().click()
        esenseAdminAddELAPage.getElaCardNameBtn().each(($e8, index, $list) => {
            const elaName = $e8.text()
            if (elaName.includes(this.esenseAdminAddELAData.ElaCardName)) {
                esenseAdminAddELAPage.getChaterListKebabMenu().eq(index).click()
            }
        })
        esenseAdminAddELAPage.getCoursesKebabMenuAddELABtn().click({ force: true })
        cy.url().should('include', 'add-ela')
        cy.wait(4000)

        esenseAdminAddELAPage.getEsenseAdminElaDeleteBtn().scrollIntoView().click({ force: true })
        esenseAdminAddELAPage.getDeletePopupOkBtn().click()
        esenseAdminAddELAPage.getOkBtn().click()




        // //   })






    })

})