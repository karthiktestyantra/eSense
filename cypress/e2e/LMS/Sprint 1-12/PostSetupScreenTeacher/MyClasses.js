const indexPage = require('../../../../support/pageObjects/LMS-1/IndexPage')
const timeTableOverviewPage = require('../../../../support/pageObjects/LMS-1/TimeTableOverviewPage')
const myClassesPage = require('../../../../support/pageObjects/LMS-1/MyClassesPage')


describe("Verify My Classes page functionalities", function () {
  before(function () {
    cy.visit(Cypress.env("urlMain"));
    indexPage.getTeacher().click();
    cy.reload();
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
      this.validLoginData = validLoginData;
      cy.login(this.validLoginData.user2, this.validLoginData.password);
      timeTableOverviewPage
        .getDashboardTitle()
        .should("have.text", "Your Dashboard");
    });
  });

beforeEach(function () {
  cy.fixture("LMS/classOverview").as("assignedClassesData")
  cy.fixture("LMS/calendarClasses").as("classesData")
});

it("Navigate to My Classes page", function () {
  myClassesPage.getMyClassesIcon().click();
});

it("Validate the assigned classes ", function () {
  let classDetails = 0;
  this.assignedClassesData.classes.forEach(function (classesDetails) {
    myClassesPage.getGradeWithSection(classDetails).contains(classesDetails.class);
    myClassesPage.getSubject(classDetails).should("have.text", classesDetails.subject);
    myClassesPage
      .getTotalStudents(classDetails)
      .should("have.text", classesDetails.students + " Students");
    classDetails++;
  });
});

it("Validate teacher should be able to select the class from the assigned classes", function () {
  myClassesPage.getArrowButton(0).click();
  myClassesPage.getClassTitle().then(function ($ele) {
    const classTitle = cy.log($ele.text());
    // classTitle.contains(this.classesData.class1);
  });
});

it("Verify the tabs in My Classes", function () {
  myClassesPage.getOverviewTab().should("have.text", "Overview");
  myClassesPage.getStudentsTab().should("have.text", "Students");
  myClassesPage.getMilestonesTab().should("have.text", "Milestones");
  myClassesPage.getTimetableTab().should("have.text", "Timetable");
  myClassesPage.getAssessmentsTab().should("have.text", "Assessments");
  myClassesPage.getDiscussionsTab().should("have.text", "Discussions");
  myClassesPage.getLiveClassesTab().should("have.text", "Live Classes");
});

it("Verify that the Statistics in the Overview tab", function () {
  myClassesPage.getSessionsCompleted().should("have.text", "Sessions Completed");
  myClassesPage.getPendingTasks().should("have.text", "Pending Tasks");
  myClassesPage.getAverageAttendance().should("have.text", "Average Attendance");
});

it("Verify that the Tabs provided under class performance section", function () {
  myClassesPage.getTopPerformersTab().should("have.text", "Top Performers");
  myClassesPage.getNeedsAttentionTab().should("have.text", "Needs Attention");
});

it("Verify that the Teacher is able to navigate to Students tab", function () {
  myClassesPage.getStudentsTab().click();
  myClassesPage.getStudentsTab().should("have.text", "Students");
});

it("Verify that the Teacher is able to select all the Students under All Students tab and show the options", function () {
  myClassesPage.getSelectAllStudentsCheckbox().first().check();
  myClassesPage.getSelectAllStudentsCheckbox().should("be.checked");
  myClassesPage.getUploadCSV().should("have.text", "Upload CSV");
  myClassesPage.getSendMail().should("have.text", "Send a mail");
  myClassesPage.getSendAssignment().should("have.text", "Send Assignment");
  myClassesPage.getCreateGroup().should("have.text", "Create Group");
});

it("Verify that the teacher is able to un select the selected students by clicking the check box again", function () {
  myClassesPage.getSelectAllStudentsCheckbox().first().uncheck();
  myClassesPage.getSelectAllStudentsCheckbox().should("be.not.be.checked");
});

it("Verify that the Teacher is able to view the details of All Students and Student Groups under Students tab", function () {
  myClassesPage.getStudentGroupSection().click();
  cy.contains("Create New Group").should("be.visible");
  cy.wait(2000);
  myClassesPage.getAllStudentsSection().click();
});

it("Verify that the Teacher is able to view todays date and day at top right of the screen", function () {
  const dayjs = require("dayjs");
  const todaysDate = dayjs().format("MMM DD YYYY");
  cy.log(todaysDate);
  var dayMonthYear = todaysDate.split(" ");
  let day = parseInt(dayMonthYear[1]);
  cy.log(day);
  myClassesPage.getTodaysDateAtTop().contains(day);
});

it("Verify that the Teacher is able to search the student by using search box under All Students section", function () {
  myClassesPage.getStudentName().each((ele, index, $list) => {
    myClassesPage.getSearchStudentUnderAllStudents().type(Cypress.$(ele).text());
    myClassesPage.getStudentName().should("contain", Cypress.$(ele).text());
    myClassesPage.getSearchStudentUnderAllStudents().clear();
  });
});

it("Verify that the Teacher is able to view the students details under All Students section", function () {
  myClassesPage.getRollNoUnderAllStudents().should("contain", "ROLL NO");
  myClassesPage.getFirstNameUnderAllStudents().should("contain", "FIRST NAME");
  myClassesPage.getLastNameUnderAllStudents().should("contain", "LAST NAME");
  myClassesPage.getLastActiveAllStudents().should("contain", "LAST ACTIVE");
  myClassesPage.getAttendanceUnderAllStudents().should("contain", "ATTENDANCE");
});

it("verify that create new group button is enabled", function () {
  myClassesPage.getStudentsTab().click();
  myClassesPage.getStudentGroupSection().click();
  cy.wait(2000);
  myClassesPage.getCreateNewGroup().should("be.enabled");
});

it("Verify that the Group students tab should list the below details", function () {
  myClassesPage
    .getRollNoUnderGroupStudentsTab()
    .should("have.text", "ROLL NO.")
    .should("be.visible");
  myClassesPage
    .getFullNameUnderGroupStudentsTab()
    .should("have.text", "FULL NAME")
    .should("be.visible");
  myClassesPage
    .getRemoveIconUnderGroupStudentsTab()
    .should("have.text", "Remove")
    .should("be.visible");
  myClassesPage.getSearchStudentUnderStudentGroup().should("be.visible");
});

it("Verify that the Search bar will enable search students only within the group", function () {
  myClassesPage.getSearchStudentUnderStudentGroup().type("Dinesh");
  myClassesPage.getStudentFullNameUnderGroupStudentTab().then(function ($ele) {
    cy.log($ele.text());
  });
});

it("Verify that the plus icon should be displayed to add a new student", function () {
  myClassesPage.getAddNewStudentInGroup().should("be.visible").should("be.enabled");
});

it("Verify that the Teacher is able to navigate to My Classes - Timetable tab", function () {
  myClassesPage.getTimetableTab().click();
});

it("Verify that the timetable displays current academic Year Timetable 2021-2022", function () {
  myClassesPage.getTimetableYearContent().should("have.text", "Timetable 2021 - 2022");
});

it("Verify that the Teacher is able to navigate to My Classes - Milestones tab", function () {
  myClassesPage.getMilestonesTab().click();
});

it("Verify that the Add Student pop up displayed after clicking the '+' button in the Group Students tab section", function () {
  myClassesPage.getStudentsTab().click();
  myClassesPage.getStudentGroupSection().click();
  myClassesPage.getAddNewStudentInGroup().click({ force: true });
  myClassesPage.getAddStudentPopupTitle().contains("Add Student(s)");
});

});
