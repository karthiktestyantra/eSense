const teacherELAPage = require("../../../support/pageObjects/LMS-2/TeacherELAPage2")

describe("Verify Teacher ELA Page functionalities - Sprint 16(EL-4203,EL-4220,EL-4046,EL-3976)", function () {

    before(function () {
        cy.visit(Cypress.env('urlProd'))
        cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
            cy.TeacherPostSetupLogin(validAdminLoginData.teacher3, validAdminLoginData.password)
        })
    })

    beforeEach(function () {
        cy.fixture("LMS/TeacherELACredentials").as("teacherELA")
    })

    it("Validate teacher clicks on Assign button Successfully assigned pop up will appear with the notification/EL-4203/ES4203_01", function () {
        teacherELAPage.getMyClassImg().click()
        teacherELAPage. getMyClassRiseSubName().click({ force: true })
        teacherELAPage.getAssessmentTab().click()
        teacherELAPage.getAssignmentBtn().click({ force: true })
        teacherELAPage.getAddELABtn().click()
        // cy.get('button.cntLibCardBtn').eq(3).scrollIntoView().click()
        // teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        // teacherELAPage.getELAAssignBtn().click()
        // teacherELAPage.getElaPopupCancelBtn().click()
        // cy.wait(2000)
        // teacherELAPage.getAddELABtn().click()
        // cy.get('button.cntLibCardBtn').eq(3).scrollIntoView().click()
        // teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        // teacherELAPage.getELAAssignBtn().then(($e1) => {
        //     const assgnTxt = $e1.text()
        //     if (assgnTxt.includes('Assign')) {
        //         teacherELAPage.getELAAssignBtn().click()
        //         //    cy.on('window:alert',(txt)=>{
        //         //     expect(txt).to.contains('Successfully Assigned');
        //         teacherELAPage.getELAAssignedPrintBtn().click()
        //         teacherELAPage.getELAAssignedPrintPageTxt().should('be.visible')
        //         return false;

        //     } else {

        //         cy.on('window:alert', (txt) => {
        //             expect(txt).to.contains('is already assigned Please select other ELA');

        //         })
        //     }
        // })
        teacherELAPage.getELASubSearchTxtField()
        teacherELAPage.getELASubSearchIcon().click()
        teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric")) {
                teacherELAPage.getViewELABtnInELAAddSect().eq(index).click()
            }
        })
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        teacherELAPage.getELAAssignBtn().click()
        cy.wait(10000)
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Successfully Assigned');
        })
        teacherELAPage.getElaPopupCancelBtn().click()
        cy.wait(5000)
        teacherELAPage.getElaDeleteIcon().click()
        cy.get('.MuiButton-contained').click()


    })


    it("Validate teacher is able to click on “ Print”button , redirected to print and preview screen/EL-4203/ES4203_02", function () {
        // teacherELAPage.getMyClassImg().click()
        // teacherELAPage.getMyClassSubName().contains(this.teacherELA.myclasssubname).click()
        // teacherELAPage.getAssessmentTab().click()
        // teacherELAPage.getAssignmentBtn().click({force:true})
        teacherELAPage.getAddELABtn().click()
        // teacherELAPage.getELASubSearchTxtField().type(this.teacherELA.searchsubject)
        // teacherELAPage.getELASubSearchIcon().click()
        // cy.get('[data-testid="goback"] > p').click()
        teacherELAPage.getViewELABtn().scrollIntoView().click()
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        teacherELAPage.getELAAssignBtn().then(($e1) => {
            const assgnTxt = $e1.text()
            if (assgnTxt.includes('Assign')) {
                teacherELAPage.getELAAssignBtn().click()
                //    cy.on('window:alert',(txt)=>{
                //     expect(txt).to.contains('Successfully Assigned');
                teacherELAPage.getELAAssignedPrintBtn().click()
                teacherELAPage.getELAAssignedPrintPageTxt().should('be.visible')
                return false;

            } else {

                cy.on('window:alert', (txt) => {
                    expect(txt).to.contains('is already assigned Please select other ELA');

                })
            }
        })
    })

    it("Validate teacher is able to print an ELA assignment/", function () {

        teacherELAPage.getPrintELAPageBtn().should('be.visible')
        teacherELAPage.getPrintAssignmentTable().should('be.visible')
        teacherELAPage.getCancelELAPageBtn().click()
        cy.go('back')
        teacherELAPage.getElaDeleteIcon().click()
        teacherELAPage.getDeleteELAConfirmationPopupBtn().click()

    })


    it("Validate teacher clicks on  Cancel button , navigate back to Assign as classwork screen/EL-4203/ES4203_06", function () {
        teacherELAPage.getAddELABtn().click()
        teacherELAPage.getELASubSearchTxtField()
        teacherELAPage.getELASubSearchIcon().click()
        teacherELAPage.getViewELABtn().scrollIntoView().click()
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        teacherELAPage.getELAAssignBtn().click()
        teacherELAPage.getElaPopupCancelBtn().click({ force: true })
        teacherELAPage.getAssignmentPagrGradeName().should('be.visible')
        // teacherELAPage.getElaDeleteIcon().click()
        // teacherELAPage.getDeleteELAConfirmationPopupBtn().click()

    })

    it("Validate teacher is able to click on Print Evaluation sheet button/EL-4204/ES4204_01", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        cy.contains('Pending').click()
        teacherELAPage.getPrintELAEvalutionSheetBtn().should('be.visible').click()
        teacherELAPage.getRankSudentTitleHeader().should('be.visible')
        teacherELAPage.getELAEvalutionSheetPrintBtn().should('be.visible')


    })

    it("Validate teacher is able to click on Cancel button/EL-4204/ES4204_03", function () {
        teacherELAPage.getELAEvalutionSheetCancelBtn().should('be.visible').click()
        teacherELAPage.getElaDeleteIcon().click()
        teacherELAPage.getDeleteELAConfirmationPopupBtn().click()
    })

    it("Validate teacher is able to click on “+Create a Group”/EL-4220/ES4220_01", function () {
        teacherELAPage.getAddELABtn().click()
        teacherELAPage.getViewELABtn().scrollIntoView().click()
        teacherELAPage.getELAGroupRadioBtn().click()
        teacherELAPage.getELAGroupCreateNewBtn().should('be.visible').click()
    })

    it("Validate teacher  have to mandatorily write “group name” in the group name text box/EL-4220/ES4220_02", function () {
        teacherELAPage.getELAGroupNameTxtBox().type(this.teacherELA.GroupELAName)
    })

    it("Validate teacher can add descriptions for the group in the text box/EL-4220/ES4220_03", function () {
        teacherELAPage.getELAGroupCreateDescriptionTxtBox().type(this.teacherELA.GroupELADiscription)
    })

    it("Teacher - ELA Assign - Create ELA group/EL-4220/ES4220_04", function () {
        teacherELAPage.getELAGroupCreateAddStudentIcon().click()
        teacherELAPage.getELAGroupAddStudentBtn().click()
        teacherELAPage.getELAGroupCreatedStudentDetails().should('be.visible')
    })

    it("Validate teacher is able to fill all the details and click on the “Create Group” button the student group will be created/EL-4220/ES4220_05", function () {
        teacherELAPage.getELAGroupCreateGroupBtn().click()
        teacherELAPage.getELACreateesGroupSuccessPopup().should('contain.text', this.teacherELA.CreateGroupSuccessMeg)
    })

    it("Validate teacher click on the “Edit” , user should be able to remove and student from the group./EL-4220/ES4220_06", function () {
        teacherELAPage.getELACreateesGroupEditIcon().click()
        teacherELAPage.getELACreatedStudentRemoveBtn().should('be.visible').click()
        teacherELAPage.getELAGroupCreateAddStudentIcon().click()
        teacherELAPage.getELAGroupAddStudentBtn().click()
        teacherELAPage.getELAGroupUpdateGroupBtn().click()
        teacherELAPage.getELACreateesGroupDeleteIcon().click()
        teacherELAPage.getELAGroupCreateDeleteConfirmBtn().click()
        teacherELAPage.getELAGroupCreateDeletedSuccessMeg().should('contain.text', this.teacherELA.DeleteGroupSuccessMsg)
        cy.wait(3000)
        teacherELAPage.getGoBackBtn().click()

    })

    it("Validate teacher is able to select Each column “Q1”, “Q2”, “Q3”, “Q4” will have a “check box” in the column and allow teacher to click on the check box, to select questions for the group./EL-4220/ES4220_08", function () {
        cy.get('button.cntLibCardBtn').eq(3).click()    
       // teacherELAPage.getViewELABtn().scrollIntoView().click()
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        teacherELAPage.getELAAssignBtn().click()
        cy.wait(5000)
        teacherELAPage.getElaPopupCancelBtn().click()
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric")) {
                teacherELAPage.getDltBtnLstInELACard().eq(index).click()
            }
        })
        teacherELAPage.getDltELACardPopup().click()
        teacherELAPage.getELACardDltConfrmBtn().click()
        teacherELAPage.getAddELABtn().click()
        cy.wait(1000)
        teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric")) {
                teacherELAPage.getViewELABtnInELAAddSect().eq(index).click()
            }
        })
        teacherELAPage.getELAGropsRadioBtn().click()
        teacherELAPage.getCreateNwGrpBtn().click()
        teacherELAPage.getELAGroupNameTxtBox().type("rocky")
        teacherELAPage.getELAGroupCreateDescriptionTxtBox().type("blast")
        teacherELAPage.getELAGroupCreateAddStudentIcon().click()
        teacherELAPage.getELAGroupAddStudentBtn().eq(0).click()
        teacherELAPage.getELAGroupCreatedStudentDetails().should('be.visible')
        teacherELAPage.getELAGroupCreateGroupBtn().click()
        cy.wait(3000)
        teacherELAPage.getELACreateGrpLnkInRHS().click({ force: true })
        teacherELAPage.getELAGroupNameTxtBox().type("Bhai")
        teacherELAPage.getELAGroupCreateDescriptionTxtBox().type("blasting")
        teacherELAPage.getELAGroupCreateAddStudentIcon().click()
        teacherELAPage.getELAGroupAddStudentBtn().eq(0).click()
        teacherELAPage.getELAGroupCreatedStudentDetails().should('be.visible')
        teacherELAPage.getELAGroupCreateGroupBtn().click()
        teacherELAPage.getGroupCheckbxlst().eq(0).click()
        teacherELAPage.getGroupCheckbxlst().eq(6).click()
        teacherELAPage.getGroupAddedELAAssignBtn().click()
        // cy.contains("Successfully Assigned").should('be.visible')
        // teacherELAPage.getAssignELACloseIcn().click()


    })

    it("To verify that on clicking on ELA card, it's opening detailed view of assignment on the right panel/EL-4046/ES4046_02", function () {
        cy.wait(5000)
        cy.contains("Successfully Assigned")
        teacherELAPage.getAssignELACloseIcn().click()
        teacherELAPage.getELACardCreatedViewIcon().click()
        teacherELAPage.getELACardCreatedViewTableDetails().should('be.visible')
        teacherELAPage.getELACardCreatedViewPopupCloseIcon().click()
    })

    it("To verify that by default the latest added ELA card is displayed on the top/EL-4046/ES4046_03", function () {
        teacherELAPage.getELACardRecentlyCreatedTxt().eq(0).should('be.visible')
    })

    it("TO verify that “Chapter Name”, “added date”, total number of students in the class”, “remove button” and  “Preview” button is provided in ELA card/EL-4046/ES4046_04", function () {
        teacherELAPage.getELACardRecentlyCreatedTxt().should('be.visible')
        teacherELAPage.getELACardCreatedAddedDate().should('be.visible')
        teacherELAPage.getELACardCreatedAddedStudent().should('be.visible')
        teacherELAPage.getELACardCreatedViewIcon().should('be.visible')
        teacherELAPage.getElaDeleteIcon().should('be.visible')
    })

    it("To verify that when teacher click on “Preview” button  ELA questions pop-up page will open in right side pannel/EL-4046/ES4046_05", function () {
        teacherELAPage.getELACardCreatedViewIcon().click()
        teacherELAPage.getELACardCreatedViewTableDetails().should('be.visible')
        teacherELAPage.getELACardCreatedViewPopupCloseIcon().click()
    })

    it("To verifiy that ELA cards can be filtered on the basis of the “All, pending and Evaluated”/EL-4046/ES4046_06", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedAllDropdown().click()
        cy.wait(2000)
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedEvaluatedDropdown().click()
        cy.wait(2000)
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedPendingDropdown().click()
    })

    it("To verify that when teacher select All” option from the dropdown, all the pending and Evaluted tabs/EL-4046/ES4046_07", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedAllDropdown().click()
        teacherELAPage.getListELACardCreatedSubName().should('have.lengthOf.above', 1)
    })

    it("To verify that when teacher select “Pending” option, all the pending ELA that is yet to evaluate and can be removed as the evaluation is not yet submitted./EL-4046/ES4046_08", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedPendingDropdown().click()
        teacherELAPage.getELACardCreatedFinalSubmitBtn().should('be.disabled')
    })

    it("To verify that Remove ELA button is enabled on all pending cards so that user can be able to delete or edit previously assigned ELA’s/EL-4046/ES4046_09", function () {
        teacherELAPage.getElaDeleteIcon().should('not.be.disabled')
    })

    it("To verify that when teacher select Evaluated option ELA history will show the “evaluated” cards and dropdown", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedEvaluatedDropdown().click()
        //teacherELAPage.getELACardCreatedFinalSubmitBtn().should('not.be.disabled')

    })

    it("To verifiy thatEvaluated ELA cards can be filtered on the basis of the All Evaluated and Evaluate absentees/EL-4046/ES4046_11", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedPendingDropdown().click()
        teacherELAPage.getELACardEvaluatedDropdown().eq(1).click()
        teacherELAPage.getELACardEvaluatedDropdownValue().contains('Evaluate Absentees').click()
        teacherELAPage.getELACardEvaluatedAbsenteseTable().should('be.visible')
    })

    it("To verify that when teacher select Evaluated from evaluate dropdown, evaluated ELA cards is dispalyed/EL-4046/ES4046_12", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedPendingDropdown().click()
        teacherELAPage.getELACardEvaluatedDropdown().eq(1).click()
        teacherELAPage.getELACardEvaluatedDropdownValue().contains('Evaluated').click()
        teacherELAPage.getELAEvaluatedCard().should('be.visible')
    })

    // it.skip("To verify that when teacher select Evaluate absentees from evaluate dropdown, ELA evaluates absentees card will show the absent student list, with all the student/EL-4046/ES4046_13",function () {
    //     teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
    //     cy.get('[data-value="Evaluated"]').click()
    //     //teacherELAPage.getELACardEvaluatedDropdownValue().click()
    //     teacherELAPage.getELACardEvaluatedDropdown().eq(1).click()
    //     teacherELAPage.getELACardEvaluatedDropdownValue().contains('Evaluate Absentees').click()
    //     teacherELAPage.getELACardLst().each(($e1,index,$list)=>{
    //         const text = $e1.text()
    //         if(text.includes("निंगोल चाकौबा..")){
    //             cy.get('svg.Ela-img').eq(index).click()
    //         }
    //       })
    //     teacherELAPage.getELAEvaluatedCardMarkAbsentiesICon().should('be.visible')

    // })

    // it.skip("To verify that teacher can Unchck or deselect  the Mark absent check box and then evaluate the student/EL-4046/ES4046_14",function () {
    //     teacherELAPage.getELAEvaluatedCardMarkAbsentiesCheckBox().uncheck()
    //     teacherELAPage.getELAEvaluatedCardMarkAbsentiesCheckBox().uncheck().should('not.be.checked')
    //     teacherELAPage.getELAEvaluatedCardMarkAbsentiesCheckBox().check()
    //     teacherELAPage.getELAEvaluatedCardMarkAbsentiesCheckBox().check().should('be.checked')
    // })

    // it.skip("To verify that Submit button is enabled, After evaluating the absent students./EL-4046/ES4046_15",function () {
    //     teacherELAPage.getELACardCreatedFinalSubmitBtn().should('not.be.disabled')
    // })

    it("To verify that “Remove” ELA button will be disabled on the cards for evaluated ELA’s so that teacher is not able to delete or edit previously completed ELA’s/EL-4046/ES4046_16", function () {
        teacherELAPage.getELAEvalutionSheetDropdown().eq(0).click()
        teacherELAPage.getELACardCreatedEvaluatedDropdown().click()
        cy.wait(2000)
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Getting to know Pl..")) {
                teacherELAPage.getElaEvalutedDeleteIcon().eq(index).should('not.be.enabled')
            }
        })
    })

    it("To verify that teacher is able to view the ELA cards on clicking on ELA card/EL-4046/ES4046_17", function () {
        teacherELAPage.getElaEvalutedViewIcon().eq(0).click()
        teacherELAPage.getELACardCreatedViewTableDetails().should('be.visible')
        teacherELAPage.getELACardCreatedViewPopupCloseIcon().click()
    })

    it("To verify that rank is disbaled for already submitted ELA Card/EL-4046/ES4046_19", function () {
        teacherELAPage.getELACardEvaluatedDropdown().eq(1).click()
        teacherELAPage.getELACardEvaluatedDropdownValue().contains('Evaluated').click()
        teacherELAPage.getELACardCreatedDisabledRankQuestions().should('not.be.enabled')
    })

    it("TO verify that user is able to check the “Mark as complete” check box for the last topic of a chapter,/EL-3976/ES3976_01", function () {
        teacherELAPage.getELAMilestoneTab().click()
        cy.get('.mileStoneThemeToggSectTxt').click()
        cy.wait(1000)
        teacherELAPage.getProdMilestoneShowTopicBtn().click()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().check({ force: true })
        teacherELAPage.getELAMilestoneChechBx().should('be.checked')
        //cy.wait(1000)
        //teacherELAPage.getELAMilestoneCreatedCancelBtn().click()
        teacherELAPage.getELAMilestoneChechBx().uncheck({ force: true })
        cy.wait(2000)
        //teacherELAPage.getELAMilestoneChechBx().check()

    })
    it("To verify that when user Check  “Mark as complete” check box for the last topic of a chapter, ELA popup page is dispalyed or triggered/EL-3976/ES3976_02", function () {
        //teacherELAPage.getELAMilesstoneELAPopup().should('contain.text', 'Marked As Completed')
    })

    it("To verify that when user click on “Assign ELA” in ELA popup its navigating to “Extended Learning Assignment” page./EL-3976/ES3976_03", function () {
        teacherELAPage.getELAMilestoneCreatedAssignBtn().click()
        teacherELAPage.getELAPageHeader().should('be.visible')
        teacherELAPage.getMyClassImg().click()
        teacherELAPage.getMyClassRiseSubName().click({ force: true })
        teacherELAPage.getELAMilestoneTab().click()
        teacherELAPage.getELAMilestoneTab().click()
        cy.get('.mileStoneThemeToggSectTxt').click()
        cy.wait(1000)
        teacherELAPage.getProdMilestoneShowTopicBtn().click()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().uncheck({ force: true })
    })

    it("To verify that teacher is able to click on any filter and search for appropriate ELA’s to assign./EL-3976/ES3976_04", function () {
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().check()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneCreatedAssignBtn().click()
        teacherELAPage.getELAChapterDropdown().click()
        cy.wait(2000)
        teacherELAPage.getELAChapterDropdownValue().contains('Getting to know Plants').click()
    })

    it("To verify that teacher is able to view ELA's for all the “Chapters” under Top School library/EL-3976/ES3976_05", function () {
        teacherELAPage.getFilteredELAName().should('have.text', 'Getting to know Plants')
    })

    it("To verify that content type is pre-selected as ELA/EL-3976/ES3976_06", function () {
        teacherELAPage.getELAContentType().contains('ELA')
    })
    it("To verify that  content type dropdown is pre-selected an+d disabled under ELA page./EL-3976/ES3976_08", function () {
        teacherELAPage.getELAContentType().contains('ELA').should('not.be.enabled')
        teacherELAPage.getGradeContentType().should('not.be.enabled')
        teacherELAPage.getSubContentType().should('not.be.enabled')
    })

    it("To verify that user is able to Assign ELA from My Class Overview Tab/EL-3976/ES3976_09", function () {
        cy.go('back')
        teacherELAPage.getELAMilestoneTab().click()
        cy.get('.mileStoneThemeToggSectTxt').click()
        cy.wait(1000)
        teacherELAPage.getProdMilestoneShowTopicBtn().click()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().uncheck({ force: true })
        teacherELAPage.getELAMilestoneTab().click()
        teacherELAPage.getELAOverviewTab().click()
        teacherELAPage.getELAOverviewCheckBx().check()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneCreatedAssignBtn().click()
        cy.go('back')
        teacherELAPage.getAssessmentTab().click()
        teacherELAPage.getAssignmentBtn().click({ force: true })
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getELACardLst().contains('Fibre to Fabric..').click()
            }
        })
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getElaEvalutedDeleteIcon().eq(index).click({ force: true })
                cy.get('.MuiButton-contained').click()
            }
        })
        teacherELAPage.getAddELABtn().click()
        teacherELAPage.getFilteredELAName().each(($e1, index, $list) => {
            const elaNameTxt = $e1.text()
            if (elaNameTxt.includes('Fibre to Fabric')) {
                teacherELAPage.getOverviewViewELABtn().eq(index).click()
            }
        })
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        cy.wait(1000)
    })
    it("To verify that user is able to Assign ELA from My Class Milestones Tab/EL-3976/ES3976_10", function () {
        teacherELAPage.getELAAssignBtn().click()
        cy.wait(10000)
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Successfully Assigned');
        })
        cy.wait(15000)
        teacherELAPage.getElaPopupCancelBtn().click()
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getElaEvalutedDeleteIcon().eq(index).click({ force: true })
                cy.get('.MuiButton-contained').click()
                cy.wait(2000)
            }
        })
        teacherELAPage.getELAMilestoneTab().click()
        cy.get('.mileStoneThemeToggSectTxt').click()
        cy.wait(1000)
        teacherELAPage.getProdMilestoneShowTopicBtn().click()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().uncheck()
        cy.wait(1000)
        teacherELAPage.getELAMilestoneChechBx().check()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneCreatedAssignBtn().click()
        teacherELAPage.getFilteredELAName().each(($e1, index, $list) => {
            const elaNameTxt = $e1.text()
            if (elaNameTxt.includes('Fibre to Fabric')) {
                teacherELAPage.getOverviewViewELABtn().eq(index).click()
            }
        })
        teacherELAPage.getViewELAQuestionCheckBx().click({ multiple: true })
        cy.wait(1000)
        teacherELAPage.getELAAssignBtn().click({ force: true })
        cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Successfully Assigned');
        })
        teacherELAPage.getElaPopupCancelBtn().click()

        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getELACardLst().eq(index).click({ force: true })
            }
        })
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getElaEvalutedDeleteIcon().eq(index).click({ force: true })
                cy.wait(1000)
                cy.get('.MuiButton-contained').click()
            }
        })
        teacherELAPage.getELAMilestoneTab().click()
        //teacherELAPage.getELAMilestoneTab().click()
        cy.get('.mileStoneThemeToggSectTxt').click()
        cy.wait(1000)
        teacherELAPage.getProdMilestoneShowTopicBtn().click()
        cy.wait(2000)
        teacherELAPage.getELAMilestoneChechBx().uncheck({ force: true })
        teacherELAPage.getAssessmentTab().click()
        teacherELAPage.getAssignmentBtn().click({ force: true })
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getELACardLst().eq(index).click({ force: true })
            }
        })
        teacherELAPage.getELACardLst().each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Fibre to Fabric..")) {
                teacherELAPage.getElaEvalutedDeleteIcon().eq(index).click({ force: true })
                cy.wait(1000)
                cy.get('.MuiButton-contained').click()
            }
        })


    })
})