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
        home.getSubLstTxtInMyClass().each(($e1,index,$list)=>{
            const txt = $e1.text()
            if(txt === "Tamil"){
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        homework.getAssessmentTab().click()
        cy.wait(1000)
        homework.getCreateNewHomeworkBtn().click()
        homework.getCreateHomeWorkPopupScreen().should('be.visible')
        homework.getCreateHomeworkTitleInPopup().should('have.text',"Create Homework").should('be.visible')
        homework.getHomeworkTitleTxtFldInPopup().type("Ponniyan Selvan")
        homework.getDescriptionTxtFldInPopup().type("Created by Kalki in 18th century")
        homework.getClassAddHomeworkPopupDueDate().click();
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    let dates = parseInt(dayMonthYear[1]) + 1;
    cy.log(dates);
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains(dates).click();
    cy.wait(1000);
    homework.getClassAddHomeworkPopupDueDate().click({ force: true });
        homework.getTimePickerInPopup().click()
        homework.getPMTimeInTimePicker().click()
        homework.getTimePickerInPopup().click({force:true})
        homework.getApproxTimeRequiredDrpDwnInPopup().click()
        homework.getApproxTimeDrpDwnLstInPopup().first().click()
        homework.getSubmitBtnInCreateHomeworkPopup().click()
        homework.getHomeworkCreatedSuccessPopup().should('be.visible')
    })
})