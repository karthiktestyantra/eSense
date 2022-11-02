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
        cy.contains("Upload Holidays in bulk").should('be.visible')
        adminCalendarPage.getSelectHolidayFileBtn().attachFile('LMS/Holidays_List.xlsx')
        cy.wait(1000)
        adminCalendarPage.getImportHolidayBtn().click()
    })

    it("To validate whether the Holiday DB is created from the uploaded file data/EL-4065/ES4065_03", function () {
        adminCalendarPage.getHolidayCheckBxInCalendarPage().check({ force: true })
        adminCalendarPage.getYearDrpDwnInCalendar().click()
        adminCalendarPage.getYearDrpDwnLst().contains("2022").click()
        cy.wait(1000)
        adminCalendarPage.getMonthDrpDwnLst().contains("Oct").click()
        cy.wait(1000)
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Monthly')
        cy.wait(1000)
        cy.get('.cal-header-prev').click()
        cy.wait(1000)
        adminCalendarPage.getHolidayDateInCalendar().should('contain.text', "Diwali")
        cy.wait(1000)
    })

    it("To delete the added holiday", function () {
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Weekly')
        cy.wait(2000)
        adminCalendarPage.getCalendarDayTxt().contains("24").dblclick({force:true})
        adminCalendarPage.getHolidayWrapperLst().each(($e1, index) => {
            adminCalendarPage.getHolidayWrapperLst().eq(index).click()
            adminCalendarPage.getHolidayDltBtn().click()
            cy.contains("Do you want to delete this Holiday ?").should('be.visible')
            adminCalendarPage.getHolidayCnfrmDltBtn().click()
            cy.contains("Deleted successfully").should('be.visible')
            return false;
        })
    })

    it("Create and Delete the Holiday as Single", function () {
        cy.wait(2000)
        adminCalendarPage.getCreateNewBtn().click()
        adminCalendarPage.getHolidayEnterBtn().contains("Holiday").click()
        adminCalendarPage.getEnterHolidayTxt().type("Pongal")
        adminCalendarPage.getStartDateInCreateHolidayPopup().click()
        var num = dayjs().add(1, 'day').format('D')
        cy.log(num)
        adminCalendarPage.getDateLstInCreateHolidayPopup().eq(num-1).click()
        adminCalendarPage.getEndDateInCreateHolidayPopup().click()
        adminCalendarPage.getDateLstInCreateHolidayPopup().eq(num-1).click()
        adminCalendarPage.getHolidayDescriptionTextAreaInCreateHolidayPopup().click().type("Festival")
        adminCalendarPage.getSaveHolidayBtnInCreateHolidayPopup().click()
        cy.contains("Holiday Added Successfully").should('be.visible')
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Monthly')
        adminCalendarPage.getHolidayDateInCalendar().should('contain.text', "Pongal")
        adminCalendarPage.getMonthlyDrpDwnInCalendar().click()
        adminCalendarPage.getMonthlyDrpDwnLstInCalendar().select('Daily')
        adminCalendarPage.getCalendarDayTxtDynamic(num).click()
        cy.wait(1000)
        adminCalendarPage.getHolidayWrapperLst().each(($e1, index) => {
            adminCalendarPage.getHolidayWrapperLst().eq(index).click()
            adminCalendarPage.getHolidayDltBtn().click()
            cy.contains("Do you want to delete this Holiday ?").should('be.visible')
            adminCalendarPage.getHolidayCnfrmDltBtn().click()
            cy.contains("Deleted successfully").should('be.visible')
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
