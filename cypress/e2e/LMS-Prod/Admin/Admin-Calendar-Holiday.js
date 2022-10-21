const adminCalendarPage = require("../../../support/pageObjects/LMS-2/AdminCalenderHomePage")
const adminDashboardPage = require("../../../support/pageObjects/LMS-2/AdminDashboardPage")
const Adminlogin = require('../../../support/pageObjects/LMS-2/AdminIndexPage')
const adminCalenderHomePage = require('../../../support/pageObjects/LMS-2/AdminCalenderHomePage')
const dayjs = require('dayjs')

describe("Verify admin Calendar functionalities - Sprint 15(EL-4065)", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        Adminlogin.getAdminBtn().click()
        cy.fixture("LMS/validAdminLoginCredentials").then(function (validAdminLoginData) {
            this.validAdminLoginData = validAdminLoginData;
            cy.login(this.validAdminLoginData.prodUserName, this.validAdminLoginData.password)
        });
    });

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.fixture("LMS/AdminCalenderAppointment").as("calendar")
    })

    it("To validate school admin is able to select and download the template/EL-4065/ES4065_02", function () {
        adminDashboardPage.getCalenderBtn().click({ force: true })
        adminCalendarPage.getUploadCSVBtn().should('be.visible').click()
        adminCalendarPage.getHolidayBtnInCSVBtn().should('be.visible').click()
        adminCalendarPage.getDwnloadDFileBtn().should('be.visible')
    })

    it("To validate school admin is able to upload the Holiday files through upload CSV button/EL-4065/ES4065_01", function () {
        cy.contains(this.calendar.bulkUploadTxt).should('be.visible')
        adminCalendarPage.getSelectHolidayFileBtn().attachFile('LMS/Holidays_List.xlsx')
        cy.wait(1000)
        adminCalendarPage.getImportHolidayBtn().click()
    })

    it("To validate whether the Holiday DB is created from the uploaded file data/EL-4065/ES4065_03", function () {
        adminCalendarPage.getHolidayCheckBxInCalendarPage().check({ force: true })
        adminCalendarPage.getYearDrpDwnInCalendar().click()
        adminCalendarPage.getYearDrpDwnLst().contains(this.calendar.currentYear).click()
        cy.wait(1000)
        adminCalendarPage.getMonthDrpDwnLst().contains(this.calendar.currentMonth).click()
        cy.wait(1000)
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Monthly')
        adminCalendarPage.getHolidayDateInCalendar().should('contain.text', this.calendar.holiday1)
        cy.wait(1000)
    })

    it("To delete the added holiday", function () {
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Weekly')
        adminCalendarPage.getCalendarDayTxt().contains(this.calendar.currentDate).click()
        adminCalendarPage.getHolidayWrapperLst().each(($e1, index) => {
            adminCalendarPage.getHolidayWrapperLst().eq(index).click()
            adminCalendarPage.getHolidayDltBtn().click()
            cy.contains(this.calendar.deleteHolidayConfirmationTxt).should('be.visible')
            adminCalendarPage.getHolidayCnfrmDltBtn().click()
            cy.contains(this.calendar.deletedSuccessPopup).should('be.visible')
            return false;
        })
    })

    it("Create and Delete the Holiday as Single", function () {
        cy.wait(2000)
        adminCalendarPage.getCreateNewBtn().click()
        adminCalendarPage.getHolidayEnterBtn().contains(this.calendar.holidayTxt).click()
        adminCalendarPage.getEnterHolidayTxt().type(this.calendar.holiday2)
        adminCalendarPage.getStartDateInCreateHolidayPopup().click()
        var num = dayjs().add(1, 'day').format('DD')
        cy.log(num)
        adminCalendarPage.getDateLstInCreateHolidayPopup().eq(num - 1).click()
        adminCalendarPage.getEndDateInCreateHolidayPopup().click()
        adminCalendarPage.getDateLstInCreateHolidayPopup().eq(num - 1).click()
        adminCalendarPage.getHolidayDescriptionTextAreaInCreateHolidayPopup().click().type(this.calendar.descriptionTxt)
        adminCalendarPage.getSaveHolidayBtnInCreateHolidayPopup().click()
        cy.contains(this.calendar.holidaySuccessPopup).should('be.visible')
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Monthly')
        adminCalendarPage.getHolidayDateInCalendar().should('contain.text', this.calendar.holiday2)
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Daily')
        adminCalendarPage.getCalendarDayTxt().contains(num).click()
        cy.wait(1000)
        adminCalendarPage.getHolidayWrapperLst().each(($e1, index) => {
            adminCalendarPage.getHolidayWrapperLst().eq(index).click()
            adminCalendarPage.getHolidayDltBtn().click()
            cy.contains(this.calendar.deleteHolidayConfirmationTxt).should('be.visible')
            adminCalendarPage.getHolidayCnfrmDltBtn().click()
            cy.contains(this.calendar.deletedSuccessPopup).should('be.visible')
            return false;
        })
    })
    it('To validation calander', function () {
        adminCalenderHomePage.getCalenderTab().click({ force: true })
        adminCalenderHomePage.getCalenderSelectAllCheckbox().check()
        adminCalenderHomePage.getCalenderGradeDropdown().click()
        adminCalenderHomePage.getCalenderGrade6Opt().click()
        adminCalenderHomePage.getCalenderSectionDropdown().click()
        adminCalenderHomePage.getCalenderSectionDropdownAOpt().click()
        cy.wait(4000)
        adminCalenderHomePage.getCalenderPeriodsList().should('be.visible')
        cy.go('back')
        adminCalenderHomePage.getCalenderTab().click({ force: true })
        adminCalenderHomePage.getCalenderSelectAllCheckbox().check()
        adminCalenderHomePage.getCalenderGradeDropdown().click()
        adminCalenderHomePage.getCalenderGrade3Opt().click()
        adminCalenderHomePage.getCalenderSectionDropdown().click()
        adminCalenderHomePage.getCalenderSectionDropdownAOpt().click()
        cy.wait(4000)
        adminCalenderHomePage.getCalenderPeriodsList().should('not.exist')
    })
})
