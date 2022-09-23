// const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
// const walkthroughPage = require("../../../../support/pageObjects/LMS-1/WalkthroughPage")
// const classOverviewPage = require("../../../../support/pageObjects/LMS-1/ClassOverviewPage")
// const curriculumOverviewPage = require("../../../../support/pageObjects/LMS-1/CurriculumOverviewPage")
// const requestChange = require("../../../../support/pageObjects/LMS-1/RequestChange")
// const timeTableOverviewPage = require("../../../../support/pageObjects/LMS-1/TimeTableOverviewPage")

// describe("Verify Walkthrough Page functionalities", function () {

//     beforeEach(function () {
//         cy.fixture("LMS/presetupTeacherLoginDetails").as("validLoginData")
//         cy.fixture("LMS/walkthroughPageTitles").as("walkthroughTitles")
//         cy.fixture("LMS/requestChange").as("requestChangeData")
//     });

//     it("Verify Walkthrough elements", function () {
//         cy.visit("https://mi.topschool.co.in/");
//         indexPage.getTeacher().click();
//         cy.reload();
//         cy.login(this.validLoginData.username, this.validLoginData.password);
//         walkthroughPage.getNextIcon().should("be.visible");
//         walkthroughPage.getcarousel().should("be.visible");
//         walkthroughPage.getCloseIcon().should("be.visible");
//     });

//     it("Verify Walkthrough Navigation", function () {
//         walkthroughPage.getTitle().then(($ele) => {
//             cy.log($ele.attr("class"));

//             let i = parseInt($ele.attr("class").match("\\d").toString());

//             while (true) {
//                 //cy.log(i)
//                 walkthroughPage.getTitle().should(
//                     "have.text",
//                     this.walkthroughTitles.page_title[i + 1]
//                 );

//                 i++;

//                 if (i == 5) {
//                     break;
//                 }
//             }
//         });
//         walkthroughPage.getCloseIcon().click();
//         classOverviewPage.getTeacherPortalTitle().should('have.text', 'WELCOME TO THE TEACHER PORTAL')
//     });

//     it("Verify the bottom step content", function () {
//         classOverviewPage.getStepContent().should("have.text", "STEP 1/3");
//         curriculumOverviewPage.getFooterContent().should("have.text", "Your Classes");
//     });

//     it("Verify whether the Request Change and Continue options are displayed and enabled", function () {
//         classOverviewPage.getRequest().should('be.visible').should('be.enabled');
//         classOverviewPage.getContinue().should('be.visible').should('be.enabled');
//     });

//     it("Verify Default Value of the dropdown in Class Overview page Request change", function () {
//         classOverviewPage.getRequest().click();
//         requestChange.getChangeDropdown().should("have.text", "Class Overview");
//         requestChange.getCloseIcon().click();
//     });

//     it("Navigate to Curriculum from ClassOverview", function () {
//         classOverviewPage.getContinue().click();
//         curriculumOverviewPage.getCurriculumTitle().contains("curriculum");
//     });

//     it("Verify the bottom step content", function () {
//         curriculumOverviewPage.getStepContent().should("have.text", "STEP 2/3");
//         curriculumOverviewPage.getFooterContent().should("have.text", "Your Curriculum");
//     });

//     it("Verify whether the Request Change and Continue options are displayed and enabled", function () {
//         curriculumOverviewPage.getRequest().should('be.visible').should('be.enabled');
//         curriculumOverviewPage.getContinue().should('be.visible').should('be.enabled');
//     });

//     it("Verify Default Value of the dropdown in Curriculum Overview page Request change", function () {
//         classOverviewPage.getRequest().click();
//         requestChange.getChangeDropdown().should("have.text", "Curriculum  Overview");
//         requestChange.getCloseIcon().click();
//     });

//     it("Navigate to Timetable from CurriculumOverview", function () {
//         curriculumOverviewPage.getContinue().click();
//         timeTableOverviewPage.getTimetableTitle().contains("weekly timetable");
//     });

//     it("Verify the bottom step content", function () {
//         timeTableOverviewPage.getStepContent().should("have.text", "STEP 3/3");
//         timeTableOverviewPage.getFooterContent().should("have.text", "Your Weekly Timetable");
//     });

//     it("Verify whether the Request Change and Continue options are displayed and enabled", function () {
//         timeTableOverviewPage.getRequest().should('be.visible').should('be.enabled');
//         timeTableOverviewPage.getContinue().should('be.visible').should('be.enabled');
//     });

//     it("Verify Default Value of the dropdown in Timetable Overview page Request change", function () {
//         classOverviewPage.getRequest().click();
//         requestChange.getChangeDropdown().should("have.text", "Timetable Overview");
//         requestChange.getCloseIcon().click();
//     });


//     it("Verify whether the Request Change have What would you like to change? Drop down box, Tell us a bit more about the issue text box Text box, Send Request button and close icon are displayed and enabled", function () {
//         classOverviewPage.getRequest().click();
//         requestChange.getChangeDropdown().should('be.visible');
//         requestChange.getIssueTextBox().should('be.visible').should('be.enabled');
//         requestChange.getSendRequest().should('be.visible').should('be.enabled');
//         requestChange.getCloseIcon().should('be.visible');
//     })

//     it("Validation of Field alert message in Request Change", function () {
//         requestChange.getSendRequest().click({ force: true });
//         requestChange.getErrorMessage().should("have.text", "This field is required");
//         requestChange.getCloseIcon().click();
//     });

//     it("Verify the response of Send Request", function () {
//         classOverviewPage.getRequest().click();
//         requestChange.getIssueTextBox().type(this.requestChangeData.validRequestChange);
//         requestChange.getSendRequest().click();
//         requestChange.getSuccessfulMessage().should("have.text", "Request Sent Successfully");
//         requestChange.getRequestType().contains("Timetable Overview");
//         requestChange.getSuccessfulMessageScreenCloseIcon().click();
//     });

//     it("Verify the response of Send Request with Exact count of 3000 Characters", function () {
//         classOverviewPage.getRequest().click({ force: true });
//         requestChange.getIssueTextBox().type(this.requestChangeData.exactRangeRequestChange);
//         requestChange.getSendRequest().click({ force: true });
//         requestChange.getSuccessfulMessage().should("have.text", "Request Sent Successfully");
//         requestChange.getRequestType().contains("Timetable Overview");
//         requestChange.getCloseIcon().click({ force: true });
//     });

//     it("Verify the response of Send Request with more than 3000 Characters", function () {
//         classOverviewPage.getRequest().click({ force: true });
//         requestChange.getIssueTextBox().type(this.requestChangeData.beyondRangeRequestChange);
//         requestChange.getErrorMessage().should("have.text", "Maximum word count exceeded.");
//         requestChange.getSendRequest().should('be.disabled');
//     });

// });
