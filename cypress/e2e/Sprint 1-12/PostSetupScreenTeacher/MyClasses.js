/// <reference types="Cypress"/>

import IndexPage from "../../../support/pageObjects2/IndexPage";
import LoginPage from "../../../support/pageObjects2/LoginPage";
import WalkthroughPage from "../../../support/pageObjects2/WalkthroughPage";
import ClassOverviewPage from "../../../support/pageObjects2/ClassOverviewPage";
import CurriculumOverviewPage from "../../../support/pageObjects2/CurriculumOverviewPage";
import TimeTableOverviewPage from "../../../support/pageObjects2/TimeTableOverviewPage";
import MyClassesPage from "../../../support/pageObjects2/MyClassesPage";

const ip = new IndexPage();
const lp = new LoginPage();
const wp = new WalkthroughPage();
const cop = new ClassOverviewPage();
const cup = new CurriculumOverviewPage();
const ttop = new TimeTableOverviewPage();
const mcp = new MyClassesPage();

describe("Verify My Classes page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    ip.getTeacher().click();
    cy.reload();
    cy.fixture("TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      ttop
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

  beforeEach(function () {
    cy.fixture("classOverview").then(function (assignedClassesData) {
      this.assignedClassesData = assignedClassesData;
    });
      cy.fixture("calendarClasses").then(function (classesData) {
        this.classesData = classesData;
      });
  });

  it("Navigate to My Classes page", function () {
    mcp.getMyClassesIcon().click();
  });

  it("Validate the assigned classes ", function () {
    let classDetails = 0;
    this.assignedClassesData.classes.forEach(function (classesDetails) {
      mcp.getGradeWithSection(classDetails).contains(classesDetails.class);
      mcp.getSubject(classDetails).should("have.text", classesDetails.subject);
      mcp
        .getTotalStudents(classDetails)
        .should("have.text", classesDetails.students + " Students");
      classDetails++;
    });
  });

  it("Validate teacher should be able to select the class from the assigned classes", function () {
    mcp.getArrowButton(0).click();
    mcp.getClassTitle().then(function ($ele) {
      const classTitle = cy.log($ele.text());
     // classTitle.contains(this.classesData.class1);
    });
  });

  it("Verify the tabs in My Classes", function () {
    mcp.getOverviewTab().should("have.text", "Overview");
    mcp.getStudentsTab().should("have.text", "Students");
    mcp.getMilestonesTab().should("have.text", "Milestones");
    mcp.getTimetableTab().should("have.text", "Timetable");
    mcp.getAssessmentsTab().should("have.text", "Assessments");
    mcp.getDiscussionsTab().should("have.text", "Discussions");
    mcp.getLiveClassesTab().should("have.text", "Live Classes");
  });

  it("Verify that the Statistics in the Overview tab", function () {
    mcp.getSessionsCompleted().should("have.text", "Sessions Completed");
    mcp.getPendingTasks().should("have.text", "Pending Tasks");
    mcp.getAverageAttendance().should("have.text", "Average Attendance");
  });

  it("Verify that the Tabs provided under class performance section", function () {
    mcp.getTopPerformersTab().should("have.text", "Top Performers");
    mcp.getNeedsAttentionTab().should("have.text", "Needs Attention");
  });

  it("Verify that the Teacher is able to navigate to Students tab", function () {
    mcp.getStudentsTab().click();
    mcp.getStudentsTab().should("have.text", "Students");
  });

  it("Verify that the Teacher is able to select all the Students under All Students tab and show the options", function () {
    mcp.getSelectAllStudentsCheckbox().first().check();
    mcp.getSelectAllStudentsCheckbox().should("be.checked");
    mcp.getUploadCSV().should("have.text", "Upload CSV");
    mcp.getSendMail().should("have.text", "Send a mail");
    mcp.getSendAssignment().should("have.text", "Send Assignment");
    mcp.getCreateGroup().should("have.text", "Create Group");
  });

  it("Verify that the teacher is able to un select the selected students by clicking the check box again", function () {
    mcp.getSelectAllStudentsCheckbox().first().uncheck();
    mcp.getSelectAllStudentsCheckbox().should("be.not.be.checked");
  });

  it("Verify that the Teacher is able to view the details of All Students and Student Groups under Students tab", function () {
    mcp.getStudentGroupSection().click();
    cy.contains("Create New Group").should("be.visible");
    cy.wait(2000);
    mcp.getAllStudentsSection().click();
  });

  it("Verify that the Teacher is able to view todays date and day at top right of the screen", function () {
    const dayjs = require("dayjs");
    const todaysDate = dayjs().format("MMM DD YYYY");
    cy.log(todaysDate);
    var dayMonthYear = todaysDate.split(" ");
    let day = parseInt(dayMonthYear[1]);
    cy.log(day);
    mcp.getTodaysDateAtTop().contains(day);
  });

  it("Verify that the Teacher is able to search the student by using search box under All Students section", function () {
      mcp.getStudentName().each((ele, index, $list) => {
      mcp.getSearchStudentUnderAllStudents().type(Cypress.$(ele).text());
      mcp.getStudentName().should("contain", Cypress.$(ele).text());
      mcp.getSearchStudentUnderAllStudents().clear();
    });
  });

  it("Verify that the Teacher is able to view the students details under All Students section", function () {
    mcp.getRollNoUnderAllStudents().should("contain", "ROLL NO");
    mcp.getFirstNameUnderAllStudents().should("contain", "FIRST NAME");
    mcp.getLastNameUnderAllStudents().should("contain", "LAST NAME");
    mcp.getLastActiveAllStudents().should("contain", "LAST ACTIVE");
    mcp.getAttendanceUnderAllStudents().should("contain", "ATTENDANCE");
  });

  it("verify that create new group button is enabled", function () {
    mcp.getStudentsTab().click();
    mcp.getStudentGroupSection().click();
    cy.wait(2000);
    mcp.getCreateNewGroup().should("be.enabled");
  });

  it("Verify that the Group students tab should list the below details", function () {
    mcp
      .getRollNoUnderGroupStudentsTab()
      .should("have.text", "ROLL NO.")
      .should("be.visible");
    mcp
      .getFullNameUnderGroupStudentsTab()
      .should("have.text", "FULL NAME")
      .should("be.visible");
    mcp
      .getRemoveIconUnderGroupStudentsTab()
      .should("have.text", "Remove")
      .should("be.visible");
    mcp.getSearchStudentUnderStudentGroup().should("be.visible");
  });

  it("Verify that the Search bar will enable search students only within the group", function () {
    mcp.getSearchStudentUnderStudentGroup().type("Dinesh");
    mcp.getStudentFullNameUnderGroupStudentTab().then(function ($ele) {
    cy.log($ele.text());
    });
  });

  it("Verify that the plus icon should be displayed to add a new student", function () {
    mcp.getAddNewStudentInGroup().should("be.visible").should("be.enabled");
  });

  it("Verify that the Teacher is able to navigate to My Classes - Timetable tab", function () {
    mcp.getTimetableTab().click();
  });

  it("Verify that the timetable displays current academic Year Timetable 2021-2022", function () {
    mcp.getTimetableYearContent().should("have.text", "Timetable 2021 - 2022");
  });

  it("Verify that the Teacher is able to navigate to My Classes - Milestones tab", function () {
    mcp.getMilestonesTab().click();
  });

  it("Verify that the Add Student pop up displayed after clicking the '+' button in the Group Students tab section", function(){
    mcp.getStudentsTab().click();
    mcp.getStudentGroupSection().click();
    mcp.getAddNewStudentInGroup().click({force : true});
    mcp.getAddStudentPopupTitle().contains("Add Student(s)");
  });

});
