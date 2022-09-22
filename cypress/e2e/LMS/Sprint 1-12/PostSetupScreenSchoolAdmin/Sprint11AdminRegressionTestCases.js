const adminpages = require('../../../../support/pageObjects/LMS-1/adminpages')
const sprint11Pages = require('../../../../support/pageObjects/LMS-1/sprint11Pages')

describe("Verify Sprint 11 related functionalities", function () {
  before(function () {
    cy.visit("https://liverpool.staging.topschool.co.in")
    adminpages.getadminbutton().click();
    cy.fixture("LMS/validAdminLoginCredentials").then(function (validadminLoginData
    ) {
      this.validadminLoginData = validadminLoginData;
    });
  });

  beforeEach(function () {
    cy.fixture("LMS/admindata").as("validadmindata")
  })

  it("Verify that admin able to login to the portal", function () {
    sp11.getUserName().clear().type(this.validadminLoginData.username);
    sp11.getPassword().clear().type(this.validadminLoginData.password);
    sp11.getLogin().click();
    cy.wait(2000);
    adminpages.verifydashboard().should("have.text", "Your Dashboard");
  });

  it("Validate School admin clicks on Workload threshold button, navigate to Students Workload threshold screen", function () {
    adminpages.usersbutton().should("be.visible").click();
    cy.wait(1000);
    adminpages.studentbutton().should("be.visible").click();
    adminpages.workloadbutton().should("be.visible").click();
    adminpages.workloadverify()
      .should("be.visible")
      .contains("Student Workload Thresholds");
  });

  it("Validate admin is able to select max working hours and select working hours for green color coding and click on Done button", function () {
    adminpages.editbutton()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    adminpages.maxworkhours().click({ force: true });
    adminpages.selecthours().click();
    adminpages.maxworkhours().should('contain', '8 Hours');
    adminpages.getWorkingHours().click();
    adminpages.getWorkingHoursDropdown().last().click({ force: true });
    adminpages.updatebutton()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.contains("Student Workload Updated Succcessfully");
    cy.wait(1000);
  });

  it("Validate admin is able to view all the workload of a particular student", function () {
    cy.wait(1000);
    adminpages.workloaddataclickinlist().click();
    adminpages.viewallbutton().should("be.visible").click();
    adminpages.verifymonthlyworkload().should('contain', 'Monthly Workload');
    adminpages.closeiconcal().click();
    cy.wait(1000);
    adminpages.closebutton().click();
  });

  it("Validate admin is able to click on workload Threshold, navigate to Teacher workload", function () {
    cy.wait(1000);
    adminpages.teacherbutton().should("be.visible").click();
    adminpages.workloadbutton().should("be.visible").click();
    adminpages.workloadverify()
      .should("be.visible")
      .should('contain', 'Teacher Workload Thresholds');
    adminpages.workloadclosebutton().click();
  });

  it("Validate admin is able to view all the workload of a particular teacher", function () {
    cy.wait(1000);
    adminpages.workloaddataclickinlist().click();
    adminpages.viewallbutton().should("be.visible").click();
    adminpages.monthworkloadverify().should('contain', 'Monthly Workload');
    adminpages.monthlycloseicon().click();
    cy.wait(1000);
    adminpages.closebutton().click();
  });

  it("Validate teacher is able to send a email to user", function () {
    cy.wait(1000);
    adminpages.sendbutton().should("be.visible").click();
    adminpages.sendtouser().should("be.visible").click();
    cy.wait(5000);
    adminpages.getEmailSentMessage().should('contain', 'Email sent to');
  });

  it("Validate teacher is able to send a email to admin", function () {
    cy.wait(1000);
    adminpages.sendbutton().should("be.visible").click();
    adminpages.sendtoadmin().should("be.visible").click();
    cy.wait(5000);
    adminpages.getEmailSentMessage().should('contain', 'Email sent Successfully');
  });

  it("Validate admin is able to view teacher details and academic details", function () {
    cy.wait(1000);
    adminpages.workloaddataclickinlist().click();
    adminpages.teacherdetails().should("be.visible").contains("Teacher Details");
    adminpages.acedemicdetails().should("be.visible").contains("Academic Details");
  });

  it("Validate admin click on forward and backward button will show next month and previous month wise data respectively as per UI", function () {
    cy.wait(1000);
    adminpages.workloaddataclickinlist().click({ force: true });
    adminpages.viewallbutton().should("be.visible").click();
    adminpages.monthworkloadverify().should('contain', 'Monthly Workload');
    adminpages.previousmonthclick().should("be.visible").click();
    cy.contains(this.validadmindata.Previousmonth);
    adminpages.nextmonthclick().should("be.visible").dblclick();
    cy.wait(500);
    cy.contains(this.validadmindata.nextmonth);
    adminpages.monthlycloseicon().click();
    cy.wait(1000);
    adminpages.closebutton().click();
  });

  it("Validate admin is be able to view all the students Work Load Indicator on every student profile", function () {
    cy.wait(1000);
    adminpages.studentbutton().should("be.visible").click();
    adminpages.studentuser().should("be.visible").click();
    cy.contains("VIEW ALL");
    adminpages.relativelyhigh().should("be.visible");
    adminpages.moderate().should("be.visible");
    adminpages.relativelylow().should("be.visible");
  });

  it("Validate admin is able to view student details", function () {
    adminpages.studentdetails().should("be.visible");
  });

  it("Validate admin is able to view the send message to student", function () {
    adminpages.sendmessagetostudent().should("be.visible");
  });

  it("Validate admin is able to view the send message to parents/guadrians", function () {
    adminpages.sendmessagetoparentsguadrians().scrollIntoView().should("be.visible");
  });

  it("Validate admin is able to view the student report", function () {
    adminpages.studentreports().scrollIntoView().should("be.visible");
    adminpages.close().scrollIntoView().should("be.visible").click();
  });

  it("To verify that when admin clicks on Create New button, it's navigating to Create your new calendar pop-up page", function () {
    cy.wait(2000);
    adminpages.calenderbutton().click({ force: true });
    adminpages.createnewbutton().should("be.visible").click();
    cy.contains("Create a new calendar entry");
  });

  it("To verify that when user clicks on Events button it's navigating to Create Event pop-up page", function () {
    adminpages.event().should("be.visible").click();
    cy.contains("Create Event");
  });

  it("To verify that user should be able to enter less than 50 alphanumeric characters into Event Title text box.", function () {
    adminpages.eventtitle()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_lessthan50);
    cy.wait(1000);
  });

  it("To verify that user should be able to enter 50 alphanumeric characters into Event Title text box.", function () {
    adminpages.eventtitle().clear().should("be.empty");
    adminpages.eventtitle()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_50);
  });

  it("To verify that user should be able to select the multiple days radio button", function () {
    adminpages.multipledaycheckbox().should("exist").should("not.be.checked");
    adminpages.multipledaycheckbox().check().should("be.checked");
    cy.wait(1000);
    adminpages.startdate().should("be.visible").should("be.enabled");
    adminpages.enddate().should("be.visible").should("be.enabled");
    adminpages.dateofevent1().should("not.exist");
  });

  it("To verify that user should be able to select the single days radio button", function () {
    adminpages.multipledaycheckbox().should("exist");
    adminpages.singledatcheckbox().check().should("be.checked");
    cy.wait(1000);
    adminpages.dateofevent1().should("be.visible").should("be.enabled");
  });

  it("To verify that on clicking on Date of Event Date Picker user should be able to select the date.", function () {
    adminpages.dateofevent1().click();
    cy.wait(1000);
    adminpages.datepicker().contains("28").click({ force: true });
    cy.contains("28");
  });

  it("To verify that on clicking on Date of Event Date Picker user should not be able to select the past date.", function () {
    adminpages.dateofevent1().click();
    adminpages.datepicker().contains("1").should("be.disabled");
    adminpages.createeenttext().click();
  });

  it("To verify that on clicking on Date range of Event Date Picker user should be able to select the range of dates.", function () {
    adminpages.multipledaycheckbox().check().should("be.checked");
    adminpages.startdatemultiple().should("be.visible").click();
    cy.wait(2000);
    adminpages.datepicker().contains("20").click({ force: true });
  });

  it("To verify that user should be able to pick the event starting time upon clicking on Start Time Time Picker", function () {
    cy.wait(1000);
    adminpages.starttime().click({ force: true });
    cy.wait(2000);
    cy.contains("AM").click({ force: true });
    adminpages.createeenttext().click();
    adminpages.endtime().should("be.visible").click({ force: true });
    cy.wait(2000);
    adminpages.pmbutton().click({ multiple: true });
    adminpages.createeenttext().click();
  });

  it("To verify that user should be able to enter less than 50 alphanumeric characters into Add Description text box.", function () {
    cy.wait(1000);
    adminpages.adddescription()
      .should("be.visible")
      .type(this.validadmindata.eventdescription_lessthaan50);
  });

  it("To verify that user should be able to enter 50 alphanumeric characters into Add Description text box.", function () {
    cy.wait(1000);
    adminpages.adddescription()
      .should("be.visible")
      .clear()
      .type(this.validadmindata.eventdescription_50);
  });

  it("To verify that user should be able to select event type from Event Type Drop down ", function () {
    cy.wait(1000);
    adminpages.eventtypedropdown().should("be.visible").click();
    cy.contains("School Event").click({ force: true });
    adminpages.schooleventverify().should("be.visible");
    cy.wait(1000);
    adminpages.eventtypedropdown().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    adminpages.classeventverify().should("be.visible");
    cy.wait(1000);
    adminpages.eventtypedropdown().should("be.visible").click();
    cy.contains("Staff Event").click({ force: true });
    adminpages.staffeventverify().should("be.visible");
    cy.wait(1000);
  });

  it("To verify that user should be able to check the Extra Curricular Activity Check box", function () {
    adminpages.eventtypedropdown().should("be.visible").click();
    cy.contains("School Event").click({ force: true });
    adminpages.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("be.checked");
    adminpages.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("not.be.checked");
    cy.wait(1000);
  });

  it("To verify that user should be able to select preparation time required from Prep hours required Drop down on checking the Extra Curricular Activity Check box", function () {
    adminpages.pretimerequires().scrollIntoView().should("be.visible").click();
    cy.contains("24 hours").click({ force: true });
    cy.wait(1000);
  });

  it("To verify that when user clicks on Add Participants it's navigating to students pop-up page", function () {
    adminpages.addparticipant().scrollIntoView().should("be.visible").click();
    adminpages.studentsverifypopup().should("be.visible");
    cy.wait(1000);
  });

  it("To verify that user should be able to select the grade from Grade drop down", function () {
    adminpages.grade().scrollIntoView().should("be.visible").click({ force: true });
    cy.get('div ul li.MuiMenuItem-gutters').contains(this.validadmindata.grade).click({ force: true });
    cy.wait(1000);
    cy.contains(this.validadmindata.grade);
  });

  it("To verify that user should be able to select the section from Section drop down", function () {
    adminpages.section().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    adminpages.sectionvalue().click({ force: true });
    cy.contains(this.validadmindata.sec);
  });

  it("To verify that user should be able to check the Extra Curricular Activity Check box", function () {
    adminpages.closeicon().should("be.visible").click({ force: true });
    cy.wait(1000);
    adminpages.eventtypedropdown().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    adminpages.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("be.checked");
    adminpages.extracheckbox()
      .scrollIntoView()
      .click({ force: true })
      .should("not.be.checked");
  });

  it("To verify that user should be able to select preparation time required from Prep hours required Drop down on checking the Extra Curricular Activity Check box", function () {
    adminpages.timepre().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.contains("12 hours").click({ force: true });
  });

  it("To verify that user should be able to select the class from Class drop down", function () {
    adminpages.classdropdown().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    cy.get('div ul li.MuiMenuItem-gutters').contains(this.validadmindata.grade).click({ force: true });
    cy.should('contain', this.validadmindata.grade);
  });

  it("To verify that user should be able to select the section from Section drop down", function () {
    adminpages.classsection().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    adminpages.sectionvalue().click({ force: true });
  });

  it("To verify that when user clicks on Add Students/Teachers it's navigating to students/teachers pop-up page", function () {
    adminpages.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    adminpages.studverifypopup().scrollIntoView().should("be.visible");
    adminpages.teacherverifypopup().scrollIntoView().should("be.visible");
  });

  it("To verify that on clicking on Students user should be able to add the students", function () {
    adminpages.closeiconforpopup().scrollIntoView().should("be.visible").click();
    cy.wait(1000);
    adminpages.closeall().scrollIntoView().click({ force: true });
    cy.wait(1000);
    adminpages.createnewbutton().should("be.visible").click();
    cy.contains("Create a new calendar entry");
    adminpages.event().should("be.visible").click();
    cy.contains("Create Event");
    adminpages.eventtypedropdown().scrollIntoView().should("be.visible").click();
    cy.contains("Class Event").click({ force: true });
    adminpages.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    adminpages.studverifypopup().scrollIntoView().should("be.visible");
    adminpages.teacherverifypopup().scrollIntoView().should("be.visible");
    adminpages.studetcheckbox().check().should("be.checked");
  });

  it("To verify that on clicking on Teachers user should be able to add the teachers", function () {
    adminpages.teacherverifypopup()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    adminpages.teachercheckbox().check().should("be.checked");
  });

  it("To verify that when user clicks on Add Teachers/Admin it's navigating to students/teachers pop-up page ", function () {
    adminpages.cb().scrollIntoView().click({ force: true });
    adminpages.eventtypedropdown().scrollIntoView().should("be.visible").click();
    cy.contains("Staff Event").click({ force: true });
    adminpages.addparticipant()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    adminpages.studverifypopup().scrollIntoView().should("be.visible");
    adminpages.teacherverifypopup().scrollIntoView().should("be.visible");
    //
  });

  it("To verify that on clicking on Teachers user should be able to add the teachers", function () {
    cy.wait(1000);
    adminpages.studetcheckbox().check().should("be.checked");
  });

  it("To verify that on clicking on Admin user should be able to add the admins", function () {
    cy.wait(1000);
    adminpages.teacherverifypopup()
      .scrollIntoView()
      .should("be.visible")
      .click({ force: true });
    adminpages.teachercheckbox().check().should("be.checked");
  });

  it("To verify that when user clicks on Save Event button by filling all mandatory details the event should be created", function () {
    adminpages.cb().scrollIntoView().click({ force: true });
    adminpages.eventtitle()
      .scrollIntoView()
      .should("be.visible")
      .type(this.validadmindata.eventtitle_lessthan50);
    cy.wait(1000);
    adminpages.dateofevent1().click();
    cy.wait(1000);
    adminpages.datepicker().contains("30").click({ force: true });
    cy.contains("30");
    cy.wait(1000);
    adminpages.starttime1().should("be.visible").click({ force: true });
    cy.wait(2000);
    adminpages.ambutton().click({ force: true });
    cy.wait(1000);
    adminpages.endtime1().should("be.visible").click({ force: true });
    cy.wait(2000);
    adminpages.pmbutton().click({ multiple: true });
    adminpages.createeenttext().click();
    cy.wait(2000);
    adminpages.adddescription()
      .should("be.visible")
      .type(this.validadmindata.eventdescription_lessthaan50);
    cy.wait(1000);
    adminpages.savebutton().scrollIntoView().click();
    cy.contains("EVENT_CREATED");
  });
});
//Please run after the date of 2
