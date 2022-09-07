// import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
// import LoginPage from "../../../../support/pageObjects/LMS-1/LoginPage";
// import WalkthroughPage from "../../../../support/pageObjects/LMS-1/WalkthroughPage";
// import ClassOverviewPage from "../../../../support/pageObjects/LMS-1/ClassOverviewPage";
// import CurriculumOverviewPage from "../../../../support/pageObjects/LMS-1/CurriculumOverviewPage";
// import RequestChange from "../../../../support/pageObjects/LMS-1/RequestChange";
// import TimeTableOverviewPage from "../../../../support/pageObjects/LMS-1/TimeTableOverviewPage";


// const ip = new IndexPage();
// const lp = new LoginPage();
// const wp = new WalkthroughPage();
// const cop = new ClassOverviewPage();
// const cup = new CurriculumOverviewPage();
// const rcp = new RequestChange();
// const ttop = new TimeTableOverviewPage();

// describe("Verify Walkthrough Page functionalities", function () {
//   beforeEach(function () {
//     cy.fixture("LMS/presetupTeacherLoginDetails").then(function (validLoginData) {
//       this.validLoginData = validLoginData;
//     });
//     cy.fixture("LMS/walkthroughPageTitles").then(function (walkthroughTitles) {
//       this.walkthroughTitles = walkthroughTitles;
//     });

//     cy.fixture("LMS/requestChange").then(function (requestChangeData) {
//       this.requestChangeData = requestChangeData;
//     });
//   });

//   it("Verify Walkthrough elements", function () {
//     cy.visit("https://mi.topschool.co.in/");
//     ip.getTeacher().click();
//     cy.reload();
//     cy.login(this.validLoginData.username, this.validLoginData.password);
//     wp.getNextIcon().should("be.visible");
//     wp.getcarousel().should("be.visible");
//     wp.getCloseIcon().should("be.visible");
//   });

//   it("Verify Walkthrough Navigation", function () {
//     wp.getTitle().then(($ele) => {
//       cy.log($ele.attr("class"));

//       let i = parseInt($ele.attr("class").match("\\d").toString());

//       while (true) {
//         //cy.log(i)
//         wp.getTitle().should(
//           "have.text",
//           this.walkthroughTitles.page_title[i + 1]
//         );

//         i++;

//         if (i == 5) {
//           break;
//         }
//       }
//     });
//     wp.getCloseIcon().click();
//     cop.getTeacherPortalTitle().should('have.text','WELCOME TO THE TEACHER PORTAL')
//   });

//   it("Verify the bottom step content", function () {
//     cop.getStepContent().should("have.text", "STEP 1/3");
//     cup.getFooterContent().should("have.text", "Your Classes");
//   });

//   it("Verify whether the Request Change and Continue options are displayed and enabled", function(){
//     cop.getRequest().should('be.visible').should('be.enabled');
//     cop.getContinue().should('be.visible').should('be.enabled');
//   });

//   it("Verify Default Value of the dropdown in Class Overview page Request change", function () {
//     cop.getRequest().click();
//     rcp.getChangeDropdown().should("have.text", "Class Overview");
//     rcp.getCloseIcon().click();
//   });

//   it("Navigate to Curriculum from ClassOverview", function () {
//     cop.getContinue().click();
//     cup.getCurriculumTitle().contains("curriculum");
//   });

//   it("Verify the bottom step content", function () {
//     cup.getStepContent().should("have.text", "STEP 2/3");
//     cup.getFooterContent().should("have.text","Your Curriculum");
//   });

//   it("Verify whether the Request Change and Continue options are displayed and enabled", function(){
//     cup.getRequest().should('be.visible').should('be.enabled');
//     cup.getContinue().should('be.visible').should('be.enabled');
//   });

//   it("Verify Default Value of the dropdown in Curriculum Overview page Request change", function (){
//     cop.getRequest().click();
//     rcp.getChangeDropdown().should("have.text", "Curriculum  Overview");
//     rcp.getCloseIcon().click();
//   });

//   it("Navigate to Timetable from CurriculumOverview", function () {
//     cup.getContinue().click();
//     ttop.getTimetableTitle().contains("weekly timetable");
//   });

//   it("Verify the bottom step content", function () {
//     ttop.getStepContent().should("have.text", "STEP 3/3");
//     ttop.getFooterContent().should("have.text", "Your Weekly Timetable");
//   });

//   it("Verify whether the Request Change and Continue options are displayed and enabled", function(){
//     ttop.getRequest().should('be.visible').should('be.enabled');
//     ttop.getContinue().should('be.visible').should('be.enabled');
//   });
  
//   it("Verify Default Value of the dropdown in Timetable Overview page Request change", function (){
//     cop.getRequest().click();
//     rcp.getChangeDropdown().should("have.text", "Timetable Overview");
//     rcp.getCloseIcon().click();
//   });


//   it("Verify whether the Request Change have What would you like to change? Drop down box, Tell us a bit more about the issue text box Text box, Send Request button and close icon are displayed and enabled", function(){
//     cop.getRequest().click();
//     rcp.getChangeDropdown().should('be.visible');
//     rcp.getIssueTextBox().should('be.visible').should('be.enabled');
//     rcp.getSendRequest().should('be.visible').should('be.enabled');
//     rcp.getCloseIcon().should('be.visible');
//   })

//   it("Validation of Field alert message in Request Change", function () {
//     rcp.getSendRequest().click({force : true});
//     rcp.getErrorMessage().should("have.text", "This field is required");
//     rcp.getCloseIcon().click();
//   });

//   it("Verify the response of Send Request", function () {
//     cop.getRequest().click();
//     rcp.getIssueTextBox().type(this.requestChangeData.validRequestChange);
//     rcp.getSendRequest().click();
//     rcp.getSuccessfulMessage().should("have.text", "Request Sent Successfully");
//     rcp.getRequestType().contains("Timetable Overview");
//     rcp.getSuccessfulMessageScreenCloseIcon().click();
//   });

//   it("Verify the response of Send Request with Exact count of 3000 Characters", function () {
//     cop.getRequest().click({force:true});
//     rcp.getIssueTextBox().type(this.requestChangeData.exactRangeRequestChange);
//     rcp.getSendRequest().click({force:true});
//     rcp.getSuccessfulMessage().should("have.text", "Request Sent Successfully");
//     rcp.getRequestType().contains("Timetable Overview");
//     rcp.getCloseIcon().click({force:true});
//   });

//   it("Verify the response of Send Request with more than 3000 Characters", function () {
//     cop.getRequest().click({force:true});
//     rcp.getIssueTextBox().type(this.requestChangeData.beyondRangeRequestChange);
//     rcp.getErrorMessage().should("have.text", "Maximum word count exceeded.");
//     rcp.getSendRequest().should('be.disabled');
//   });

// });
