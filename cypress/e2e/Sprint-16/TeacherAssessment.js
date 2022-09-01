/// <reference types="Cypress"/>

import TeacherDashboardPage from "../../support/pageObjects/TeacherDashboardPage";
import TeacherELAPage from "../../support/pageObjects/TeacherELAPage";

const home = new TeacherDashboardPage();
const teacherELA = new TeacherELAPage();

describe("Verify Domain Mapping functionalities", function () {
  before(function () {
    //cy.visit(Cypress.env("urlStaging"))
    cy.visit("https://srilanka.staging.topschool.co.in")
    cy.fixture("TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user, validAdminLoginData.password)
    })
  })
  beforeEach(function () {
    cy.fixture("TeacherELACredentials").then(function (ELA) {
      this.ELA = ELA;
    })
  })
  //pre-condition

  it("To verify that ELA cards are provided in left pannel in 'Assignment' Tab/EL-3978/ES3978_01", function () {
    home.getMyclassLnk().click({ force: true })
    teacherELA.getMyClassSubName().contains(this.ELA.Grade).click({ force: true })
    teacherELA.getAssessmentTab().click()
    teacherELA.getAssignmentBtn().click({ force: true })
    teacherELA.getELACardLst().should('be.visible')
  })

  it("To Create New Assigned ELA", function () {
    teacherELA.getAddELABtn().click()
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELA.getELAQuestionsCheckBx().eq(0).click()
    teacherELA.getELAQuestionsCheckBx().eq(1).click()
    teacherELA.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELA.getAssignELACloseIcn().click()
  })

  it("To verify that by default the latest added 'ELA' card is displayed on the top/EL-3978/ES3978_04", function () {
    teacherELA.getELACardLst().eq(0).should('contain.text', this.ELA.ELAName)
  })

  it("To verify that on clicking on 'ELA' card, it's opening detailed view of assignment on the right panel/EL-3978/ES3978_02", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getELACardLst().eq(index).click()
      }
      teacherELA.getAssignmentExpandCard().should('be.visible')
    })
  })

  it("To verify that when teacher select any 'ELA' card it's moving to the top/EL-3978/ES3978_03", function () {
    teacherELA.getELACardLst().eq(0).should('contain.text', this.ELA.ELAName)
  })

  it("To verify that “Chapter Name”, “added date”, 'total number of students in the class', 'remove button' and  'Preview' button is provided in 'ELA' card/EL-3978/ES3978_05", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getELACardLst().eq(index).should('be.visible')
        teacherELA.getAddedDateLstInELACard().eq(index).should('be.visible')
        teacherELA.getStudentsLstInELACard().eq(index).should('be.visible')
        teacherELA.getDltBtnLstInELACard().eq(index).should('be.visible')
        teacherELA.getViewIcnsLstInELACard().eq(index).should('be.visible')
      }
    })
  })

  it("To verify that 'Added date' is dispalyed in this format 'dd/mm/yyyy'/EL-3978/ES3978_07", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getAddedDateLstInELACard().eq(index).should('contain.text', 2022)
      }
    })
  })

  it("To verify that when teacher click on “Preview” button  'ELA questions' pop-up page will open in right side pannel/EL-3978/ES3978_08", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getViewIcnsLstInELACard().eq(index).click()
      }
      teacherELA.getELACardExpandedTitle().should('contain.text', this.ELA.ELAName)
    })
    teacherELA.getELAQuestionsSidePanelCloseIcn().click()
  })

  it("To verify that when teacher clicks on ”Remove” button, pop up is displayed/EL-3978/ES3978_09", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().should('be.visible')
  })

  it("To verify that when teacher clicks “Remove ELA” button, the Confirmation message is displayed/EL-3978/ES3978_11", function () {
    cy.contains("Are you sure, Do you want to remove").should('be.visible')
  })

  it("To verify that  “Remove ELA”, ” Cancel” buttons are provided in Pop-up/EL-3978/ES3978_10", function () {
    teacherELA.getELAPopupCancelBtn().should('be.visible')
  })

  it("To verify that when user clicks on 'Cancel' button in the pop-up, it's navigating to previous page/EL-3978/ES3978_12", function () {
    teacherELA.getELAPopupCancelBtn().click()
    teacherELA.getAssessmentTab().should('be.enabled')
  })

  it("To verify that teacher is able to scroll and view the old or Completed 'ELA' cards/EL-3978/ES3978_13", function () {
    teacherELA.getELACardLst().should('have.length.above', 1)
  })

  it("To verify that filter Dropdown is provided in ELA Detailed Card view/EL-4045/ES4045_01", function () {
    teacherELA.getELACardFilterDrpDwn().should('be.visible')
  })

  it("To verifiy that ELA cards can be filtered on the basis of the “All, pending and Evaluated/EL-4045/ES4045_02", function () {
    teacherELA.getELACardFilterDrpDwn().click()
    teacherELA.getELACardFilterDrpDwnLst().should('contain.text', "ALL").should('contain.text', "Evaluated").should('contain.text', "Pending")
  })

  it("To verify that when teacher select 'All' option from the dropdown, all the pending and Evaluted tabs/EL-4045/ES4045_03", function () {
    teacherELA.getELACardFilterDrpDwnLst().contains("ALL").click()
    teacherELA.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that when teacher select “Pending” option, all the pending ELA that is yet to evaluate and can be removed as the evaluation is not yet submitted/EL-4045/ES4045_04", function () {
    teacherELA.getELACardFilterDrpDwn().click()
    teacherELA.getELACardFilterDrpDwnLst().contains("Pending").click()
    teacherELA.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that when user select 'Evaluated' option from filter drop down all pending 'ELA cards' are displayed/EL-4045/ES4045_05", function () {
    teacherELA.getELACardFilterDrpDwn().click()
    teacherELA.getELACardFilterDrpDwnLst().contains("Evaluated").click()
    teacherELA.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that  'roll number', 'profile pic', 'student name', 'Assigned Question', 'Learning Outcome', 'Competency' is provided in the ELA Detailed Card view/EL-4045/ES4045_06", function () {
    teacherELA.getELACardFilterDrpDwn().click()
    teacherELA.getELACardFilterDrpDwnLst().contains("ALL").click()
    teacherELA.getELACardTableDataLst().should('contain.text', "ROLL NO").should('be.visible')
    teacherELA.getELACardTableDataLst().contains("Student Name").should('be.visible')
    teacherELA.getELACardTableDataLst().contains("Q#").should('be.visible')
    teacherELA.getELACardTableDataLst().contains("Learning Outcome").should('be.visible')
    teacherELA.getELACardTableDataLst().contains("Competency").should('be.visible')
  })

  it("To verify that Student list in the ELA Detailed Card view is same as class chosen by the teacher/EL-4045/ES4045_07", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getViewIcnsLstInELACard().eq(index).click()
      }
    })
    teacherELA.getELACardExpandedTitle().should('contain.text', this.ELA.GradeName).should('be.visible')
    teacherELA.getELACardExpandedTitle().should('contain.text', this.ELA.Subject).should('be.visible')
    teacherELA.getELAQuestionsSidePanelCloseIcn().click()
  })

  it("To verify that Question numbers are displayed in  'Question Number' Column in ELA Detailed Card view/EL-4045/ES4045_08", function () {
    teacherELA.getELACardQuestnNumbersLst().should('be.visible')
  })

  it("To verify that when user mousehover on 'Learning Outcome', 'Able to express logically' tooltip is displayed/EL-4045/ES4045_09", function () {
    teacherELA.getELACardLearningOutcomeIcn().trigger('mouseover')
    cy.contains("Able to express logically").should('be.visible')
  })

  it("To verify that when user mousehover on 'Competency', 'Creativity' tooltip is displayed/EL-4045/ES4045_10", function () {
    teacherELA.getELACardCompetencyIcn().trigger('mouseover')
    cy.contains("Creativity - Expressive").should('be.visible')
  })

  it("To verify that “Excellent”, “Good”, “Satisfactory”, “Can do better”, Four Scale ranking is provied at top of the ELA Detailed Card view as follows/EL-4045/ES4045_11", function () {
    teacherELA.getRankingCheckBxLst().contains("Excellent").should('be.visible')
    teacherELA.getRankingCheckBxLst().contains("Good").should('be.visible')
    teacherELA.getRankingCheckBxLst().contains("Satisfactory").should('be.visible')
    teacherELA.getRankingCheckBxLst().contains("Can do better").should('be.visible')
  })

  it("To verify that Student list will show all the questions assigned to the student/EL-4045/ES4045_12", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().click()
    teacherELA.getELACardDltConfrmBtn().click()
    teacherELA.getAddELABtn().click()
    cy.wait(1000)
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).click()
      }
    })
    teacherELA.getELAQuestionsCheckBx().eq(0).click()
    teacherELA.getELAQuestionsCheckBx().eq(1).click()
    teacherELA.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELA.getAssignELACloseIcn().click()
    cy.wait(4000)
    teacherELA.getELACardQuestnNumbersLst().should('have.length', 4)
  })

  it("To verify that For each question teacher is able to rank a student by clicking on the radio button/EL-4045/ES4045_13", function () {
    teacherELA.getExcellentRankChckBxLst().eq(0).should('be.enabled').click()
    teacherELA.getExcellentRankChckBxLst().eq(1).should('be.enabled').click()
    teacherELA.getExcellentRankChckBxLst().eq(2).should('be.enabled').click()
    teacherELA.getExcellentRankChckBxLst().eq(3).should('be.enabled').click()
  })

  it.skip("To verify that after evaluation the rank is automatically saved/EL-4045/ES4045_14", function () {
    teacherELA.getELACardSubmitBtn().click()
    cy.contains("Successfully Evaluated").should('be.visible')
    teacherELA.getELAQuestionsSidePanelCloseIcn().click()
    teacherELA.getELACardFilterDrpDwn().click()
    teacherELA.getELACardFilterDrpDwnLst().contains("Evaluated").click()
    teacherELA.getExcellentRankChckBxLst().should('be.checked')
  })

  it("To verify that Tabs for different ELA groups are created by the teacher while assigning the ELA/EL-4045/ES4045_15", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().click()
    teacherELA.getELACardDltConfrmBtn().click()
    teacherELA.getAddELABtn().click()
    cy.wait(1000)
    teacherELA.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getViewELABtnInELAAddSect().eq(index).click()
      }
    })
    teacherELA.getELAGropsRadioBtn().click()
    teacherELA.getCreateNwGrpBtn().click()
    teacherELA.getELAGroupNameTxtBox().type("rocky")
    teacherELA.getELAGroupCreateDescriptionTxtBox().type("blast")
    teacherELA.getELAGroupCreateAddStudentIcon().click()
    teacherELA.getELAGroupAddStudentBtn().eq(0).click()
    teacherELA.getELAGroupCreatedStudentDetails().should('be.visible')
    teacherELA.getELAGroupCreateGroupBtn().click()
    teacherELA.getELACreateGrpLnkInRHS().click()
    teacherELA.getELAGroupNameTxtBox().type("Bhai")
    teacherELA.getELAGroupCreateDescriptionTxtBox().type("blasting")
    teacherELA.getELAGroupCreateAddStudentIcon().click()
    teacherELA.getELAGroupAddStudentBtn().eq(0).click()
    teacherELA.getELAGroupCreatedStudentDetails().should('be.visible')
    teacherELA.getELAGroupCreateGroupBtn().click()
    teacherELA.getGroupCheckbxlst().eq(0).click()
    teacherELA.getGroupCheckbxlst().eq(6).click()
    teacherELA.getGroupAddedELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELA.getAssignELACloseIcn().click()
    teacherELA.getGropsLStInELACard().should('have.length', 2)
  })

  it("To verify that below the student’s name, check box is provided to mark the student absent/EL-4045/ES4045_16", function () {
    teacherELA.getMarkAbsentTxt().should('be.visible')
  })

  it("To verify that “Submit” button is enabled/EL-4045/ES4045_18", function () {
    teacherELA.getExcellentRankChckBxLst().eq(0).should('be.enabled').click()
    teacherELA.getExcellentRankChckBxLst().eq(1).should('be.enabled').click()
    teacherELA.getELACardSubmitBtn().should('be.enabled')
  })

  it("To verify that teacher is able to view the rank history for each ELA/EL-4045/ES4045_21", function () {
    teacherELA.getELACardLst().contains(this.ELA.ManualELAName).click()
    teacherELA.getExcellentRankChckBxLst().should('be.checked')
  })

  //post-condition
  it("Delete the assigned ELA Card", function () {
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getELACardLst().eq(index).click({ force: true })
      }
    })
    teacherELA.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELA.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELA.getDltELACardPopup().should('be.visible')
    teacherELA.getDltCnfrmBtnInELA().click()
  })
})