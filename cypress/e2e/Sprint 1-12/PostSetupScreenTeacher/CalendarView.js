/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import MyCalendarPage from "../../../support/pageObjects2/MyCalendarPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const cp = new MyCalendarPage();

describe("Verify Calendar related Functionalities", function () {
  before(function () {
    cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.visit(Cypress.env("urlMain"));
      ip.getTeacher().click();
      cy.reload();
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("calendarClasses").then(function (classesData) {
      this.classesData = classesData;
    });
  });

  it("Navigate to My Calendar page", function () {
    cp.getMyCalendar().click({ force: true });
  });

  it("Verify the Default View of Calendar - Weekly", function () {
    cp.getCalendarView().should("have.value", "week"); // calendar view should display the Weekly view
  });

  it("Switch to different Calendar view validation", function () {
    cp.getCalendarView().select("Monthly").should("have.value", "month");
    cy.wait(2000);
    cp.getCalendarView().select("Daily").should("have.value", "day");
    cy.wait(2000);
    cp.getCalendarView().select("Weekly").should("have.value", "week");
  });

  it("Verify the Calendar is displayed in the left side of the calendar screen", function () {
    cp.getCalendarView().select("Daily").should("have.value", "day");
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD, YYYY");
    var dayMonthYear = todaysDate.split(" ");
    cy.log(dayMonthYear);
    let month = dayMonthYear[0];
    let year = dayMonthYear[2];
    cp.getCurrentMonth().should("contain", month); //current month is displayed
    cp.getMonthlyViewCalendar().should("be.visible");
    cp.getMonthWithYear().then(function ($ele) {
      cy.log($ele.text());
      cp.getCurrentMonth().should("contain", month); //Month and year name to be displayed
      cp.getCurrentYear().should("contain", year); //Month and year name to be displayed
    });
  });

  it("Verify that the Teacher is able to move next/previous month of the calendar by clicking the previous/next icon", function () {
    cp.getMonthlyCalendarPreviousIcon().click();
    cp.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });

    cp.getMonthlyCalendarForwardIcon().click();
    cp.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });

    cp.getMonthlyCalendarForwardIcon().click();
    cp.getCurrentMonth().then(function ($ele) {
      cy.log($ele.text());
    });
  });

  it("Verify that the search box is available in the filter section", function () {
    cp.getFilterSearch().should("be.visible");
  });

  it("Verify that the filter has sections", function () {
    cp.getSelectAll().should("have.text", "Select All");
    cp.getEvent().should("have.text", "Event");
    cp.getExam().should("have.text", "Exam");
    cp.getHolidays().should("have.text", "Holidays");
    cp.getClasses().should("have.text", "Classes");
    cp.getReminders().should("have.text", "Reminders");
  });

  it("Verify that teacher should be able to select the filter options", function () {
    cp.getEvent().click();
    cp.getExam().click();
    cp.getHolidays().click();
    cp.getClasses().click();
    cp.getReminders().click();
  });

  it("Verify that the Monthly view- selected month and year to be displayed", function () {
    cp.getCalendarView().select("Monthly").should("have.value", "month");
    cp.getHeaderFromToDate().contains("2022");
  });

  it("Verify that create new button is appeared and enabled", function () {
    cp.getCreateNew().should("be.visible").should("be.enabled");
  });

  it("Verify that the Teacher is able to check the Reminders from the filters", function () {
    cp.getReminderCheckbox().check().should("be.checked");
  });

  it("Verify that the Teacher is able to view and click Create New button in the Calendar", function () {
    cp.getCreateNew().should("be.visible").click();
    cp.getCreateNewPopupTitle().should(
      "have.text",
      "Create a new calendar entry"
    );
  });

  it("Verify that the Teacher is able to View list of entries (Reminder, Appointments, Live Classes) by clicking the Create New button in the Calendar", function () {
    cp.getCreateNew().should("be.visible").click({force:true});
    cy.on("window:alert", (txt) => {
      //Mocha assertions
      expect(txt).to.contains("Reminder");
      expect(txt).to.contains("Live Classes");
    });
  });

  it("Verify that the Teacher is able to select Reminder from the list of entries in the Create New page", function () {
    cp.getCreateNew().click({force:true});
    cp.getReminderUnderCreateNewButton().click();
    cp.getReminderPopupTitle().should("have.text", "Create Reminder");
  });

  it("Verify that the Teacher is able to view and click the Attach a file section in create Reminder screen", function () {
    cp.getAttachAFile().scrollIntoView().should("be.visible");
    cp.getCreateNewReminderCloseIcon().click();
  });

  it("Verify that the Teacher is able to view Notes Attached under Resources", function () {
    cp.getClasses().click({ force: true });
    cy.wait(5000);
    cp.getCalendarView().select("Weekly").should("have.value", "week");
    cy.get('.cal-header-next').click({ force: true });
    cp.getSampleClass().contains(this.classesData.class).click({ force: true });
    cp.getClassPopupTitle().should("have.text", this.classesData.classTitle);
    cp.getNotesAttached().scrollIntoView().should("be.visible");
  });

  it("Verify that the Your Notes pop up is opened by clicking View in Notes Attached section", function () {
    cp.getNotesAttachedViewButton().click();
    cp.getNotesAttachedPopupTitle().should('have.text','Your Notes');
  });

  it("Verify that the Notes pop up should have Close icon, Search bar, Linked To This, All Notes and Add Notes button", function () {
    cy.wait(2000);
    cp.getNotesAttachedSearchBar().should('be.visible');
    cp.getNotesAttachedPopupCloseIcon().should('be.visible');
    cp.getNotesAttachedAddNote().should('have.text', 'Add Note').should('be.visible');
    cp.getNotesAttachedLinkedToThis().should('be.visible');
    cp.getNotesAttachedAllNotes().should('be.visible');
  });

  it("Verify that the Teacher is able to create new note by clicking 'Add Note'", function () {
    cp.getNotesAttachedAddNote().click();
    cp.getAddNoteAddTitle().click().type(this.classesData.addNote);
    cp.getAddNoteAddDescription().click().type(this.classesData.addNoteDesc);
    cp.getAddNoteBackToNoteList().click();
    cy.wait(2000);
    cp.getAddedNoteTitleVerify().should('contain', 'Class');
  });

  it("Verify that On click of Close icon notes editor will close, and it will auto save returns to note's list", function () {
    cp.getAddedNoteEdit().click();
    cp.getAddNoteActionIcon().click();
    cp.getAddedNoteDeleteNoteButton().click({force : true});
    cp.getAddedNoteDelete().should('be.visible');
    cp.getAddedNoteCancel().should('be.visible');
    cp.getDeletePopupMessage().should('have.text', 'Do you want to delete this note?').should('be.visible');
    cp.getAddedNoteDelete().click();
    cp.getNotesAttachedPopupCloseIcon().click();
  });

  it("Verify that the Monthly calendar should be displayed by clicking on Select date field", function(){
    cp.getClassPopupCloseIcon().click({force:true});
    cy.wait(2000);
    cy.get('.cal-header-next').click({force:true});
    cp.getSampleClass().contains(this.classesData.class).click({ force: true });
    cp.getRescheduleClass().click();
    cp.getSelectDateUnderRescheduledClass().click();
    cp.getMonthlyCalendarDisplayedInSelectDate().should('be.visible');
  });

  it("Validate  the teacher can able to view and click Request Leave option in My Calendar Module", function(){
    cp.getRequestLeave().click({ force: true });
    cp.getRequestLeavePopupTitle().should('have.text','Request Absence');
  });

  it("Validate the teacher is able to send the request for leave", function(){
    cy.contains('Others').click({force:true});
    cp.getRequestLeaveSpecifyReasonTextBox().type('Attending the seminar');
    cp.getRequestLeaveType().each(($e1, index, $list) => {
      const type=$e1.text()
      if(type.includes("Full day"))
      {
        cy.wrap($e1).click();
      }
  });
  cp.getRequestLeaveStartDate().click();
  cp.getStartDateTodaysDate().click();
  cy.wait(1000);
  cp.getRequestLeaveEndDate().click();
  cy.wait(1000);
  cp.getEndDateTodaysDate().click();
  cy.wait(1000);
  cp.getSendRequestButton().click();
  cp.getRequestSentMessage().should('have.text','Request Sent Successfully');
});
});
