const home = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const homework = require("../../../support/pageObjects/LMS-2/TeacherAssessmentPage")

describe("Verify Homework card - Sprint 21(EL-6426)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/addHomework").as("homework")
    })

    it("EL-6426/ES6426_1 Validate user is able to view the homework created", function () {
        home.getMyclassLnk().click({ force: true })
        home.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        homework.getAssessmentTab().click()
        cy.wait(1000)
        homework.getCreateNewHomeworkBtn().click()
        homework.getCreateHomeWorkPopupScreen().should('be.visible')
        homework.getCreateHomeworkTitleInPopup().should('have.text', "Create Homework").should('be.visible')
        homework.getHomeworkTitleTxtFldInPopup().type("Ponniyan Selvan")
        homework.getDescriptionTxtFldInPopup().type("Created by Kalki in 18th century")
        homework.getClassAddHomeworkPopupDueDate().click();
        const dayjs = require("dayjs");
        const todaysDate = dayjs().format("MMM DD, YYYY");
        var dayMonthYear = todaysDate.split(" ");
        let dates = parseInt(dayMonthYear[1]) + 1;
        cy.log(dates);
        homework.getDayWithMargin().contains(dates).click();
        cy.wait(1000);
        homework.getClassAddHomeworkPopupDueDate().click({ force: true });
        homework.getTimePickerInPopup().click()
        homework.getPMTimeInTimePicker().click()
        homework.getTimePickerInPopup().click({ force: true })
        homework.getApproxTimeRequiredDrpDwnInPopup().click()
        homework.getApproxTimeDrpDwnLstInPopup().first().click()
        homework.getSubmitBtnInCreateHomeworkPopup().click()
        homework.getHomeworkCreatedSuccessPopup().should('be.visible')
    })

    it("EL-6426/ES6426_2 Validate when user clicks on View icon, the details of the homework is displayed", function () {
        homework.getHomeWorkLstInAssessmentPage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Ponniyan Selvan")) {
                homework.getEditHomeWorkBtnLstInAssessmentPage().eq(index).scrollIntoView().click({ force: true })
                homework.getTitleInEditHomeworkPage().should('have.text', "Ponniyan Selvan")
                return false;
            }
        })
    })

    it("EL-6426/ES6426_4 Validate user is able to edit the homework", function () {
        homework.getEditBtnInHomeworkPopup().should('be.visible').click()
        homework.getHomeworkTitleTxtFldInPopup().clear().type("Naane Varuven")
        homework.getSubmitBtnInCreateHomeworkPopup().click()
        homework.getHomeworkUpdatedSuccessPopup().should('be.visible')
    })

    it("EL-6426/ES6426_3 Validate when user clicks on the 3 dots at the top of the card Duplicate and Edit icons is displayed", function () {
        homework.getHomeWorkLstInAssessmentPage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Naane Varuven")) {
                homework.getActionBtnLstForHomeworkInAssessmentPage().eq(index).scrollIntoView().click({ force: true })
                homework.getActionsLstInActionbtn().should('contain', "Edit").and('contain.text', "Duplicate")
                //homework.getSubmissionBtnInHomeworkPage().click({force:true})
            }
        })
    })

    it("EL-6426/ES6426_3 Validate user should be able to delete the homework created", function () {
        homework.getHomeWorkLstInAssessmentPage().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("Naane Varuven")) {
                homework.getDeleteHomeWorkBtnLstInAssessmentPage().eq(index).scrollIntoView().click({ force: true })
                homework.getDeleteReminderPopup().should('be.visible')
                homework.getDeleteBtnForHomeWorkInDeletePopup().click()
                homework.getHomeWorkDeletedSuccessPopup().should('be.visible')
            }
        })
    })

})