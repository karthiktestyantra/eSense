const home = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const overview = require("../../../support/pageObjects/LMS-2/TeacherOverviewPage")
const dayjs = require('dayjs')


describe("Verify Teacher Profile Account Information Functionalities - Sprint 22(EL-6285)", function () {

    before(function () {
        cy.visit(Cypress.env("urlQAPreSetup"))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validLoginData) {
            cy.TeacherPostSetupLogin(validLoginData.user1, validLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/TeacherProfileAccountInformation").as("teacherProfileAccountInformation")
    })

    it("EL-2530/ES2530_1 Validate Teacher is able to view “Workload” details in the Overview by clicking My Classes available in the menu", function () {
        home.getMyclassLnk().click({ force: true })
        home.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        overview.getWorkloadDetailstxt().should('contain.text', "Workload").and('contain.text', "Relatively High").
            and('contain.text', "Moderate").and('contain.text', "Relatively Low")
    })

    it("EL-2530/ES2530_2 The Teacher is able to view the calculated workload Percentage for the systems current date", function () {
        overview.getTodaysWorkloadPercentagTxt().should('be.visible')
    })

    it("EL-2530/ES2530_6 Validate (Homework/Assessment/Assignment) (with counts) are displayed in Workload section",function(){
        overview.getHomeworkAssignedTab().should('be.visible')
    })  

    it.skip("EL-2530/ES2530_7 Validate the average number of homework/assessments/assignments assigned to the class till the systems current date is calculated using formula",function(){
        overview.getTodaysWorkloadPercentagTxt().should('have.text',"9%")
    })

    it("EL-2530/ES2530_8 Validate user is able to view empty data if there is no workload and the donut chart is displaying “0 percentage”",function(){
        home.getMyclassLnk().click({ force: true })
        home.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt.includes("political Science")) {
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        overview.getTodaysWorkloadPercentagTxt().should('have.text',"0%")
    })

    it("EL-2530/ES2530_9 Validate next 7 day's workload with the percentage of workload is displayed",function(){
        home.getMyclassLnk().click({ force: true })
        home.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        overview.getNxt7daysTabLst().should('have.length',7)
    })

    it("EL-2530/ES2530_11 Validate on clicking 'View All' user is able to view the monthly calendar pop up",function(){
        overview.getViewFullBtn().click()
        overview.getCalenderPopupTitleTxt().should('have.text'," Monthly Workload").and('be.visible')
    })

    it("EL-2530/ES2530_12 Validate the following options are available -Month and year Monthly calendar view is as per the current system month",function(){
        overview.getMonthAndYearTxtInCalendarPopup().should('be.visible')
        overview.getCalendarDaysInCalendarPopup().should('be.visible')
    })

    it("EL-2530/ES2530_13 Validate user on selecting any date a pop up is displayed as -Create homework -Create assignment",function(){
        overview.getCalendarDaysInCalendarPopup().first().click()
        overview.getAssignmentHomeworkPopupInCalendar().should('contain.text',"Create homework").and('contain.text',"Create assignment")
    })

    it("EL-2530/ES2530_14 Validate user on clicking 'Create homework' user is redirected to the homework creation section",function(){
        overview.getAssignmentHomeworkPopupInCalendar().contains("Create homework").click()
        overview.getCreateHomeworkPopUpTitle().should('have.text',"Create Homework").and('be.visible')
        overview.getCloseIconInCreateHomeworkPopup().click()
    })

    it("EL-2530/ES2530_15 Validate user on clicking 'Create assignment' user is redirected to the Add ELA screen",function(){
        overview.getOverviewTab().click()
        overview.getViewFullBtn().click()
        overview.getCalendarDaysInCalendarPopup().first().click()
        overview.getAssignmentHomeworkPopupInCalendar().contains("Create assignment").click()
        overview.getElAPageTitleTxt().should('be.visible')
    })

    it("EL-2530/ES2530_16 Validate when user clicks on '<' or '>' option user is able to view the workload of last month or next month",function(){
        home.getMyclassLnk().click({ force: true })
        cy.wait(2000)
        home.getSubLstTxtInMyClass().each(($e1, index, $list) => {
            const txt = $e1.text()
            if (txt === "Tamil") {
                home.getsubLstInMyClass().eq(index).click()
                return false;
            }
        })
        overview.getViewFullBtn().click()
        var num= dayjs().add(1,'month').format('MMMM')
        overview.getNxtArrowIconInCalendarPopup().click()
        overview.getMonthTxtInOverviewViewFullPopup().should('have.text',num)
        overview.getPrevArrowIconInCalendarPopup().click()
        var numb = dayjs().format('MMMM')
        overview.getMonthTxtInOverviewViewFullPopup().should('have.text',numb)
    })

    it("EL-2530/ES2530_17 Validate the user on clicking “X” button user is re-directed to the My Class → Overview screen",function(){
        overview.getCloseIconInCalendarPopup().click()
        overview.getWorkloadDetailstxt().contains("Workload").should('be.visible')
    })

    it("EL-186/EL186_1 Validate user is able to view “Recent Workload” details in Student Profile",function(){
        overview.getStudentsTab().click()
        overview.getRollNoCheckBx().check()
        overview.getViewDetailsIconInStudentsTab().first().click()
        overview.getRecentWorkloadtxtInViewdetail().should('have.text',"Recent Workload")
    })

    it("EL-186/EL186_2 Validate next 7 day's workload with the percentage of workload is displayed",function(){
        overview.getCloseBtnFrStudentProfileDetail().click()
        overview.getOverviewTab().click()
        overview.getPercentageTxtInWorkload().each(($e1)=>{
            cy.wrap($e1).should('contain.text',"%")
        })
    })

    it("EL-186/EL186_4 Validate on clicking 'View All' user is able to view the monthly calendar pop up",function(){
        
    })

})
//Author-Shiva