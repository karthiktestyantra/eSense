const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const myClassesPage = require('../../../../support/pageObjects/LMS-1/MyClassesPage')
const sprint10Regression = require('../../../../support/pageObjects/LMS-1/Sprint10Regression')
const myCalendarPage = require('../../../../support/pageObjects/LMS-1/MyCalendarPage')

describe("Verify Sprint 10 related functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/addHomework").as("addHomeworkData")
    cy.fixture("LMS/calendarClasses").as("classesData")
  })

  it("Validate teacher is able to login for the second time, landed on dashboard screen", function () {
    timeTableOverviewPage.getDashboardTitle().should("have.text", "Your Dashboard");
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
    sprint10Regression.getTodaysDateInDashboardInTeacher().should("contain", day);
    cy.log(todaysDate);
    sprint10Regression.getTodaysDateInDashboardInTeacher().should("contain", todaysDate);
    sprint10Regression.getSchoolLogoTeacher().should("be.visible");
    sprint10Regression.getWelcomeMessageTeacher().then(($el) => {
      let name = $el.text();
      expect(name).to.contain("undertaker !");
    });
    sprint10Regression.getCalendarLink().should("be.visible");
  });

  it.skip("Validate teacher is able to view No. of Assessments for this month and No of students absent yesterday will be shown on this section", function () {
    sprint10Regression.getNoOfAssessments().should("be.visible");
    sprint10Regression.getNoOfStudents().should("be.visible");
  });

  it.skip("Validate teacher is able to view Pending actions section related to classes, attendance, Homework", function () {
    sprint10Regression.getPendingActionsClass().should("be.visible");
    sprint10Regression.getPendingActionsAttendance().should("be.visible");
    sprint10Regression.getPendingActionsHomework().should("be.visible");
  });

  it("Validate Teacher is able to click on 'Mark complete' button", function () {
    sprint10Regression.getClassMarkCompleteButton().click({ force: true });
  });

  it.skip("Validate Teacher is able to click on 'Mark attendance' button", function () {
    sprint10Regression.getClassMarkAttendanceButton().click({ force: true });
  });

  it.skip("Validate Teacher is able to click on 'Assign homework' button", function () {
    sprint10Regression.getClassAssignHomeworkButton().click({ force: true });
  });

  it.skip("Validate teacher is able to view the class performance chart with subjects and classes section", function () {
    sprint10Regression.getClassPerformanceChart().should("be.visible");
  });

  it.skip("Validate teacher is able to view Milestone progress chart with classes and subject section", function () {
    sprint10Regression.getMilestoneProgressChart().should("be.visible");
  });

  it("Validate whether the teacher is able to navigate to 'Assessments' in My Classes Module", function () {
    myClassesPage.getMyClassesIcon().click();
    myClassesPage.getArrowButton(0).click();
    myClassesPage.getClassTitle().then(function ($ele) {
      const classTitle = cy.log($ele.text());
    });
    myClassesPage.getAssessmentsTab().click();
  });

  it("Verify the teacher is able to add the homework", function () {
    sprint10Regression.getCreateNewHomeworkButton().click({ force: true });
    sprint10Regression.getCreateNewHomeworkPopupTitle().should('have.text', 'Create Homework');
    sprint10Regression.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
    sprint10Regression.getClassAddHomeworkPopupDescription().type(
      this.addHomeworkData.description
    );
    sprint10Regression.getClassAddHomeworkPopupDueDate().click();
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    let dates = parseInt(dayMonthYear[1]) + 1;
    cy.log(dates);
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains(dates).click();
    cy.wait(1000);
    sprint10Regression.getClassAddHomeworkPopupDueDate().click({ force: true });

    sprint10Regression.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]')
      .scrollIntoView()
      .click({
        force: true,
      });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    myCalendarPage.getClassAddHomeworkPopupDueTime().click();

    sprint10Regression.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });

    sprint10Regression.getManageStudentsOption().click();
    cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
      cy.wrap($ele).check();
    });
    cy.wait(2000);
    //sprint10Regression.getAddStudentsSelectAllLink().click();
    sprint10Regression.getAddStudentsConfirmButton().click();
    sprint10Regression.getAddHomeworkPopupAttachFilesOption().click();
    sprint10Regression.getAddHomeworkPopupAddResourcesPopupTitle().should(
      "have.text",
      "Add Resources"
    );
    sprint10Regression.getAddResourcesPersonalLibTab().click({ force: true });
    sprint10Regression.getAddResourcesUploadTab().click({ force: true });
    sprint10Regression.getAddResourcesTopSchoolLibTab().click({ force: true });
    sprint10Regression.getAddResourcesTopSchoolLibCard().click({ force: true });
    sprint10Regression.getAddResourcesPopupAddResourcesbtn().click();
    myCalendarPage.getAddHomeworkSaveButton().click({ force: true });
    cy.wait(3000);
  });

  it("Validate Teacher is able view total number of students pending to submit the homework as pending count", function () {
    myClassesPage.getAssessmentTab().click({ force: true });
    cy.wait(2000);
    myClassesPage.getHomeworkTab().click({ force: true });
    cy.wait(2000);
    sprint10Regression.getPendingTab().click();
    sprint10Regression.getStudentCountPendingSubmission().should("be.visible");
  });

  it("Validate teacher is able to view the list of student profile picture, name, pending status, due date and time and notify button on each profile", function () {
    sprint10Regression.getHomeworkCard().each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.homeworkTitle) {
        cy.wrap($ele).click();
      }
    });
    cy.wait(1000);
    sprint10Regression.getPendingTab().click();
    sprint10Regression.getStudentCountPendingSubmission().should("be.visible");
    sprint10Regression.getPendingTabProfilePicture().should("be.visible");
    sprint10Regression.getPendingTabStudentName().should("be.visible");
    sprint10Regression.getPendingTabPendingStatus().should("be.visible");
    sprint10Regression.getPendingTabNotifyIcon().should("be.visible");
  });

  it("Validate teacher is able to click on view button to preview the file", function () {
    sprint10Regression.getFileSharedTab().click();
    // sprint10Regression.getFileSharedTabViewIcon().should("be.visible");
  });

  it("Validate teacher is able to click on delete button to delete the file attached to the home work", function () {
    sprint10Regression.getHomeworkCard().each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.homeworkTitle) {
        cy.wrap($ele).click();
      }
    });
    sprint10Regression.getEditHomeWorkKababMenu().eq(0).click()
    sprint10Regression.getEditHomeWorkIcon().click({ force: true });
    sprint10Regression.getAttachFileOption().scrollIntoView().click();
    sprint10Regression.getAddResourcesUploadTab().click();
    const filepath = "LMS/SampleDocs-sample-pdf-file.pdf";
    cy.get(".drop-sub").attachFile(filepath);
    sprint10Regression.getAddResourcesCloseIcon().click();
    sprint10Regression.getEditHomeworkUpdateButton().click({ force: true });
    cy.wait(8000);
    sprint10Regression.getEditHomeworkCard().eq(0).click()
    sprint10Regression.getFileSharedTab().click({ force: true });
    cy.wait(2000)
    sprint10Regression.getFileSharedDeleteIcon().click({ force: true });
    sprint10Regression.getResourceRemovedMessage().should("have.text", "Resource removed!");
  });

  it.skip("Validate whether teacher is able to Click on 'Edit' icon in 'Edit Homework' pop up and click on update button", function () {
    cy.get('h6.mb-0').each(($ele, index, $list) => {
      if ($ele.text() === this.addHomeworkData.title) {
        cy.wrap($ele).eq(0).click({ force: true });
      }

    });
    sprint10Regression.getEditHomeWorkKababMenu().eq(0).click({ force: true })
    sprint10Regression.getEditHomeWorkIcon().click({ force: true });
    sprint10Regression.getAttachFileOption().scrollIntoView().click();
    sprint10Regression.getFileSharedTabViewIcon().should("be.visible");
    sprint10Regression.getAddResourcesUploadTab().click();
    const filepath = "LMS/SampleDocs-sample-pdf-file.pdf";
    cy.get(".drop-sub").attachFile(filepath);
    sprint10Regression.getAddResourcesCloseIcon().click();
    sprint10Regression.getEditHomeworkUpdateButton().click();
    cy.wait(3000);
  });

  it("Validate whether teacher is able to Click on 'Delete' icon in 'Edit Homework' pop up", function () {
    // sprint10Regression.getEditHomeWorkKababMenu().eq(0).click({force:true})
    // sprint10Regression.getEditHomeWorkIcon().click({force:true});
    // sprint10Regression.getEditHomeworkDeleteIcon().click({ force: true });
    // sprint10Regression.getEditHomeworkPopupCloseIcon().click({ force: true });
    sprint10Regression.getHomeWorkCardDeleteIcon().eq(0).click({ force: true });
    sprint10Regression.getHomeworkDelPopDeleteButton().click({ force: true });
    cy.wait(4000);
  });

  it("To Verify whether teacher is a able to navigate to 'Add Homework ' pop up  in  My Calendar", function () {
    myCalendarPage.getMyCalendar().click({ force: true });
    cy.go('back')
    cy.go('forward')
    myCalendarPage.getCalendarRightSideForwardIcon().click({ force: true });
    cy.wait(2000);
    myCalendarPage.getSampleClass()
      .contains(this.classesData.class)
      .click({ force: true });
    myCalendarPage.getClassAddHomeworkOption().scrollIntoView().click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupTitle().should("have.text", "Add Homework");
  });

  it("To Verify whether teacher is a able to enter alphanumeric homework title in title field of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
  });

  it("To Verify whether teacher is a able to enter alphanumeric Description in  Description field of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupDescription().type(
      this.addHomeworkData.description
    );
  });

  it("To Verify whether teacher is a able to Choose due date from Date picker icon in 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupDueDate().click();
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains('30').click();
    myCalendarPage.getClassAddHomeworkPopupDueDate().click({ force: true });
  });

  it("To Verify whether teacher is a able to Choose due time in 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]').click({
      force: true
    });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    myCalendarPage.getClassAddHomeworkPopupDueTime().click();
  });

  it("To Verify whether teacher is a able to Choose the Approximate time in 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });
  });

  it("To Verify whether teacher is a able to navigate to 'Add Student' pop through Manage Students link in 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupManageStudents().click();
  });

  it("To Verify whether teacher is a able to click on Select all button in Add Student pop up of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupSelectAllStudents().click();
  });


  it("To Verify whether teacher is a able to Click on 'Cancel' button in Add Student pop up of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkStudentPopupCancelButton().click({ force: true });
  });

  it("To Verify whether teacher is a able to Click on 'Close'  icon in Add Student pop up of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupManageStudents().click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupAddStudentCloseIcon().click();
  });

  it("To Verify whether teacher is a able to Click on 'Confirm' button in Add Student pop up of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupManageStudents().click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupAddStudentCloseIcon().click();
  });

  it("To Verify whether teacher is a able to navigate to 'Add Resources' Pop up in 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupAttachFiles().click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupAddResourcesPopupTitle().should(
      "have.text",
      "Add Resources"
    );
  });

  it("To Verify whether teacher is a able to switch between the available tabs in Add Resources Pop up  of 'Add Homework' pop up", function () {
    myCalendarPage.getAddResourcesPersonalLibTab().click();
    myCalendarPage.getAddResourcesUploadTab().click();
    myCalendarPage.getAddResourcesTopSchoolLibTab().click();
  });

  it("To Verify whether teacher is a able to attach the Resources from 'Personal Library' in Add Resources Pop up  of 'Add Homework' pop up", function () {
    myCalendarPage.getAddResourcesPersonalLibTab().click();
    myCalendarPage.getAddResourcesPersonalLibCard().click();
    myCalendarPage.getAddResourcesTabAddResourcesbtn().click();
  });

  it("To Verify whether teacher is a able to Click on ' Cancel' button in Add Resources Pop up of 'Add Homework' pop up", function () {
    myCalendarPage.getClassAddHomeworkPopupAttachFiles().click({ force: true });
    myCalendarPage.getAddResourcesTabCancelbtn().click();
  });

  it("Verify that the Teacher is able to save the homework", function () {
    myCalendarPage.getAddHomeworkSaveButton().click({ force: true });
    cy.wait(2000);
  });

  it("To Verify whether teacher is a able to Click on 'Edit' icon in 'Homework' pop up", function () {
    myCalendarPage.getHomeworkViewButton().click({ force: true });
    cy.get('.hw-item:visible').then((ele) => {
      cy.log(ele.length);
      for (let i = 0; i < ele.length; i++) {
        myCalendarPage.getHomeworkTitle(i).then((el) => {
          cy.log(el.text());
          if (el.text() === this.addHomeworkData.title) {
            myCalendarPage.getHomeworkEditIcon(i).click();
            cy.wait(1000);
            myCalendarPage.getClassEditHomeworkPopupCloseIcon().click({ force: true });
            cy.wait(1000);
          }
        })
      }
    });
  });

  it("To Verify whether teacher is a able to Click on 'Delete' icon in 'Homework' pop up", function () {
    cy.get('.hw-item:visible').then((ele) => {
      cy.log(ele.length);
      for (let i = 0; i < ele.length; i++) {
        myCalendarPage.getHomeworkTitle(i).then((el) => {
          cy.log(el.text());
          if (el.text() === this.addHomeworkData.title) {
            myCalendarPage.getHomeworkDeleteIcon(i).click();
            cy.wait(1000);
            cy.get('.delete_reminder-btn_container > .MuiButton-contained').click();
            myCalendarPage.getDeletedHomeworkMessagePopup().should("contain", "Homework deleted!");
          }
        });
      }
    });
  });

  it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Add Homework' pop up", function () {
    cy.wait(1000);
    cy.get('.add_homework-btn').click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupCancelButton().click({ force: true });
  });

  it("To Verify whether teacher is a able to Click on close icon in 'Add Homework' pop up", function () {
    cy.wait(1000);
    myCalendarPage.getClassAddHomeworkOption().scrollIntoView().click({ force: true });
    myCalendarPage.getClassAddHomeworkPopupCloseIcon().click({ force: true });
  });

  it("To verify whether teacher is able to navigate and view the Homework page in My Classes", function () {
    myClassesPage.getMyClassesIcon().click({ force: true });
    myClassesPage.getArrowButton(0).click();
    myClassesPage.getClassTitle().then(function ($ele) {
      const classTitle = cy.log($ele.text());

    });
    myClassesPage.getAssessmentsTab().click();
  });

  it("To verify whether teacher is able to navigate to 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getCreateNewHomeworkButton().click();
    sprint10Regression.getCreateNewHomeworkPopupTitle().should('have.text', 'Create Homework');
  });

  it("To Verify whether teacher is a able to enter alphanumeric homework title in title field of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getClassAddHomeworkPopupTitleDetails().type(this.addHomeworkData.title);
  });

  it("To Verify whether teacher is a able to enter alphanumeric Description in Description field of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getClassAddHomeworkPopupDescription().type(this.addHomeworkData.description);
  });

  it("To Verify whether teacher is a able to Choose due date from Date picker icon in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getClassAddHomeworkPopupDueDate().click();
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    let dates = parseInt(dayMonthYear[1]) + 1;
    cy.log(dates);
    cy.get(".MuiPickersDay-dayWithMargin:visible").contains(dates).click();
    cy.wait(1000);
    sprint10Regression.getClassAddHomeworkPopupDueDate().click({ force: true });

  });

  it("To Verify whether teacher is a able to Choose due time in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getClassAddHomeworkPopupDueTime().click({ force: true });
    cy.get('.css-eziifo div:nth-child(3) span[aria-label="6 hours"]').scrollIntoView().click({
      force: true,
    });
    cy.get(".css-sfp64 span:nth-child(1)").click();
    myCalendarPage.getClassAddHomeworkPopupDueTime().click();
  });

  it("To Verify whether teacher is a able to Choose the Approximate time in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getClassAddHomeworkPopupApproxTime().click();
    cy.get("ul.MuiMenu-list li").each(($ele, index, $list) => {
      if ($ele.text() === "30-60 mins") {
        cy.wrap($ele).click();
      }
    });
  });

  it("To Verify whether teacher is a able to click on Select all button in Add Student pop up of 'Add Student' pop up of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getManageStudentsOption().click();
    cy.wait(1000);
    sprint10Regression.getAddStudentsSelectAllLink().click();
  });

  it("To Verify whether teacher is a able to Click on the Check box of Student/s in 'Add Student' pop up of 'Create Homework ' pop up in My Classes", function () {
    cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
      cy.wrap($ele).click();
      sprint10Regression.getAddStudentsSelectAllLink().click();
    });
  });

  it("To Verify whether teacher is a able to Click on 'Confirm' button in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getAddStudentsConfirmButton().click();
  });

  it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getManageStudentsOption().click();
    sprint10Regression.getAddStudentsCancelButton().click();
  });

  it("To Verify whether teacher is a able to Click on 'Close' icon in 'Add Student' pop up of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getManageStudentsOption().click();
    sprint10Regression.getAddStudentsCloseIcon().click();
  });

  it("To Verify whether teacher is a able to view and remove the added students in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getManageStudentsOption().click();
    cy.get('input[type="checkbox"]').each(($ele, index, $list) => {
      cy.wrap($ele).click();
    });
    cy.wait(2000);
    sprint10Regression.getAddStudentsSelectAllLink().click();
    sprint10Regression.getAddStudentsConfirmButton().click();
  });

  it("To Verify whether teacher is a able to navigate to 'Add Resources' Pop up in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getAddHomeworkPopupAttachFilesOption().click();
    sprint10Regression.getAddHomeworkPopupAddResourcesPopupTitle().should('have.text', 'Add Resources');
  });

  it("To Verify whether teacher is a able to Switch between the available tabs in Add Resources Pop up  of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getAddResourcesPersonalLibTab().click({ force: true });
    sprint10Regression.getAddResourcesUploadTab().click({ force: true });
    sprint10Regression.getAddResourcesTopSchoolLibTab().click({ force: true });
  });

  it("To Verify whether teacher is a able to attach the Resources from 'TopSchool Library' in Add Resources Pop up of 'Create Homework' pop up in My Classe", function () {
    sprint10Regression.getAddResourcesTopSchoolLibCard().click();
    sprint10Regression.getAddResourcesPopupAddResourcesbtn().click();
  });

  it("To Verify whether teacher is a able to attach the Resources from 'TopSchool Library' in Add Resources Pop up of 'Create Homework' pop up in My Classe", function () {
    sprint10Regression.getAddHomeworkPopupAttachFilesOption().click();
    sprint10Regression.getAddResourcesPersonalLibTab().click({ force: true });
    sprint10Regression.getAddResourcesPersonalLibCard().click();
    sprint10Regression.getAddResourcesPopupAddResourcesbtn().click();
  });

  it("To Verify whether teacher is a able to Click on 'Cancel' button in Add Resources Pop up of 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getAddHomeworkPopupAttachFilesOption().click();
    sprint10Regression.getAddResourcesPopupCancelbtn().click();
    cy.wait(1000);
    sprint10Regression.getAddHomeworkSaveButton().click({ force: true });
    cy.wait(8000);
  });

  // it("To Verify whether teacher is able to Click on 'Edit' icon in 'Edit Homework' pop up in My Classes", function(){
  //   cy.get('div.group-card').then((ele) => {
  //   cy.log(ele.length);
  //   for (let i = 0; i < ele.length; i++) {
  //   sprint10Regression.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
  //   cy.log(el.text());
  //   if (el.text() === this.addHomeworkData.title) {
  //   sprint10Regression.getHomeworkEditIconUnderHomeworkTab(i).click();
  //   cy.wait(1000);
  //   sprint10Regression.getEditHomeworkPopupCloseIcon().click({force:true});
  //   }
  // });
  //   }
  // });
  // });

  // it("To Verify whether teacher is able to Click on 'Save Changes' button in 'Edit Homework' pop up in My Classes", function(){
  //   cy.get('div.group-card').then((ele) => {
  //     cy.log(ele.length);
  //     for (let i = 0; i < ele.length; i++) {
  //     sprint10Regression.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
  //     cy.log(el.text());
  //     if (el.text() === this.addHomeworkData.title) {
  //     sprint10Regression.getHomeworkEditIconUnderHomeworkTab(i).click();
  //     cy.wait(1000);
  //     sprint10Regression.getAddHomeworkSaveButton().click({force:true});
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
  //     sprint10Regression.getHomeworkTitleUnderHomeworkTab(i).then((el) => {
  //     cy.log(el.text());
  //     if (el.text() === this.addHomeworkData.title) {
  //     sprint10Regression.getHomeworkDeleteIconUnderHomeworkTab(i).click();
  //     cy.wait(1000);
  //     sprint10Regression.getHomeworkDelPopDeleteButton().click({force:true});
  //     cy.wait(3000);
  //     sprint10Regression.getDeletedHomeworkMessagePopup().should('have.text','Homework deleted!');
  //     }
  //   });
  //     }
  //   });
  //     sprint10Regression.getHomeWorkCardDeleteIcon().first().click({ force: true });
  //     sprint10Regression.getHomeworkDelPopDeleteButton().click({force:true});
  //     cy.wait(4000);
  // });

  it("To Verify whether teacher is a able to Click on 'Cancel' button in 'Create Homework' pop up in My Classes", function () {
    sprint10Regression.getCreateNewHomeworkButton().click();
    sprint10Regression.getAddHomeworkCancelButton().click();
  });
});
