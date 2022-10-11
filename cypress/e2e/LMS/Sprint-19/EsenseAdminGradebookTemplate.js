const mainAdminHomePage = require("../../../support/pageObjects/LMS-2/MainAdminHomePage")
const mainAdminGradebookPage = require("../../../support/pageObjects/LMS-2/MainAdminGradebookPage")
import moment from 'moment';

describe("Verify admin grade book template functionalities", function () {

    before(function () {
        cy.visit(Cypress.env("url"))
        cy.fixture("LMS/mainAdminLoginCredentials").then(function (validAdminLoginData) {
            cy.Mainlogin(validAdminLoginData.username, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/mainAdminGradebookCredentials").as("gradebook")
    })

    //pre-condition
    it("To validate admin is able to view the list of gradebook templates so that insight on available gradebook templates/EL-5599/ES5599-01", function () {
        mainAdminHomePage.getGradebookTemplateLnk().click()
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().should('have.length.gte', 9).and('be.visible')
        //})

        //   it("To validate user is able to view the templates in systematic order/EL-5599/ES5599-02",function(){
        //     for (var i=0;i<=6;i++){
        //         var exp=mainAdminGradebookPage.getSiGradeLstInTemplatePage().eq(i).invoke('text')     
        //         var act=mainAdminGradebookPage.getSiGradeLstInTemplatePage().eq(i+1).invoke('text')
        //         var gr1 = cy.wrap(exp).slice(-1) 
        //         var gr2 = cy.wrap(act).slice(-1)
        //         expect(+gr1).to.be.lessThan(+gr2)
        //     }
        // })

        //it("To validate grade column in the grid  displayed with top school logo/EL-5599/ES5599-03",function(){
        mainAdminGradebookPage.getSiTopschlLogoLst().should('have.length.gte', 9).and('be.visible')
        //})

        //it("To validate edited by column in the grid  displayed with respective owners/EL-5599/ES5599-04",function(){
        mainAdminGradebookPage.getSiEditedBySectLst().eq(1).should('have.text', "Ritesh Patel")
        //})

        //it("To validate Last edited column in the grid displayed with  format  like (Date (dd/mm/yy) and Time (hr: min)/EL-5599/ES5599-05",function(){
        mainAdminGradebookPage.getSiPubDateBySectLst().then((datef => {
            var dated = datef.text().substring(0, 11)
            let result = moment(dated, 'DD MMM YYYY', true).isValid()
            expect(result).to.deep.equal(true)
        }))
        //})

        //it("To validate Status column in the grid  displayed with draft or published status/EL-5599/ES5599-06",function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if ((txt === "Published") || (txt === "Draft")) {
                expect(true).to.eq(true)
                return false;
            }
            else {
                expect(true).to.eq(false)
                return false;
            }
        })
        //})

        //it("To validate toggle button by defualt is on status for the published gradebooks and dispalyed in Action column of the grid/EL-5599/ES5599-07",function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Draft") {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).should('not.be.checked')
                return false;
            } else {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).should('be.checked')
                return false;
            }
        })
        //})

        //it('To validate user is able to edit the preloaded TopSchool template/Created template/EL-5599/ES5599-08',function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Draft") {
                mainAdminGradebookPage.getSiActionEditLst().eq(index).should('have.attr', 'aria-label', 'Edit')
                return false;
            } else {
                mainAdminGradebookPage.getSiActionEditLst().eq(index).should('not.be.enabled')
                return false;
            }
        })
        //})

        //it("To validate user is able to delete the gradebook template/EL-5599/ES5599-09",function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Draft") {
                mainAdminGradebookPage.getSiActionDltLst().eq(index).should('have.attr', 'aria-label', 'Delete')
                return false;
            } else {
                mainAdminGradebookPage.getSiActionDltLst().eq(index).should('not.be.enabled')
                return false;
            }
        })
        //})

        //it("To validate search option is available for the user/EL-5599/ES5599-10",function(){
        mainAdminGradebookPage.getSearchTemplateBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to get list after entering keywords  search options filed/EL-5599/ES5599-11",function(){
        mainAdminGradebookPage.getSearchTemplateBtn().type("Grade 3")
        cy.wait(1000)
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().should('have.text', "Grade 3")
        mainAdminGradebookPage.getSearchTemplateBtn().clear()
        //})

        //it("To validate sort option is available for Grade and Lasted edited  columns in the grade/EL-5599/ES5599-12",function(){
        mainAdminGradebookPage.getSiGradeSortImg().should('be.visible')
        mainAdminGradebookPage.getSiLastEditedSortImg().should('be.visible')
        //})

        //it("To validate user able to select single item in the grid and download the pdf/EL-5599/ES5599-13",function(){
        mainAdminGradebookPage.getSiGradeCheckBxLst().eq(1).check()
        mainAdminGradebookPage.getSiDwnloadAsPdfBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to select single item in the grid and delete it/EL-5599/ES5599-14",function(){
        mainAdminGradebookPage.getSiDwnDltBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to select all items in the grid and delete all  the items/EL-5599/ES5599-16",function(){
        mainAdminGradebookPage.getSiGradeCheckBxLst().eq(0).check()
        mainAdminGradebookPage.getSiDwnDltBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to select all items in the grid and download the pdf/EL-5599/ES5599-15",function(){
        mainAdminGradebookPage.getSiDwnloadAsPdfBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate Pagination handled (10 records displayed per page)/EL-5599/ES5599-19",function(){
        mainAdminGradebookPage.getSiGradeLstInTemplateOnePage().should('have.length.lte', 10)
        //})

        //it("To validate  Admin able to preview the gradebook template created so that admin can publish the gradebook template/EL-5592/ES5592-01",function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Draft") {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).click()
                mainAdminGradebookPage.getSiPreviewPageTitle().contains("Preview").should('be.visible')
                mainAdminGradebookPage.getSiPublishBtnInPreviewPage().should('be.enabled')
                return false;
            }
        })
        //})

        //it("To validate user able to view student profile,widgets,scholastic activties for every student/EL-5592 /ES5592-02",function(){
        mainAdminGradebookPage.getSiProfilePictureInPreviewPage().should('be.visible')
        mainAdminGradebookPage.getSiWidgetsLstInPreviewPage().should('be.visible')
        mainAdminGradebookPage.getSiScholosticActivTxt().should('be.visible').and('have.text', "Scholastic Activities")
        mainAdminGradebookPage.getSiCoScholosticActivTxt().should('be.visible')
        //})

        //it("To validate student profile has name, class,date of birth,father name,mother name,admission no,roll no/EL-5592/ES5592-03",function(){
        mainAdminGradebookPage.getSiBasiDetailsLst().should('have.length', 9)
        //})

        //it("To validate user able to write the Remarks in the remarks text field./EL-5592/ES5592-08",function(){
        //mainAdminGradebookPage.getSiRemarksFld().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to see  class teacher signature,parents signature, principal signature ,date by clicking the respective fields/EL-5592/ES5592-09",function(){
        mainAdminGradebookPage.getSiReSignDownLst().should('contain.text', "Date")
        mainAdminGradebookPage.getSiReSignDownLst().should('contain.text', "Class Teacher Signature")
        mainAdminGradebookPage.getSiReSignDownLst().should('contain.text', "Principal Signature")
        mainAdminGradebookPage.getSiReSignDownLst().should('contain.text', "Parent's Signature")
        //})

        //it("To validate user able to view Grading System button is available/EL-5592/ES5592-10",function(){
        mainAdminGradebookPage.getSiShowGradeSystemBtn().should('be.visible').and('be.enabled')
        //})

        //it("To validate user able to view Grading details for Scholastic and Co-Scholastic Activities by clicking  'show grading system'/EL-5592/ES5592-11",function(){
        mainAdminGradebookPage.getSiShowGradeSystemBtn().click()
        mainAdminGradebookPage.getSiScholosticActivTxt().should('be.visible').and('have.text', "Scholastic Activities")
        mainAdminGradebookPage.getSiCoScholosticActivTxt().should('be.visible')
        //})

        //it("To validate user is able to view  as draft in template screen  after clicking save as draft option/EL-5592/ES5592-13",function(){
        mainAdminGradebookPage.getSiSaveAsDraftBtn().should('be.enabled').click()
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().eq(index).should('have.text', "Draft")
                return false;
            }
        })
        //})

        //it("To validate user is redirected to previous screen after clicking on cancel button/EL-5592/ES5592-14",function(){
        mainAdminGradebookPage.getSiStatusBtnLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Draft") {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).click()
                return false;
            }
        })
        mainAdminGradebookPage.getSiCancelBtn().should('be.enabled').click()
        mainAdminGradebookPage.getSiGradebookHomePageTitle().should('be.visible')
        //})

        //it("To validate theory and practical are added to the template with 1 term selected then the following table  displayed, as screen/EL-5592/ES5592-05",function(){
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).click()
                return false;
            }
        })
        mainAdminGradebookPage.getSiTheoryPracticalTxtInScholosticTable().contains("P").should('have.length', 1)
        mainAdminGradebookPage.getSiTheoryPracticalTxtInScholosticTable().contains("T").should('have.length', 1)
        //})

        //it("To validate If No theory and practical are added to the template with 1 term selected then the following table  displayed, as Screen/EL-5592/ES5592-07",function(){
        mainAdminGradebookPage.getSiCancelBtn().click()
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionEditLst().eq(index).click()
                return false;
            }
        })
        mainAdminGradebookPage.getSiEditGradeTheoryAndPracticalDltBtnLst().eq(0).should('be.visible')
        mainAdminGradebookPage.getSiSaveAsDraftInEditGradebook().click()
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).click()
                return false;
            }
        })
        cy.wait(1000)
        mainAdminGradebookPage.getSiTheoryPracticalTxtInScholosticTable().should('be.visible')
        //})

        //it("To validate theory and practical are added to the template with 1 & 2 terms selected then the following table  displayed, as Screen/EL-5592/ES5592-06",function(){
        mainAdminGradebookPage.getSiCancelBtn().click()
        cy.wait(4000)
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionEditLst().eq(index).click()
                return false;
            }
        })
        mainAdminGradebookPage.getSiEditGradeNoOfTermsDrpDwn().click()
        mainAdminGradebookPage.getSiSectionsLst().contains('2').click()
        mainAdminGradebookPage.getSiEditGradeAddTestTypeBtn().click({ force: true })
        mainAdminGradebookPage.getSiEditGradeAddTestTermLastDrpDwn().click({ froce: true })
        mainAdminGradebookPage.getSiSectionsLst().contains('2').last().click({ force: true })
        mainAdminGradebookPage.getSiEditGradeTestTypeDrpDwns().click({ force: true })
        mainAdminGradebookPage.getSiEditGradeTestTypeDrpDwns2().click({ force: true })
        mainAdminGradebookPage.getSiSectionsLst().contains('Annual examination').click({ force: true })
        mainAdminGradebookPage.getSiMaxMarksDrpDwn2().eq(5).click({ force: true })
        mainAdminGradebookPage.getSiSectionsLst().contains('20').click({ force: true })
        //cy.get(':nth-child(5) > .MuiButtonBase-root > img').click({force:true})
        cy.wait(2000)
        mainAdminGradebookPage.getSiSaveAsDraftInEditGradebook().click({ force: true })
        cy.wait(4000)
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionToggleLstCheckBx().eq(index).click()
                return false;
            }
        })
        cy.wait(2000)
        mainAdminGradebookPage.getSiTermsTxtInScholosticActiv().contains("Term 1").should('be.visible')
        mainAdminGradebookPage.getSiTermsTxtInScholosticActiv().contains("Term 2").should('be.visible')
        //})

        //it("To validate user is redirected to previous screen after clicking on Goback link/EL-5592/ES5592-15",function(){
        mainAdminGradebookPage.getSiGoBackBtn().click()
        mainAdminGradebookPage.getSiGradebookHomePageTitle().should('be.visible')
        //})

        //Pre-Condition

        //it("delete the created Test type",function(){
        mainAdminGradebookPage.getSiGradeLstInTemplatePage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === this.gradebook.NonPublishedGrade) {
                mainAdminGradebookPage.getSiActionEditLst().eq(index).click()
                return false;
            }
        })
        mainAdminGradebookPage.getSiEditGradeNoOfTermsDrpDwn().click()
        mainAdminGradebookPage.getSiSectionsLst().contains('1').click()
        mainAdminGradebookPage.getSiEditGradeAddSubAddTheoryAndPracticalBtn().last().click({ force: true })
        mainAdminGradebookPage.getTestTypedrpDwn().click({ force: true })
        mainAdminGradebookPage.getSiSectionsLst().contains("Half Yearly").click({ force: true })
        mainAdminGradebookPage.getTheoryMark().last().type(40, { force: true })
        mainAdminGradebookPage.getPracticalMark().last().type(40, { force: true })
        cy.wait(2000)
        mainAdminGradebookPage.getSavAsDraftBtn().click({ force: true })
    })
})
