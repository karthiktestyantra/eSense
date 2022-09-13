import adminpages from "../../../../support/pageObjects/LMS-1/adminpages";
import sprint11Pages from "../../../../support/pageObjects/LMS-1/sprint11Pages";

const ap = new adminpages();
const sp11 = new sprint11Pages();

describe("Verify Sprint 11 related functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.staging.topschool.co.in")
    ap.getadminbutton().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validadminLoginData
    ) {
      this.validadminLoginData = validadminLoginData;
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/admindata").then(function (validadmindata) {
      this.validadmindata = validadmindata;
    });
  });

  it("Verify that admin able to login to the portal", function () {
    sp11.getUserName().clear().type(this.validadminLoginData.username);
    sp11.getPassword().clear().type(this.validadminLoginData.password);
    sp11.getLogin().click();
    cy.wait(2000);
    ap.verifydashboard().should("have.text", "Your Dashboard");
  });

  it("Validate School admin clicks on Workload threshold button, navigate to Students Workload threshold screen", function () {
    ap.usersbutton().should("be.visible").click();
    cy.wait(1000);
    ap.studentbutton().should("be.visible").click();
    ap.workloadbutton().should("be.visible").click();
    ap.workloadverify()
      .should("be.visible")
      .contains("Student Workload Thresholds");
  });

  it("Validate admin is able to select max working hours and select working hours for green color coding and click on Done button", function () {
    ap.editbutton()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    ap.maxworkhours().click({ force: true });
    ap.selecthours().click();
    ap.maxworkhours().should('contain', '8 Hours');
    ap.getWorkingHours().click();
    ap.getWorkingHoursDropdown().last().click({ force: true });
    ap.updatebutton()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.contains("Student Workload Updated Succcessfully");
    cy.wait(1000);
  });

  it("Validate admin is able to view all the workload of a particular student", function () {
    cy.wait(1000);
    ap.workloaddataclickinlist().click();
    ap.viewallbutton().should("be.visible").click();
    ap.verifymonthlyworkload().should('contain', 'Monthly Workload');
    ap.closeiconcal().click();
    cy.wait(1000);
    ap.closebutton().click();
  });

  it("Validate admin is able to click on workload Threshold, navigate to Teacher workload", function () {
    cy.wait(1000);
    ap.teacherbutton().should("be.visible").click();
    ap.workloadbutton().should("be.visible").click();
    ap.workloadverify()
      .should("be.visible")
      .should('contain', 'Teacher Workload Thresholds');
    ap.workloadclosebutton().click();
  });

  it("Validate admin is able to view all the workload of a particular teacher", function () {
    cy.wait(1000);
    ap.workloaddataclickinlist().click();
    ap.viewallbutton().should("be.visible").click();
    ap.monthworkloadverify().should('contain', 'Monthly Workload');
    ap.monthlycloseicon().click();
    cy.wait(1000);
    ap.closebutton().click();
  });

  it("Validate teacher is able to send a email to user", function () {
    cy.wait(1000);
    ap.sendbutton().should("be.visible").click();
    ap.sendtouser().should("be.visible").click();
    cy.wait(5000);
    ap.getEmailSentMessage().should('contain', 'Email sent to');
  });

  it("Validate teacher is able to send a email to admin", function () {
    cy.wait(1000);
    ap.sendbutton().should("be.visible").click();
    ap.sendtoadmin().should("be.visible").click();
    cy.wait(5000);
    ap.getEmailSentMessage().should('contain', 'Email sent Successfully');
  });

  it("Validate admin is able to view teacher details and academic details", function () {
    cy.wait(1000);
    ap.workloaddataclickinlist().click();
    ap.teacherdetails().should("be.visible").contains("Teacher Details");
    ap.acedemicdetails().should("be.visible").contains("Academic Details");
  });

  it("Validate admin click on forward and backward button will show next month and previous month wise data respectively as per UI", function () {
    cy.wait(1000);
    ap.workloaddataclickinlist().click({ force: true });
    ap.viewallbutton().should("be.visible").click();
    ap.monthworkloadverify().should('contain', 'Monthly Workload');
    ap.previousmonthclick().should("be.visible").click();
    cy.contains(this.validadmindata.Previousmonth);
    ap.nextmonthclick().should("be.visible").dblclick();
    cy.wait(500);
    cy.contains(this.validadmindata.nextmonth);
    ap.monthlycloseicon().click();
    cy.wait(1000);
    ap.closebutton().click();
  });

  it("Validate admin is be able to view all the students Work Load Indicator on every student profile", function () {
    cy.wait(1000);
    ap.studentbutton().should("be.visible").click();
    ap.studentuser().should("be.visible").click();
    cy.contains("VIEW ALL");
    ap.relativelyhigh().should("be.visible");
    ap.moderate().should("be.visible");
    ap.relativelylow().should("be.visible");
  });

  it("Validate admin is able to view student details", function () {
    ap.studentdetails().should("be.visible");
  });

  it("Validate admin is able to view the send message to student", function () {
    ap.sendmessagetostudent().should("be.visible");
  });

  it("Validate admin is able to view the send message to parents/guadrians", function () {
    ap.sendmessagetoparentsguadrians().scrollIntoView().should("be.visible");
  });

  it("Validate admin is able to view the student report", function () {
    ap.studentreports().scrollIntoView().should("be.visible");
    ap.close().scrollIntoView().should("be.visible").click();
  });

  it("To verify that when admin clicks on Create New button, it's navigating to Create your new calendar pop-up page", function () {
    cy.wait(2000);
    ap.calenderbutton().click({ force: true });
    ap.createnewbutton().should("be.visible").click();
    cy.contains("Create a new calendar entry");
  });

  it("To verify that when user clicks on Events button it's navigating to Create Event pop-up page", function () {
    ap.event().should("be.visible").click();
    cy.contains("Create Event");
  });

  it("To verify that user should be able to enter less than 50 alphanumeric characters into Event Title text box.", function () {
    ap.eventtitle()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_lessthan50);
    cy.wait(1000);
  });

  it("To verify that user should be able to enter 50 alphanumeric characters into Event Title text box.", function () {
    ap.eventtitle().clear().should("be.empty");
    ap.eventtitle()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_50);
  });

  it("To verify that user should be able to select the multiple days radio button", function () {
    ap.multipledaycheckbox().should("exist").should("not.be.checked");
    ap.multipledaycheckbox().check().should("be.checked");
    cy.wait(1000);
    ap.startdate().should("be.visible").should("be.enabled");
    ap.enddate().should("be.visible").should("be.enabled");
    ap.dateofevent1().should("not.exist");
  });

  it("To verify that user should be able to select the single days radio button", function () {
    ap.multipledaycheckbox().should("exist");
    ap.singledatcheckbox().check().should("be.checked");
    cy.wait(1000);
    ap.dateofevent1().should("be.visible").should("be.enabled");
  });

  it("To verify that on clicking on Date of Event Date Picker user should be able to select the date.", function () {
    ap.dateofevent1().click();
    cy.wait(1000);
    ap.datepicker().contains("28").click({ force: true });
    cy.contains("28");
  });

  it("To verify that on clicking on Date of Event Date Picker user should not be able to select the past date.", function () {
    ap.dateofevent1().click();
    ap.datepicker().contains("1").should("be.disabled");
    ap.createeenttext().click();
  });

  it("To verify that on clicking on Date range of Event Date Picker user should be able to select the range of dates.", function () {
    ap.multipledaycheckbox().check().should("be.checked");
    ap.startdatemultiple().should("be.visible").click();
    cy.wait(2000);
    ap.datepicker().contains("20").click({ force: true });
  });

  it("To verify that user should be able to pick the event starting time upon clicking on Start Time Time Picker", function () {
    cy.wait(1000);
    ap.starttime().click({ force: true });
    cy.wait(2000);
    cy.contains("AM").click({ force: true });
    ap.createeenttext().click();
    ap.endtime().should("be.visible").click({ force: true });
    cy.wait(2000);
    ap.pmbutton().click({ multiple: true });
    ap.createeenttext().click();
  });

  it("To verify that user should be able to enter less than 50 alphanumeric characters into Add Description text box.", function () {
    cy.wait(1000);
    ap.adddescription()
      .should("be.visible")
      .type(this.validadmindata.eventdescription_lessthaan50);
  });

  it("To verify that user should be able to enter 50 alphanumeric characters into Add Description text box.", function () {
    cy.wait(1000);
    ap.adddescription()
      .should("be.visible")
      .clear()
      .type(this.validadmindata.eventdescription_50);
  });

  it("To verify that user should be able to select event type from Event Type Drop down ", function () {
    cy.wait(1000);
    ap.eventtypedropdown().should("be.visible").click();
    cy.contains("School Event").click({ force: true });
    ap.schooleventverify().should("be.visible");
    cy.wait(1000);
    ap.eventtypedropdown().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    ap.classeventverify().should("be.visible");
    cy.wait(1000);
    ap.eventtypedropdown().should("be.visible").click();
    cy.contains("Staff Event").click({ force: true });
    ap.staffeventverify().should("be.visible");
    cy.wait(1000);
  });

  it("To verify that user should be able to check the Extra Curricular Activity Check box", function () {
    ap.eventtypedropdown().should("be.visible").click();
    cy.contains("School Event").click({ force: true });
    ap.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("be.checked");
    ap.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("not.be.checked");
    cy.wait(1000);
  });

  it("To verify that user should be able to select preparation time required from Prep hours required Drop down on checking the Extra Curricular Activity Check box", function () {
    ap.pretimerequires().scrollIntoView().should("be.visible").click();
    cy.contains("24 hours").click({ force: true });
    cy.wait(1000);
  });

  it("To verify that when user clicks on Add Participants it's navigating to students pop-up page", function () {
    ap.addparticipant().scrollIntoView().should("be.visible").click();
    ap.studentsverifypopup().should("be.visible");
    cy.wait(1000);
  });

  it("To verify that user should be able to select the grade from Grade drop down", function () {
    ap.grade().scrollIntoView().should("be.visible").click({ force: true });
    cy.get('div ul li.MuiMenuItem-gutters').contains(this.validadmindata.grade).click({ force: true });
    cy.wait(1000);
    cy.contains(this.validadmindata.grade);
  });

  it("To verify that user should be able to select the section from Section drop down", function () {
    ap.section().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    ap.sectionvalue().click({ force: true });
    cy.contains(this.validadmindata.sec);
  });

  it("To verify that user should be able to check the Extra Curricular Activity Check box", function () {
    ap.closeicon().should("be.visible").click({ force: true });
    cy.wait(1000);
    ap.eventtypedropdown().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    ap.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("be.checked");
    ap.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("not.be.checked");
  });

  it("To verify that user should be able to select preparation time required from Prep hours required Drop down on checking the Extra Curricular Activity Check box", function () {
    ap.timepre().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("12 hours").click({ force: true });
  });

  it("To verify that user should be able to select the class from Class drop down", function () {
    ap.classdropdown().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get('div ul li.MuiMenuItem-gutters').contains(this.validadmindata.grade).click({ force: true });
    cy.should('contain', this.validadmindata.grade);
  });

  it("To verify that user should be able to select the section from Section drop down", function () {
    ap.classsection().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    ap.sectionvalue().click({ force: true });
  });

  it("To verify that when user clicks on Add Students/Teachers it's navigating to students/teachers pop-up page", function () {
    ap.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    ap.studverifypopup().scrollIntoView().should("be.visible");
    ap.teacherverifypopup().scrollIntoView().should("be.visible");
  });

  it("To verify that on clicking on Students user should be able to add the students", function () {
    ap.closeiconforpopup().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    ap.closeall().scrollIntoView().click({ force: true });
    cy.wait(1000);
    ap.createnewbutton().should("be.visible").click();
    cy.contains("Create a new calendar entry");
    ap.event().should("be.visible").click();
    cy.contains("Create Event");
    ap.eventtypedropdown().scrollIntoView().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    ap.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    ap.studverifypopup().scrollIntoView().should("be.visible");
    ap.teacherverifypopup().scrollIntoView().should("be.visible");
    ap.studetcheckbox().check().should("be.checked");
  });

  it("To verify that on clicking on Teachers user should be able to add the teachers", function () {
    ap.teacherverifypopup()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    ap.teachercheckbox().check().should("be.checked");
  });

  it("To verify that when user clicks on Add Teachers/Admin it's navigating to students/teachers pop-up page ", function () {
    ap.cb().scrollIntoView().click({ force: true });
    ap.eventtypedropdown().scrollIntoView().should("be.visible").click();
    cy.contains("Staff Event").click({ force: true });
    ap.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    ap.studverifypopup().scrollIntoView().should("be.visible");
    ap.teacherverifypopup().scrollIntoView().should("be.visible");
    //
  });

  it("To verify that on clicking on Teachers user should be able to add the teachers", function () {
    cy.wait(1000);
    ap.studetcheckbox().check().should("be.checked");
  });

  it("To verify that on clicking on Admin user should be able to add the admins", function () {
    cy.wait(1000);
    ap.teacherverifypopup()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    ap.teachercheckbox().check().should("be.checked");
  });

  it("To verify that when user clicks on Save Event button by filling all mandatory details the event should be created", function () {
    ap.cb().scrollIntoView().click({ force: true });
    ap.eventtitle()
      .scrollIntoView()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_lessthan50);
    cy.wait(1000);
    ap.dateofevent1().click();
    cy.wait(1000);
    ap.datepicker().contains("30").click({ force: true });
    cy.contains("30");
    cy.wait(1000);
    ap.starttime1().should("be.visible").click({ force: true });
    cy.wait(2000);
    ap.ambutton().click({ force: true });
    cy.wait(1000);
    ap.endtime1().should("be.visible").click({ force: true });
    cy.wait(2000);
    ap.pmbutton().click({ multiple: true });
    ap.createeenttext().click();
    cy.wait(2000);
    ap.adddescription()
      .should("be.visible")
      .type(this.validadmindata.eventdescription_lessthaan50);
    cy.wait(1000);
    ap.savebutton().scrollIntoView().click();
    cy.contains("EVENT_CREATED");
  });
});
//Please run after the date of 2
