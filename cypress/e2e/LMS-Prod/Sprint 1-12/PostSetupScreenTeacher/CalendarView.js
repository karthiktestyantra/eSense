const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require("../../../../support/pageObjects/LMS-1/TimeTableOverviewPage")
const myCalendarPage = require("../../../../support/pageObjects/LMS-1/MyCalendarPage")

describe("Verify Calendar related Functionalities", function () {
  
  before(function () {
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.visit(Cypress.env("urlMain"));
      indexPage.getTeacher().click();
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      timeTableOverviewPage
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/calendarClasses").as("classesData")
  });

  it("Navigate to My Calendar page", function () {
    myCalendarPage.getMyCalendar().click({ force: true });
  });

  it("Verify the Default View of Calendar - Weekly", function () {
    myCalendarPage.getCalendarView().should("have.value", "week"); // calendar view should display the Weekly view
  });

  it("Switch to different Calendar view validation", function () {
    myCalendarPage.getCalendarView().select("Monthly").should("have.value", "month");
    cy.wait(2000);
    myCalendarPage.getCalendarView().select("Daily").should("have.value", "day");
    cy.wait(2000);
    myCalendarPage.getCalendarView().select("Weekly").should("have.value", "week");
  });

  it("Verify the Calendar is displayed in the left side of the calendar screen", function () {
    myCalendarPage.getCalendarView().select("Daily").should("have.value", "day");
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    cy.log(dayMonthYear);
    let month = dayMonthYear[0];
    let year = dayMonthYear[2];
    myCalendarPage.getCurrentMonth().should("contain", month); //current month is displayed
    myCalendarPage.getMonthlyViewCalendar().should("be.visible");
    myCalendarPage.getMonthWithYear().then(function ($ele) {
      cy.log($ele.text());
      myCalendarPage.getCurrentMonth().should("contain", month); //Month and year name to be displayed
      myCalendarPage.getCurrentYear().should("contain", year); //Month and year name to be displayed
    });
  });

  it("Verify that the Teacher is able to move next/previous month of the calendar by clicking the previous/next icon", function () {
    myCalendarPage.getMonthlyCalendarPreviousIcon().click();
    myCalendarPage.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });

    myCalendarPage.getMonthlyCalendarForwardIcon().click();
    myCalendarPage.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });

    myCalendarPage.getMonthlyCalendarForwardIcon().click();
    myCalendarPage.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });
  });

  it("Verify that the search box is available in the filter section", function () {
    myCalendarPage.getFilterSearch().should("be.visible");
  });

  it("Verify that the filter has sections", function () {
    myCalendarPage.getSelectAll().should("have.text", "Select All");
    myCalendarPage.getEvent().should("have.text", "Event");
    myCalendarPage.getExam().should("have.text", "Exam");
    myCalendarPage.getHolidays().should("have.text", "Holidays");
    myCalendarPage.getClasses().should("have.text", "Classes");
    myCalendarPage.getReminders().should("have.text", "Reminders");
  });

  it("Verify that teacher should be able to select the filter options", function () {
    myCalendarPage.getEvent().click();
    myCalendarPage.getExam().click();
    myCalendarPage.getHolidays().click();
    myCalendarPage.getClasses().click();
    myCalendarPage.getReminders().click();
  });

  it("Verify that the Monthly view- selected month and year to be displayed", function () {
    myCalendarPage.getCalendarView().select("Monthly").should("have.value", "month");
    myCalendarPage.getHeaderFromToDate().contains("2022");
  });

  it("Verify that create new button is appeared and enabled", function () {
    myCalendarPage.getCreateNew().should("be.visible").should("be.enabled");
  });

  it("Verify that the Teacher is able to check the Reminders from the filters", function () {
    myCalendarPage.getReminderCheckbox().check().should("be.checked");
  });

  it("Verify that the Teacher is able to view and click Create New button in the Calendar", function () {
    myCalendarPage.getCreateNew().should("be.visible").click();
    myCalendarPage.getCreateNewPopupTitle().should(
      "have.text",
      "Create a new calendar entry"
    );
  });

  it("Verify that the Teacher is able to View list of entries (Reminder, Appointments, Live Classes) by clicking the Create New button in the Calendar", function () {
    myCalendarPage.getCreateNew().should("be.visible").click({ force: true });
    cy.on("window:alert", (txt) => {
      //Mocha assertions
      expect(txt).to.contains("Reminder");
      expect(txt).to.contains("Live Classes");
    });
  });

  it("Verify that the Teacher is able to select Reminder from the list of entries in the Create New page", function () {
    myCalendarPage.getCreateNew().click({ force: true });
    myCalendarPage.getReminderUnderCreateNewButton().click();
    myCalendarPage.getReminderPopupTitle().should("have.text", "Create Reminder");
  });

  it("Verify that the Teacher is able to view and click the Attach a file section in create Reminder screen", function () {
    myCalendarPage.getAttachAFile().scrollIntoView().should("be.visible");
    myCalendarPage.getCreateNewReminderCloseIcon().click();
  });

  it("Verify that the Teacher is able to view Notes Attached under Resources", function () {
    myCalendarPage.getClasses().click({ force: true });
    cy.wait(5000);
    myCalendarPage.getCalendarView().select("Weekly").should("have.value", "week");
    cy.get('.cal-header-next').click({ force: true });
    myCalendarPage.getSampleClass().contains(this.classesData.class).click({ force: true });
    myCalendarPage.getClassPopupTitle().should("have.text", this.classesData.classTitle);
    myCalendarPage.getNotesAttached().scrollIntoView().should("be.visible");
  });

  it("Verify that the Your Notes pop up is opened by clicking View in Notes Attached section", function () {
    myCalendarPage.getNotesAttachedViewButton().click();
    myCalendarPage.getNotesAttachedPopupTitle().should('have.text', 'Your Notes');
  });

  it("Verify that the Notes pop up should have Close icon, Search bar, Linked To This, All Notes and Add Notes button", function () {
    cy.wait(2000);
    myCalendarPage.getNotesAttachedSearchBar().should('be.visible');
    myCalendarPage.getNotesAttachedPopupCloseIcon().should('be.visible');
    myCalendarPage.getNotesAttachedAddNote().should('have.text', 'Add Note').should('be.visible');
    myCalendarPage.getNotesAttachedLinkedToThis().should('be.visible');
    myCalendarPage.getNotesAttachedAllNotes().should('be.visible');
  });

  it("Verify that the Teacher is able to create new note by clicking 'Add Note'", function () {
    myCalendarPage.getNotesAttachedAddNote().click();
    myCalendarPage.getAddNoteAddTitle().click().type(this.classesData.addNote);
    myCalendarPage.getAddNoteAddDescription().click().type(this.classesData.addNoteDesc);
    myCalendarPage.getAddNoteBackToNoteList().click();
    cy.wait(2000);
    myCalendarPage.getAddedNoteTitleVerify().should('contain', 'Class');
  });

  it("Verify that On click of Close icon notes editor will close, and it will auto save returns to note's list", function () {
    myCalendarPage.getAddedNoteEdit().click();
    myCalendarPage.getAddNoteActionIcon().click();
    myCalendarPage.getAddedNoteDeleteNoteButton().click({ force: true });
    myCalendarPage.getAddedNoteDelete().should('be.visible');
    myCalendarPage.getAddedNoteCancel().should('be.visible');
    myCalendarPage.getDeletePopupMessage().should('have.text', 'Do you want to delete this note?').should('be.visible');
    myCalendarPage.getAddedNoteDelete().click();
    myCalendarPage.getNotesAttachedPopupCloseIcon().click();
  });

  it("Verify that the Monthly calendar should be displayed by clicking on Select date field", function () {
    myCalendarPage.getClassPopupCloseIcon().click({ force: true });
    cy.wait(2000);
    cy.get('.cal-header-next').click({ force: true });
    myCalendarPage.getSampleClass().contains(this.classesData.class).click({ force: true });
    myCalendarPage.getRescheduleClass().click();
    myCalendarPage.getSelectDateUnderRescheduledClass().click();
    myCalendarPage.getMonthlyCalendarDisplayedInSelectDate().should('be.visible');
  });

  it("Validate  the teacher can able to view and click Request Leave option in My Calendar Module", function () {
    myCalendarPage.getRequestLeave().click({ force: true });
    myCalendarPage.getRequestLeavePopupTitle().should('have.text', 'Request Absence');
  });

  it("Validate the teacher is able to send the request for leave", function () {
    cy.contains('Others').click({ force: true });
    myCalendarPage.getRequestLeaveSpecifyReasonTextBox().type('Attending the seminar');
    myCalendarPage.getRequestLeaveType().each(($e1, index, $list) => {
      const type = $e1.text()
      if (type.includes("Full day")) {
        cy.wrap($e1).click();
      }
    });
    myCalendarPage.getRequestLeaveStartDate().click();
    myCalendarPage.getStartDateTodaysDate().click();
    cy.wait(1000);
    myCalendarPage.getRequestLeaveEndDate().click();
    cy.wait(1000);
    myCalendarPage.getEndDateTodaysDate().click();
    cy.wait(1000);
    myCalendarPage.getSendRequestButton().click();
    myCalendarPage.getRequestSentMessage().should('have.text', 'Request Sent Successfully');
  });
});
