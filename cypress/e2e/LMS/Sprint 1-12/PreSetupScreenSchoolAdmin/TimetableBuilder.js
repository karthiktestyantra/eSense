// import IndexPage from "../../../../support/pageObjects/LMS-1/IndexPage";
// import LoginPageAdmin from "../../../../support/pageObjects/LMS-1/LoginPageAdmin";
// import AdminBasicInfoPage from "../../../../support/pageObjects/LMS-1/AdminBasicInfoPage";
// import AdminDepartmentsPage from "../../../../support/pageObjects/LMS-1/AdminDepartmentsPage";
// import AdminGradesPage from "../../../../support/pageObjects/LMS-1/AdminGradesPage";
// import AdminInfrastructurePage from "../../../../support/pageObjects/LMS-1/AdminInfrastructurePage";
// import AdminAccountsPage from "../../../../support/pageObjects/LMS-1/AdminAccountsPage";
// import CurriculumBuilderPage from "../../../../support/pageObjects/LMS-1/CurriculumBuilderPage";
// import TimetableBuilderPage from "../../../../support/pageObjects/LMS-1/TimetableBuilderPage";

// const ip = new IndexPage();
// const lpa = new LoginPageAdmin();
// const abip = new AdminBasicInfoPage();
// const adp = new AdminDepartmentsPage();
// const agp = new AdminGradesPage();
// const aip = new AdminInfrastructurePage();
// const aap = new AdminAccountsPage();
// const cbp = new CurriculumBuilderPage();
// const ttb = new TimetableBuilderPage();

// describe("Verify the Timetable builder Functionalities", function () {
//   before(function () {
//     cy.visit("https://liverpool.topschool.co.in")
//     cy.exec("npm cache clear --force");
//     ip.getAdmin().click();
//     //cy.reload();
//     cy.fixture("LMS/validPreSetupAdminCredentials").then(function (validAdminLoginData) {
//       this.validAdminLoginData = validAdminLoginData;
//     });
//   });

//   it("Verify that the user is able to generate time slots", function () {
//     lpa.getLoginTitle().should("have.text", "Hello Admin");
//     cy.title().should("contain", "Top School");
//     cy.login(
//       this.validAdminLoginData.username,
//       this.validAdminLoginData.password
//     );
//     cy.wait(1000);
//     abip.getFiveCarouselIcon().click({ force: true });
//     aap.getContinueButton().click({ force: true });
//     cbp.getContinueButton().click({ force: true });
//     cy.get('.continue-btn').click({ force: true });
//     cy.get('input[value="Auto"]').click()
//     ttb.getDaysWeek().click();
//     ttb.getDaysWeekDropdownValues().contains('6').click();
//     ttb.getPeriodsDay().click();
//     ttb.getPeriodsDayDropdownValues().contains('7').click();
//     ttb.getSchoolStartTime().click();
//     ttb.getAM().click({force:true});
//     ttb.getArrowRightIcon().click();
//     ttb.getAM().click({force:true});
//     ttb.getSchoolStartTime().click();
//     cy.wait(1000);
//     ttb.getSchoolEndTime().click();
//     ttb.getPM().click({force:true});
//     ttb.getArrowRightIcon().click();
//     ttb.getPM().click({force:true});
//     ttb.getSchoolEndTime().click();
//     ttb.getPeriodTime().click();
//     ttb.getPeriodTimeDropdownValues().contains('45 Minutes').click();
//     ttb.getZeroPeriodLength().click();
//     ttb.getZeroPeriodDropdownValues().contains('15 Minutes').click();
//     ttb.getZeroPeriodOccurrence().click();
//     ttb.getZeroPeriodOccurrenceDropdownValues().contains('Before All Periods').click();
//     ttb.getBreakName().type('Lunch');
//     ttb.getBreakLength().click();
//     ttb.getBreakLengthDropdownValues().contains('60 Minutes').click();
//     ttb.getBreakOccurrence().click();
//     ttb.getgetBreakOccurrenceDropdownValues().contains('After 4th Period').click();
//     ttb.getGenerateTimeSlots().click();
//     ttb.getGeneratedSlotsMessage().should('have.text','Generated Slots');
//     ttb.getAddTeacherandRooms().click();
//     cy.wait(2000);
//     ttb.getAddTeacherAccountsButton().click();
//     cy.wait(2000);
//     ttb.getAddTeachersButton().click();
//     cy.wait(2000);
//     ttb.getRoomsTab().click();
//     cy.wait(2000);
//     ttb.getAddRoomsButton().click();
//     cy.wait(2000);
//    });
// });