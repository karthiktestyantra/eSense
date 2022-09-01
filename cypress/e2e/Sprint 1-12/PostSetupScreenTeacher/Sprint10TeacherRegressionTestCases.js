/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import MyClassesPage from "../../../support/pageObjects2/MyClassesPage";
import Sprint10Regression from "../../../support/pageObjects2/Sprint10Regression";
import MyCalendarPage from "../../../support/pageObjects2/MyCalendarPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const mcp = new MyClassesPage();
const sr = new Sprint10Regression();
const cp = new MyCalendarPage();

describe("Verify Sprint 10 related functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.reload();
    cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  beforeEach(function () {
    cy.fixture("addHomework").then(function (addHomeworkData) {
      this.addHomeworkData = addHomeworkData;
    });
        cy.fixture("calendarClasses").then(function (classesData) {
          this.classesData = classesData;
        });
  });

  it("Validate teacher is able to login for the second time, landed on dashboard screen", function () {
    ttop.getDashboardTitle().should("have.text", "Your Dashboard");
  });

  it("Validate teacher is able to view School logo, Current date, welcome message with Teacher name, and a calendar link", function () {
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("DD MMM YYYY");
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let now = new Date();
    let day = days[now.getDay()];
    sr.getTodaysDateInDashboardInTeacher().should("contain", day);
    cy.log(todaysDate);
    sr.getTodaysDateInDashboardInTeacher().should("contain", todaysDate);
    sr.getSchoolLogoTeacher().should("be.visible");
    sr.getWelcomeMessageTeacher().then(($el) => {
      let name = $el.text();
      expect(name).to.contain("undertaker !");
    });
    sr.getCalendarLink().should("be.visible");
  });

  it.skip("Validate teacher is able to view No. of Assessments for this month and No of students absent yesterday will be shown on this section", function () {
    sr.getNoOfAssessments().should("be.visible");
    sr.getNoOfStudents().should("be.visible");
  });

  it.skip("Validate teacher is able to view Pending actions section related to classes, attendance, Homework", function () {
    sr.getPendingActionsClass().should("be.visible");
    sr.getPendingActionsAttendance().should("be.visible");
    sr.getPendingActionsHomework().should("be.visible");
  });

  it.skip("Validate Teacher is able to click on 'Mark complete' button", function () {
    sr.getClassMarkCompleteButton().click({ force: true });
  });

  it.skip("Validate Teacher is able to click on 'Mark attendance' button", function () {
    sr.getClassMarkAttendanceButton().click({ force: true });
  });

  it.skip("Validate Teacher is able to click on 'Assign homework' button", function () {
    sr.getClassAssignHomeworkButton().click({ force: true });
  });

  it("Validate teacher is able to view the class performance chart with subjects and classes section", function () {
    sr.getClassPerformanceChart().should("be.visible");
  });

  it.skip("Validate teacher is able to view Milestone progress chart with classes and subject section", function () {
    sr.getMilestoneProgressChart().should("be.visible");
  });

  it("Validate whether the teacher is able to navigate to 'Assessments' in My Classes Module", function () {
    mcp.getMyClassesIcon().click();
    mcp.getArrowButton(0).click();
    mcp.getClassTitle().then(function ($ele) {
      const classTitle = cy.log($ele.text());
    });
    mcp.getAssessmentsTab().click();
  });

  it("Verify the teacher is able to add the homework", function () {
    sr.getCreateNewHomeworkButton().click({force:true});
    sr.getCreateNewHomeworkPopupTitle().should('have.text','Create Homework');
    sr.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
    sr.getClassAddHomeworkPopupDescription().type(
      this.addHomeworkData.description
    );
    sr.getClassAddHomeworkPopupDueDate().click();
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    let dates = parseInt(dayMonthYear[1]) + 1;
    cy.log(dates);
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains(dates).click();
    cy.wait(1000);
    sr.getClassAddHomeworkPopupDueDate().click({ force: true });

    sr.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]')
      .scrollIntoView()
      .click({
        force: true,
      });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    cp.getClassAddHomeworkPopupDueTime().click();

    sr.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });

    sr.getManageStudentsOption().click();
    cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
      cy.wrap($ele).check();
    });
    cy.wait(2000);
    //sr.getAddStudentsSelectAllLink().click();
    sr.getAddStudentsConfirmButton().click();
    sr.getAddHomeworkPopupAttachFilesOption().click();
    sr.getAddHomeworkPopupAddResourcesPopupTitle().should(
      "have.text",
      "Add Resources"
    );
    sr.getAddResourcesPersonalLibTab().click({ force: true });
    sr.getAddResourcesUploadTab().click({ force: true });
    sr.getAddResourcesTopSchoolLibTab().click({ force: true });
    sr.getAddResourcesTopSchoolLibCard().click({force:true});
    sr.getAddResourcesPopupAddResourcesbtn().click();
    cp.getAddHomeworkSaveButton().click({force:true});
    cy.wait(3000);
  });

  it("Validate Teacher is able view total number of students pending to submit the homework as pending count", function () {
    mcp.getAssessmentTab().click({force:true});
    cy.wait(2000);
    mcp.getHomeworkTab().click({force:true});
    cy.wait(2000);
    sr.getPendingTab().click();
    sr.getStudentCountPendingSubmission().should("be.visible");
  });

  it("Validate teacher is able to view the list of student profile picture, name, pending status, due date and time and notify button on each profile", function () {
    sr.getHomeworkCard().each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.homeworkTitle) {
        cy.wrap($ele).click();
      }
    });
    cy.wait(1000);
    sr.getPendingTab().click();
    sr.getStudentCountPendingSubmission().should("be.visible");
    sr.getPendingTabProfilePicture().should("be.visible");
    sr.getPendingTabStudentName().should("be.visible");
    sr.getPendingTabPendingStatus().should("be.visible");
    sr.getPendingTabNotifyIcon().should("be.visible");
  });

  it("Validate teacher is able to click on view button to preview the file", function () {
    sr.getFileSharedTab().click();
   // sr.getFileSharedTabViewIcon().should("be.visible");
  });

  it("Validate teacher is able to click on delete button to delete the file attached to the home work", function () {
    sr.getHomeworkCard().each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.homeworkTitle) {
        cy.wrap($ele).click();
      }
    });
    sr.getEditHomeWorkKababMenu().eq(0).click()
    sr.getEditHomeWorkIcon().click({force:true});
    sr.getAttachFileOption().scrollIntoView().click();
    sr.getAddResourcesUploadTab().click();
    const filepath = "SampleDocs-sample-pdf-file.pdf";
    cy.get(".drop-sub").attachFile(filepath);
    sr.getAddResourcesCloseIcon().click();
    sr.getEditHomeworkUpdateButton().click({force:true});
    cy.wait(8000);
    sr.getEditHomeworkCard().eq(0).click()
    sr.getFileSharedTab().click({force:true});
    sr.getFileSharedDeleteIcon().click({ force: true });
    sr.getResourceRemovedMessage().should("have.text", "Resource removed!");
  });

  it.skip("Validate whether teacher is able to Click on 'Edit' icon in 'Edit Homework' pop up and click on update button", function () {
      cy.get('h6.mb-0').each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.title) {
        cy.wrap($ele).eq(0).click({force:true});
      }
  
    });
    sr.getEditHomeWorkKababMenu().eq(0).click({force:true})
    sr.getEditHomeWorkIcon().click({force:true});
    sr.getAttachFileOption().scrollIntoView().click();
    sr.getFileSharedTabViewIcon().should("be.visible");
    sr.getAddResourcesUploadTab().click();
    const filepath = "SampleDocs-sample-pdf-file.pdf";
    cy.get(".drop-sub").attachFile(filepath);
    sr.getAddResourcesCloseIcon().click();
    sr.getEditHomeworkUpdateButton().click();
    cy.wait(3000);
  });

  it("Validate whether teacher is able to Click on 'Delete' icon in 'Edit Homework' pop up", function () {
    // sr.getEditHomeWorkKababMenu().eq(0).click({force:true})
    // sr.getEditHomeWorkIcon().click({force:true});
    // sr.getEditHomeworkDeleteIcon().click({ force: true });
    // sr.getEditHomeworkPopupCloseIcon().click({ force: true });
    sr.getHomeWorkCardDeleteIcon().eq(0).click({ force: true });
    sr.getHomeworkDelPopDeleteButton().click({force:true});
    cy.wait(4000);
  });

  it("To Verify whether teacher is a able to navigate to 'Add Homework ' pop up  in  My Calendar", function () {
    cp.getMyCalendar().click({ force: true });
    cy.go('back')
    cy.go('forward')
    cp.getCalendarRightSideForwardIcon().click({ force: true });
    cy.wait(2000);
    cp.getSampleClass()
      .contains(this.classesData.class)
      .click({ force: true });
    cp.getClassAddHomeworkOption().scrollIntoView().click({ force: true });
    cp.getClassAddHomeworkPopupTitle().should("have.text", "Add Homework");
  });

  it("To Verify whether teacher is a able to enter alphanumeric homework title in title field of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
  });

  it("To Verify whether teacher is a able to enter alphanumeric Description in  Description field of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupDescription().type(
      this.addHomeworkData.description
    );
  });

  it("To Verify whether teacher is a able to Choose due date from Date picker icon in 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupDueDate().click();
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains('30').click();
    cp.getClassAddHomeworkPopupDueDate().click({ force: true });
  });

  it("To Verify whether teacher is a able to Choose due time in 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]').click({
      force: true
    });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    cp.getClassAddHomeworkPopupDueTime().click();
  });

  it("To Verify whether teacher is a able to Choose the Approximate time in 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });
  });

  it("To Verify whether teacher is a able to navigate to 'Add Student' pop through Manage Students link in 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupManageStudents().click();
  });

  it("To Verify whether teacher is a able to click on Select all button in Add Student pop up of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupSelectAllStudents().click();
  });


  it("To Verify whether teacher is a able to Click on 'Cancel' button in Add Student pop up of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkStudentPopupCancelButton().click({force:true});
  });

  it("To Verify whether teacher is a able to Click on 'Close'  icon in Add Student pop up of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupManageStudents().click({ force: true });
    cp.getClassAddHomeworkPopupAddStudentCloseIcon().click();
  });

  it("To Verify whether teacher is a able to Click on 'Confirm' button in Add Student pop up of 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupManageStudents().click({ force: true });
    cp.getClassAddHomeworkPopupAddStudentCloseIcon().click();
  });

  it("To Verify whether teacher is a able to navigate to 'Add Resources' Pop up in 'Add Homework' pop up", function () {
    cp.getClassAddHomeworkPopupAttachFiles().click({ force: true });
    cp.getClassAddHomeworkPopupAddResourcesPopupTitle().should(
      "have.text",
      "Add Resources"
    );
  });

  it("To Verify whether teacher is a able to switch between the available tabs in Add Resources Pop up  of 'Add Homework' pop up", function () {
    cp.getAddResourcesPersonalLibTab().click();
    cp.getAddResourcesUploadTab().click();
    cp.getAddResourcesTopSchoolLibTab().click();
  });

  it("To Verify whether teacher is a able to attach the Resources from 'Personal Library' in Add Resources Pop up  of 'Add Homework' pop up", function () {
    cp.getAddResourcesPersonalLibTab().click();
    cp.getAddResourcesPersonalLibCard().click();
    cp.getAddResourcesTabAddResourcesbtn().click();
  });

  it("To Verify whether teacher is a able to Click on ' Cancel' button in Add Resources Pop up of 'Add Homework' pop up", function(){
    cp.getClassAddHomeworkPopupAttachFiles().click({force:true});
    cp.getAddResourcesTabCancelbtn().click();
  });

  it("Verify that the Teacher is able to save the homework", function(){
    cp.getAddHomeworkSaveButton().click({force:true});
    cy.wait(2000);
  });

  it("To Verify whether teacher is a able to Click on 'Edit' icon in 'Homework' pop up", function(){
    cp.getHomeworkViewButton().click({force:true});
    cy.get('.hw-item:visible').then((ele) => {
    cy.log(ele.length);
    for (let i = 0; i < ele.length; i++) {
    cp.getHomeworkTitle(i).then((el) => {
    cy.log(el.text());
    if (el.text() === this.addHomeworkData.title) {
    cp.getHomeworkEditIcon(i).click();
    cy.wait(1000);
    cp.getClassEditHomeworkPopupCloseIcon().click({force:true});
    cy.wait(1000);
  }
})
    }
  });
});

it("To Verify whether teacher is a able to Click on 'Delete' icon in 'Homework' pop up", function(){
  cy.get('.hw-item:visible').then((ele) => {
    cy.log(ele.length);
    for (let i = 0; i < ele.length; i++) {
    cp.getHomeworkTitle(i).then((el) => {
    cy.log(el.text());
    if (el.text() === this.addHomeworkData.title) {
    cp.getHomeworkDeleteIcon(i).click();
    cy.wait(1000);
    cy.get('.delete_reminder-btn_container > .MuiButton-contained').click();
    cp.getDeletedHomeworkMessagePopup().should("contain", "Homework deleted!");
    }
  });
}
});
});

it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Add Homework' pop up", function(){
  cy.wait(1000);
  cy.get('.add_homework-btn').click({ force: true });
  cp.getClassAddHomeworkPopupCancelButton().click({ force: true });
});

it("To Verify whether teacher is a able to Click on close icon in 'Add Homework' pop up", function(){
  cy.wait(1000);
  cp.getClassAddHomeworkOption().scrollIntoView().click({ force: true });
  cp.getClassAddHomeworkPopupCloseIcon().click({ force: true });
});

it("To verify whether teacher is able to navigate and view the Homework page in My Classes", function(){
  mcp.getMyClassesIcon().click({force:true});
    mcp.getArrowButton(0).click();
    mcp.getClassTitle().then(function ($ele) {
      const classTitle = cy.log($ele.text());

    });
    mcp.getAssessmentsTab().click();
});

it("To verify whether teacher is able to navigate to 'Create Homework' pop up in My Classes", function(){
  sr.getCreateNewHomeworkButton().click();
  sr.getCreateNewHomeworkPopupTitle().should('have.text','Create Homework');
});

it("To Verify whether teacher is a able to enter alphanumeric homework title in title field of 'Create Homework' pop up in My Classes", function(){
  sr.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
});

it("To Verify whether teacher is a able to enter alphanumeric Description in Description field of 'Create Homework' pop up in My Classes", function(){
  sr.getClassAddHomeworkPopupDescription().type(this.addHomeworkData.description);
});

it("To Verify whether teacher is a able to Choose due date from Date picker icon in 'Create Homework' pop up in My Classes", function(){
  sr.getClassAddHomeworkPopupDueDate().click();
  const dayjs = require("dayjs");
  const todaysDate = dayjs().format("MMM DD, YYYY");
  var dayMonthYear = todaysDate.split(" ");
  let dates = parseInt(dayMonthYear[1])+1;
  cy.log(dates);
  cy.get(".MuiPickersDay-dayWithMargin:visible").contains(dates).click();
  cy.wait(1000);
  sr.getClassAddHomeworkPopupDueDate().click({ force: true });
  
});

it("To Verify whether teacher is a able to Choose due time in 'Create Homework' pop up in My Classes", function(){
  sr.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]').scrollIntoView().click({
      force: true,
    });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    cp.getClassAddHomeworkPopupDueTime().click();
});

it("To Verify whether teacher is a able to Choose the Approximate time in 'Create Homework' pop up in My Classes", function(){
  sr.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });
});

it("To Verify whether teacher is a able to click on Select all button in Add Student pop up of 'Add Student' pop up of 'Create Homework' pop up in My Classes", function(){
  sr.getManageStudentsOption().click();
  cy.wait(1000);
  sr.getAddStudentsSelectAllLink().click();
});

it("To Verify whether teacher is a able to Click on the Check box of Student/s in 'Add Student' pop up of 'Create Homework ' pop up in My Classes", function(){
  cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
    cy.wrap($ele).click();
    sr.getAddStudentsSelectAllLink().click();
});
});

it("To Verify whether teacher is a able to Click on 'Confirm' button in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function(){
  sr.getAddStudentsConfirmButton().click();
});

it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function(){
  sr.getManageStudentsOption().click();
  sr.getAddStudentsCancelButton().click();
});

it("To Verify whether teacher is a able to Click on 'Close' icon in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function(){
  sr.getManageStudentsOption().click();
  sr.getAddStudentsCloseIcon().click();
});

it("To Verify whether teacher is a able to view and remove the added students in 'Create Homework' pop up in My Classes", function(){
  sr.getManageStudentsOption().click();
  cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
    cy.wrap($ele).click();
});
cy.wait(2000);
sr.getAddStudentsSelectAllLink().click();
sr.getAddStudentsConfirmButton().click();
});

it("To Verify whether teacher is a able to navigate to 'Add Resources' Pop up in 'Create Homework' pop up in My Classes", function(){
  sr.getAddHomeworkPopupAttachFilesOption().click();
  sr.getAddHomeworkPopupAddResourcesPopupTitle().should('have.text','Add Resources');
});

it("To Verify whether teacher is a able to Switch between the available tabs in Add Resources Pop up  of 'Create Homework' pop up in My Classes", function(){
  sr.getAddResourcesPersonalLibTab().click({force:true});
  sr.getAddResourcesUploadTab().click({force:true});
  sr.getAddResourcesTopSchoolLibTab().click({force:true});
});

it("To Verify whether teacher is a able to attach the Resources from 'TopSchool Library' in Add Resources Pop up of 'Create Homework' pop up in My Classe", function(){
  sr.getAddResourcesTopSchoolLibCard().click();
  sr.getAddResourcesPopupAddResourcesbtn().click();
});

it("To Verify whether teacher is a able to attach the Resources from 'TopSchool Library' in Add Resources Pop up of 'Create Homework' pop up in My Classe", function(){
  sr.getAddHomeworkPopupAttachFilesOption().click();
  sr.getAddResourcesPersonalLibTab().click({force:true});
  sr.getAddResourcesPersonalLibCard().click();
  sr.getAddResourcesPopupAddResourcesbtn().click();
});

it("To Verify whether teacher is a able to Click on 'Cancel' button in Add Resources Pop up of 'Create Homework' pop up in My Classes", function(){
  sr.getAddHomeworkPopupAttachFilesOption().click();
  sr.getAddResourcesPopupCancelbtn().click();
  cy.wait(1000);
  sr.getAddHomeworkSaveButton().click({force:true});
  cy.wait(8000);
});

// it("To Verify whether teacher is able to Click on 'Edit' icon in 'Edit Homework' pop up in My Classes", function(){
//   cy.get('div.group-card').then((ele) => {
//   cy.log(ele.length);
//   for (let i = 0; i < ele.length; i++) {
//   sr.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
//   cy.log(el.text());
//   if (el.text() === this.addHomeworkData.title) {
//   sr.getHomeworkEditIconUnderHomeworkTab(i).click();
//   cy.wait(1000);
//   sr.getEditHomeworkPopupCloseIcon().click({force:true});
//   }
// });
//   }
// });
// });

// it("To Verify whether teacher is able to Click on 'Save Changes' button in 'Edit Homework' pop up in My Classes", function(){
//   cy.get('div.group-card').then((ele) => {
//     cy.log(ele.length);
//     for (let i = 0; i < ele.length; i++) {
//     sr.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
//     cy.log(el.text());
//     if (el.text() === this.addHomeworkData.title) {
//     sr.getHomeworkEditIconUnderHomeworkTab(i).click();
//     cy.wait(1000);
//     sr.getAddHomeworkSaveButton().click({force:true});
//     cy.wait(5000);
//     }
//   });
//     }
//   });
// });

// it("To Verify whether teacher is able to Click on 'Delete' icon pop up in My Classes", function(){
//   cy.get('div.group-card').then((ele) => {
//     cy.log(ele.length);
//     for (let i = 0; i < ele.length-1; i++) {
//     sr.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
//     cy.log(el.text());
//     if (el.text() === this.addHomeworkData.title) {
//     sr.getHomeworkDeleteIconUnderHomeworkTab(i).click();
//     cy.wait(1000);
//     sr.getHomeworkDelPopDeleteButton().click({force:true});
//     cy.wait(3000);
//     sr.getDeletedHomeworkMessagePopup().should('have.text','Homework deleted!');
//     }
//   });
//     }
//   });
//     sr.getHomeWorkCardDeleteIcon().first().click({ force: true });
//     sr.getHomeworkDelPopDeleteButton().click({force:true});
//     cy.wait(4000);
// });

it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Create Homework' pop up in My Classes", function(){
  sr.getCreateNewHomeworkButton().click();
  sr.getAddHomeworkCancelButton().click();
});
});
