import AdminQuickLinksPage from "../../../support/pageObjects/LMS-2/AdminQuickLinksPage";

const adminQuickLinksPage = new AdminQuickLinksPage();

describe("Verify admin quick link time table functionalities", function () {
    before(function () {
        cy.visit(Cypress.env('urlStaging'))
        cy.fixture("LMS/AdminLoginCredentials").then(function (validAdminLoginData) {
            cy.AdminPostSetup(validAdminLoginData.boysUser, validAdminLoginData.password)
        })
    })
    beforeEach(function () {
        cy.fixture('LMS/AdminQuickLink').then(function (adminQuickLink) {
            this.adminQuickLink = adminQuickLink;
        })
    })

    it("To validate that Timetable Management button is provided in School Quick Links page/EL-4096/ES4096_01", function () {
        adminQuickLinksPage.getMenuSchoolImg().click()
        adminQuickLinksPage.getTimetableManagementBtn().contains('Timetable Management').should('be.visible')

    })

    it("To validate that when user click on Timetable Management button, list of timetables generated for different classes is displayed if there is any timetable already created for any class during post-setup/EL-4096/ES4096_02", function () {
        adminQuickLinksPage.getTimetableManagementBtn().contains('Timetable Management').click()
        cy.wait(3000)
        adminQuickLinksPage.getListOfTimeTableGenerated().should('be.visible')
    })

    it("To validate that user is able to generate the time table using below options  1. Auto Timetable 2. Manual Timetable 3. Upload Timetable/EL-4096/ES4096_03", function () {
        adminQuickLinksPage.getTimetableGenerateBtn().click()
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Auto').should('be.visible')
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Manual').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableGoBackBtn().click()
    })

    it("To validate that the following details are displayed to the user in the grid Class Generated on, Last Edited, Type,Status, Action/EL-5149/ES5149_02", function () {
        adminQuickLinksPage.getClassAndLastEditedDropdown().should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableColumnNames().contains('GENERATED ON').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableColumnNames().contains('TYPE').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableColumnNames().contains('STATUS').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableColumnNames().contains('ACTION').should('be.visible')
    })

    it("To validate that Search a Template Searchbar is provided in Timetable Management page/EL-5149/ES5149_03", function () {
        adminQuickLinksPage.getSearchTemplateTxtField().should('be.visible')
    })

    it("To validate user is able to search by entering text or keywords into Search a Template Searchbar/EL-5149/ES5149_04", function () {
        adminQuickLinksPage.getSearchTemplateTxtField().click().type(this.adminQuickLink.searchTxtFieldValue)
        cy.wait(1000)
        adminQuickLinksPage.getTableClassName().contains('Grade 5 - a').should('have.text', this.adminQuickLink.searchTxtFieldValue)
    })

    it("To validate Class filter dropdown is provided in Timetable Management page/EL-5149/ES5149_05", function () {
        adminQuickLinksPage.getFilterClassNameDropdown().should('be.visible')
    })

    it("To validate that by default all classes are listed in Class filter dropdown/EL-5149/ES5149_06", function () {
        adminQuickLinksPage.getSearchTemplateTxtField().clear()
        cy.wait(2000)
        adminQuickLinksPage.getFilterClassNameDropdown().should('have.text', 'All')
        adminQuickLinksPage.getTableClassName().should('be.visible')
    })

    it("To validate that user is able to select the option from Class filter dropdown/EL-5149/ES5149_07", function () {
        adminQuickLinksPage.getFilterClassNameDropdown().click()
        adminQuickLinksPage.getFilterClasValuesDropdown().contains('Grade 2 - A').should('be.visible').click()

    })

    it("To validate that Sort option  is provided for the following columns (Class / Last Edited)/EL-5149/ES5149_08", function () {
        adminQuickLinksPage.getFilterClassNameDropdown().then(function (dropValueTxt) {
            const DropValueTxt = dropValueTxt.text()
            adminQuickLinksPage.getTableClassName().should('have.text', DropValueTxt)

        })
    })

    it("To validate that user is able to perform delete option after selecting Individual line item or “Select All” options/EL-5149/ES5149_10", function () {
        adminQuickLinksPage.getGeneratedTimetableDeleteBtn().should('be.visible')
    })

    it("To validate that user is able to export as pdf by clicking the “Download as pdf” option after selecting Individual line item or “Select All” options/EL-5149/ES5149_11", function () {
        adminQuickLinksPage.getFilterClassNameDropdown().click()
        adminQuickLinksPage.getFilterClasValuesDropdown().eq(0).click()
        adminQuickLinksPage.getGeneratedTimetableCheckBox().eq(0).check()
        adminQuickLinksPage.getGeneratedTimetableDownloadPdfBtn().contains('Download as PDF').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableCheckBox().eq(0).uncheck()
        adminQuickLinksPage.getGeneratedTimetableCheckBox().eq(1).check()
        adminQuickLinksPage.getGeneratedTimetableDownloadPdfBtn().contains('Download as PDF').should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableCheckBox().eq(1).uncheck()

    })

    it("To validate that only 10 records are displayed to the user in one page/EL-5149/ES5149_13", function () {
        adminQuickLinksPage.getListOfGeneratedTimetable().should('have.length', 10)
    })

    it("To validate that if more than 10 records are present pagination is displayed/EL-5149/ES5149_14", function () {
        adminQuickLinksPage.getPaginationNextBtn().click()
        adminQuickLinksPage.getListOfGeneratedTimetable().should('have.length.lessThan', 11)

    })

    it("To validate that user is able to create the timetable by clicking on Generate Timetable button in post-setup if the timetable is not configured during pre-setup/EL-5163/ES5163_01", function () {
        //Timetable - Auto
        adminQuickLinksPage.getTimetableGenerateBtn().click()
        adminQuickLinksPage.getGeneratedTimetableDaysDropdown().eq(0).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('6').click()
        adminQuickLinksPage.getGeneratedTimetablePeriodsDropdown().eq(1).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('5').click()
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableStartTime().eq(0).click({ force: true })
        adminQuickLinksPage.getViewTimeTableAMBtn().contains("AM").click({ force: true })
        adminQuickLinksPage.getViewTimeTableRightArrow().click()
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableStartTime().eq(0).click({ force: true })
        cy.wait(1000)
        adminQuickLinksPage.getViewTimeTableEndTime().eq(1).click({ force: true })
        adminQuickLinksPage.getViewTimeTablePMBtn().contains('PM').click({ force: true })
        adminQuickLinksPage.getViewTimeTableRightArrow().click()
        adminQuickLinksPage.getViewTimeTablePMBtn().contains('PM').click({ force: true })
        cy.wait(2000)
        adminQuickLinksPage.getViewTimeTableEndTime().eq(1).click({ force: true })

        cy.wait(1000)

        adminQuickLinksPage.getGeneratedTimetableRoomDropdown().eq(3).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()

        adminQuickLinksPage.getGeneratedTimetablePeriodTimeDropdown().eq(2).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('25 Minutes').click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
        for (var i = 0; i < 6; i++) {
            adminQuickLinksPage.getGeneratedTimetableZeroPeriodDays().eq(i).click()
        }
        adminQuickLinksPage.getGeneratedTimetableZeroLengthDropdown().eq(4).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('20 Minutes').click()
        adminQuickLinksPage.getGeneratedTimetableZeroOccationDropdown().eq(5).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('Before 1st Period').click()
        adminQuickLinksPage.getGeneratedTimetableBreakNmaeTxtField().type('lunch')
        adminQuickLinksPage.getGeneratedTimetableBreakLengthDropdown().eq(6).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('50 Minutes').click()
        adminQuickLinksPage.getGeneratedTimetableBreakOccationDropdown().eq(7).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
        adminQuickLinksPage.getGeneratTimetableBtn().click({ force: true })
        adminQuickLinksPage.getTimeTableGeneratedSuccessMeg().should('be.visible')
        cy.wait(5000)
    })

    it("To validate that when user click on Generate Timeslots button, User should be navigated to the “Generate Timetable” page/EL-5212/ES5212_01", function () {
        adminQuickLinksPage.getTimeTableGeneratedHeaderTxt().contains('Here are the timetables')
    })

    it("To validate that user should be able to view the  the timetable slots of the class in “Generate Timetable” page/EL-5212/ES5212_02", function () {
        adminQuickLinksPage.getTimeTableGeneratedClassSlots().should('be.visible')
    })

    it("To validate that user is able to generate the Timetable by selecting Timeslots available in the timetable view/EL-5212/ES5212_04", function () {
        adminQuickLinksPage.getTimeTableGeneratedClassSlots().eq(1).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdown().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdownValue().contains(this.adminQuickLink.slotSubDropValue).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropdown().eq(1).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().contains(this.adminQuickLink.slotTeacherDropValue).click({ force: true })
        adminQuickLinksPage.getTimeTableGeneratedSlotAddBtn().should('be.visible').click()

    })

    it("To validate that when user click on Zero Period timeslots 0 Period pop-up is displayed/EL-5212/ES5212_07", function () {
        adminQuickLinksPage.getTimeTableGeneratedClassSlots().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedZeroPeriodPopup().contains('Add Period').should('be.visible')
    })

    it("To validate that Available teacher list is displayed to user in Techers Dropdown/EL-5212/ES5212_08", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdown().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdownValue().contains(this.adminQuickLink.slotSubDropValue).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropdown().eq(1).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().should('be.visible')
        cy.wait(1000)
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().contains(this.adminQuickLink.slotTeacherDropValue).click({ force: true })
    })

    it("To validate that user is able to select the select the “Free Class” for that time slot by clicking on Subject Dropdown/EL-5212/ES5212_12", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdown().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdownValue().contains('Free Class').scrollIntoView().should('be.visible')
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdownValue().contains('Free Class').click()

    })

    it("To validate that when user selects the “Free Class” then, available teacher list is displayed for that timeslot./EL-5212/ES5212_15", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropdown().eq(1).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().should('be.visible').eq(1).click()

    })

    it("To validate that when user clicks on Cancel button user is navigated back to Generate Timetable page/EL-5212/ES5212_17", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotDeleteBtn().should('be.visible').click()
    })

    it("To validate that when user click on “Save & Exit” button details is saved as a draft and the system should update the timetable status as “Draft” in the listing screen/EL-5212/ES5212_20", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotPublishBtn().should('be.visible')
        adminQuickLinksPage.getTimeTableGeneratedSlotSaveAndExitBtn().contains('Save & Exit').should('be.visible').click()
        adminQuickLinksPage.getTimeTableGeneratedSaveMsgPopup().should('have.text', 'Timetable saved successfully')



    })
    //    it("To validate that Edit button is provided to the user in “Action” column in the timetable list screen/EL-5223/ES5223_01",function () {
    //     adminQuickLinksPage.getTimetableGeneraAutoBtn().each(($e1,index,$list)=>{
    //         const auto = $e1.text()
    //         if(auto.includes('Auto')){
    //             adminQuickLinksPage.getTimetableGenertedDisabledEditBtn().eq(index).should('not.be.enabled')

    //         }

    //     })
    //    })

    it("To validate that Edit button is available only for Manual Generated timetable/EL-5223/ES5223_02", function () {
        cy.wait(5000)
        adminQuickLinksPage.getPaginationNextBtn().click()
        cy.wait(2000)
        adminQuickLinksPage.getTimetableGeneraManualBtn().each(($e1, index, $list) => {
            const manual = $e1.text()
            if (manual.includes('Manual')) {
                adminQuickLinksPage.getTimetableGeneratedEnabledEditBtn().should('be.visible')

            }

        })
    })

    it("To validate that for auto-generated timetable, user is able to only delete and re-generate the timetable/EL-5223/ES5223_03", function () {
        adminQuickLinksPage.getTimetableGeneraAutoBtn().each(($e1, index, $list) => {
            const auto = $e1.text()
            if (auto.includes('Auto')) {
                adminQuickLinksPage.getTimetableGeneratedDeleteBtn().eq(index).should('be.visible')

            }

        })

    })

    it("To validate that user is navigated to Edit Timetable page by clicking on Edit button/EL-5223/ES5223_04", function () {
        adminQuickLinksPage.getTimetableGeneratedEnabledEditBtn().click()
        adminQuickLinksPage.getEditTimeTableHeader().should('have.text', 'Edit Timetable')
    })

    it("To validate that Save Changes button is provided to the user in Edit Timetable page/EL-5223/ES5223_05", function () {
        adminQuickLinksPage.getEditTimeTableSaveChangesBtn().should('be.visible')
    })

    //    it("To validate that user is able to drag and move the timeslot within the timetable/EL-5223/ES5223_06",function () {
    //     const dataTransfer = new DataTransfer;
    //     cy.get('[data-id="mbsc_101"] > .classCardSect > .liveClassTsrCrd').trigger('dragstart',{ dataTransfer });
    //     cy.get('[data-id="mbsc_99"] > .classCardSect > .liveClassTsrCrd').trigger('drop',{ dataTransfer })
    //     cy.get('[data-id="mbsc_101"] > .classCardSect > .liveClassTsrCrd').trigger('dragend');
    //    })

    it("To validate that user is able to edit Subject and Teacher for the selected period/EL-5223/ES5223_07", function () {
        adminQuickLinksPage.getTimeTableGeneratedClassSlots().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedZeroPeriodPopup().contains('Add Period').should('be.visible')
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdown().eq(0).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsSubDropdownValue().contains('Science Test01').click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropdown().eq(1).click()
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().should('be.visible')
        adminQuickLinksPage.getTimeTableGeneratedSlotsTeacherDropValue().contains('ganesha').click()

    })

    it("To validate that when user click on Add button updated changes is reflected for the selected timesolt/EL-5223/ES5223_08", function () {
        adminQuickLinksPage.getTimeTableGeneratedSlotAddBtn().should('be.visible').click()
    })

    it("To validate that when user click on Save changes” button, Changes are saved and confirmation pop-up is displayed to the user/EL-5223/ES5223_12", function () {
        adminQuickLinksPage.getEditTimeTableSaveChangesBtn().click()
        cy.wait(1000)
        adminQuickLinksPage.getEditTimeTableUpdateMesg().should('contain.text', 'Timetable changes has been successfully saved')
        cy.get('[data-testid="CloseIcon"] > path').click()
    })


    it("To vallidate that when user click on Publish button Timetable is published and populated to the specific teachers and class students and the system should update the timetable status as “Published” in the listing screen", function () {
        cy.get('[data-testid="CloseIcon"] > path')
        adminQuickLinksPage.getTimeTableGeneratedSlotPublishBtn().should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableGoBackBtn().click({ force: true })
        adminQuickLinksPage.getPaginationNextBtn().click()
        cy.wait(1000)
        adminQuickLinksPage.getTimeTableListOfGradeName().each(($e1, index, $list) => {
            const gradeNameTxt = $e1.text()
            if (gradeNameTxt.includes('Grade 8 - B')) {
                adminQuickLinksPage.getTimeTableListOfDeleteBtn().eq(index).click()
            }

        })
        adminQuickLinksPage.getTimeTablePopupDeleteBtn().click()
    })


    it("To validate that when user click on Generate Timetable button, it's navigating to Timetable Basic Information page/EL-5163/ES5163_03", function () {
        cy.wait(1000)
        adminQuickLinksPage.getTimetableGenerateBtn().click()
        adminQuickLinksPage.getGeneratTimetableHeaderTitle().contains('TIMETABLE • Basic Information').should('be.visible')

    })

    it("To validate that user is able to select the Auto/Manual Radio button/EL-5163/ES5163_04", function () {
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Auto').should('be.visible')
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Manual').should('be.visible')
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Manual').click()

    })

    it("To validate that Auto option is disabled only in case of Generate Timetable in pre-set up when timetable is not configured during pre-setup", function () {
        adminQuickLinksPage.getTimetableGenerateAutoRadioBtn().contains('Auto').should('not.be.enabled')
    })



    it("To validate that only 1-7 Numbers are provided as  options for Days/ Week Dropdown/EL-5163/ES5163_07", function () {
        adminQuickLinksPage.getGeneratedTimetableDaysDropdown().eq(0).should('be.visible').click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().should('have.length', 7)
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('6').click()

    })

    it("To validate that user is able to select the Number of days School works in week from Days/ Week Dropdown/EL-5163/ES5163_06", function () {
        adminQuickLinksPage.getGeneratedTimetableDaysDropdown().eq(0).should('be.visible').click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('5').should('be.visible').click()
    })

    it("To validate that only 1-7 Numbers are provided as  options for Periods/ Day Dropdown/EL-5163/ES5163_09", function () {
        adminQuickLinksPage.getGeneratedTimetablePeriodsDropdown().eq(1).should('be.visible').click({ force: true })
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().should('have.length', 7)
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('5').click()

    })

    it("To validate that user is able to select the Number of Periods for day from Periods/ Day Dropdown/EL-5163/ES5163_08", function () {
        adminQuickLinksPage.getGeneratedTimetablePeriodsDropdown().eq(1).should('be.visible').click({ force: true })
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().contains('6').should('be.visible').click()

    })

    it("To validate that user is able to select the school Start Time from School Start Time clockz/EL-5163/ES5163_10", function () {
        cy.wait(2000)
        cy.get('[placeholder="h:mm (a|p)m"]').eq(0).should('be.visible').click({ force: true })
        cy.get('.MuiTypography-root').contains("AM").click({ force: true })
        cy.get('[data-testid="ArrowRightIcon"]').click()
        cy.wait(2000)
        cy.get('[placeholder="h:mm (a|p)m"]').eq(0).should('be.visible').click({ force: true })

    })

    it("To validate that user is able to select the school Ending Time from School Ending Time clock/EL-5163/ES5163_12", function () {
        cy.wait(1000)
        cy.get('[placeholder="h:mm (a|p)m"]').eq(1).should('be.visible').click({ force: true })
        cy.get('.MuiTypography-root').contains('PM').click({ force: true })
        cy.get('[data-testid="ArrowRightIcon"]').click()
        cy.get('.MuiTypography-root').contains('PM').click({ force: true })
        cy.wait(2000)
        cy.get('[placeholder="h:mm (a|p)m"]').eq(1).should('be.visible').click({ force: true })

    })

    it("To validate that user is able to select minimum of 5min to maximum of 60min as a period duration from Period Time Dropdown/EL-5163/ES5163_15", function () {
        adminQuickLinksPage.getGeneratedTimetablePeriodTimeDropdown().eq(2).should('be.visible').click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(0).should('have.text', '05 Minutes')
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(11).should('have.text', '60 Minutes')
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(11).click()
    })

    it("To validate that List of Values fetched from pre set-up My School Infrastructure Page are displayed as options for Room dropdown/EL-5163/ES5163_17", function () {
        adminQuickLinksPage.getGeneratedTimetableRoomDropdown().eq(3).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().should('be.visible').click()
    })

    it("To validate that Zero Period Days buttons have Monday to Sunday as options/EL-5163/ES5163_19", function () {
        adminQuickLinksPage.getGeneratedTimetableZeroPeriodDays().should('have.length', '7')
    })

    it("To validate that user is able to select minimum of 5min to maximum of 20min as a period duration from Zero Period Length Dropdown/EL-5163/ES5163_21", function () {
        adminQuickLinksPage.getGeneratedTimetableZeroLengthDropdown().eq(4).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().each(($e1, index, $list) => {
            adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(index).click()
            adminQuickLinksPage.getGeneratedTimetableZeroLengthDropdown().eq(4).click()
        })

        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
    })

    it("To validate that for Zero Period Occurrence Dropdown, Before All  Periods Before 1st Period Before 2nd Period .. So on Based on number of period selected values will be provided as options/EL-5163/ES5163_23", function () {
        adminQuickLinksPage.getGeneratedTimetableZeroOccationDropdown().eq(5).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().each(($e1, index, $list) => {
            adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(index).click()
            adminQuickLinksPage.getGeneratedTimetableZeroOccationDropdown().eq(5).click()
        })
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().first().click()
    })

    it("To validate that user is abel to select the Occurrence of Break from Break Occurrence Dropdown/EL-5163/ES5163_30", function () {
        adminQuickLinksPage.getGeneratedTimetableBreakOccationDropdown().eq(7).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().each(($e1, index, $list) => {
            adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(index).click()
            adminQuickLinksPage.getGeneratedTimetableBreakOccationDropdown().eq(7).click()
        })
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(2).click()
    })

    it("To validate that user is able to select minimum of 5min to maximum of 60min as a Break duration from Break Length/EL-5163/ES5163_29 Dropdown/EL-5163/ES5163_29", function () {
        adminQuickLinksPage.getGeneratedTimetableBreakLengthDropdown().eq(6).click()
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().each(($e1, index, $list) => {
            adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(index).click()
            adminQuickLinksPage.getGeneratedTimetableBreakLengthDropdown().eq(6).click()
        })
        adminQuickLinksPage.getGeneratedTimetableDropdownValue().eq(2).click()

    })

    it("To validate that user is able to Add the break by clicking on Add Break button/EL-5163/ES5163_32", function () {
        adminQuickLinksPage.getAddBreakBtn().should('be.visible').click()
    })

    it("To validate that user is able to add maximum 5 break's by clicking on Add Break button/EL-5163/ES5163_33", function () {
        for (var i = 0; i < 5; i++) {
            adminQuickLinksPage.getAddBreakBtn().scrollIntoView().should('be.visible').click()
        }

    })

    it("To validate that user is not able to add more than 5 break's by clicking on Add Break button/EL-5163/ES5163_34", function () {
        for (var i = 0; i <= 5; i++) {
            adminQuickLinksPage.getAddBreakBtn().scrollIntoView().should('be.visible').click()
        }
        adminQuickLinksPage.getAddBreakErrorMesgBtn().should('have.text', 'Maximum 5 breaks can be added!')
    })

    it("To validate that user is able to delete the break by clicking on Delete button/5163/ES5163_35", function () {
        adminQuickLinksPage.getAddBreakDeleteBtn().each(($e1, index, $list) => {
            adminQuickLinksPage.getAddBreakDeleteBtn().eq(0).click()
            cy.wait(1000)
        })


    })

    it("Validate whether bulk delete option is enabled when multiple items are selected in the timetable list screen/EL-5361/ES5361_02", function () {
        adminQuickLinksPage.getGeneratedTimetableGoBackBtn().click()
        adminQuickLinksPage.getTimeTableBulkClassCheckBox().eq(0).check()
        adminQuickLinksPage.getTimeTableBulkDeleteBtn().scrollIntoView().should('be.visible')

    })

    it("To validate that user is able to view the details of the timetable by clicking the “>(View)” icon in the Timetable listing Page/EL-5360/ES5360_01", function () {
        adminQuickLinksPage.getTimeTableListOfGradeName().each(($e1, index, $list) => {
            const gradeNameTxt = $e1.text()
            if (gradeNameTxt.includes('Grade 1 - A')) {
                adminQuickLinksPage.getTimeTableListOfViewBtn().eq(index).click()
            }

        })

        adminQuickLinksPage.getViewTimeTableHeader().contains('View Timetable').should('be.visible')

    })

    it("To validate that user is able to view the time for the selected class/EL-5360/ES5360_01", function () {
        adminQuickLinksPage.getViewTimeTableDate().should('be.visible')
    })

    it("To validate that user is able to view the days in a week in which school works, in the first row of the timetable/EL-5360/ES5360_03", function () {
        adminQuickLinksPage.getViewTimeTableDays().should('be.visible')
        adminQuickLinksPage.getGeneratedTimetableGoBackBtn().click()
        cy.wait(1000)
        adminQuickLinksPage.getPaginationNextBtn().click()
        cy.wait(2000)
        adminQuickLinksPage.getTimeTableListOfGradeName().each(($e1, index, $list) => {
            const gradeNameTxt = $e1.text()
            if (gradeNameTxt.includes('Grade 8 - B')) {
                adminQuickLinksPage.getTimeTableListOfDeleteBtn().eq(index).click()
            }

        })




    })

})