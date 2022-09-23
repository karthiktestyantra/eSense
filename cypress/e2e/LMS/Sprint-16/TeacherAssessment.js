const teacherDashboardPage = require("../../../support/pageObjects/LMS-2/TeacherDashboardPage")
const teacherELAPage = require("../../../support/pageObjects/LMS-2/TeacherELAPage")

describe("Verify techer assessment functionalities", function () {

  before(function () {
    cy.visit(Cypress.env("urlQA"))
    cy.fixture("LMS/TeacherLoginCredentials").then(function (validAdminLoginData) {
      cy.TeacherPostSetupLogin(validAdminLoginData.user, validAdminLoginData.password)
    })
  })

  beforeEach(function () {
    cy.fixture("LMS/TeacherELACredentials").as("ELA")
  })

  //pre-condition
  it("To verify that ELA cards are provided in left pannel in 'Assignment' Tab/EL-3978/ES3978_01", function () {
    teacherDashboardPage.getMyclassLnk().click({ force: true })
    teacherELAPage.getMyClassSubName().contains(this.ELA.Grade).click({ force: true })
    teacherELAPage.getAssessmentTab().click()
    teacherELAPage.getAssignmentBtn().click({ force: true })
    teacherELAPage.getELACardLst().should('be.visible')
  })

  it("To Create New Assigned ELA", function () {
    teacherELAPage.getAddELABtn().click()
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getViewELABtnInELAAddSect().eq(index).should('be.enabled').click()
      }
    })
    teacherELAPage.getELAQuestionsCheckBx().eq(0).click()
    teacherELAPage.getELAQuestionsCheckBx().eq(1).click()
    teacherELAPage.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELAPage.getAssignELACloseIcn().click()
  })

  it("To verify that by default the latest added 'ELA' card is displayed on the top/EL-3978/ES3978_04", function () {
    teacherELAPage.getELACardLst().eq(0).should('contain.text', this.ELA.ELAName)
  })

  it("To verify that on clicking on 'ELA' card, it's opening detailed view of assignment on the right panel/EL-3978/ES3978_02", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getELACardLst().eq(index).click()
      }
      teacherELAPage.getAssignmentExpandCard().should('be.visible')
    })
  })

  it("To verify that when teacher select any 'ELA' card it's moving to the top/EL-3978/ES3978_03", function () {
    teacherELAPage.getELACardLst().eq(0).should('contain.text', this.ELA.ELAName)
  })

  it("To verify that “Chapter Name”, “added date”, 'total number of students in the class', 'remove button' and  'Preview' button is provided in 'ELA' card/EL-3978/ES3978_05", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getELACardLst().eq(index).should('be.visible')
        teacherELAPage.getAddedDateLstInELACard().eq(index).should('be.visible')
        teacherELAPage.getStudentsLstInELACard().eq(index).should('be.visible')
        teacherELAPage.getDltBtnLstInELACard().eq(index).should('be.visible')
        teacherELAPage.getViewIcnsLstInELACard().eq(index).should('be.visible')
      }
    })
  })

  it("To verify that 'Added date' is dispalyed in this format 'dd/mm/yyyy'/EL-3978/ES3978_07", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getAddedDateLstInELACard().eq(index).should('contain.text', 2022)
      }
    })
  })

  it("To verify that when teacher click on “Preview” button  'ELA questions' pop-up page will open in right side pannel/EL-3978/ES3978_08", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getViewIcnsLstInELACard().eq(index).click()
      }
      teacherELAPage.getELACardExpandedTitle().should('contain.text', this.ELA.ELAName)
    })
    teacherELAPage.getELAQuestionsSidePanelCloseIcn().click()
  })

  it("To verify that when teacher clicks on ”Remove” button, pop up is displayed/EL-3978/ES3978_09", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().should('be.visible')
  })

  it("To verify that when teacher clicks “Remove ELA” button, the Confirmation message is displayed/EL-3978/ES3978_11", function () {
    cy.contains("Are you sure, Do you want to remove").should('be.visible')
  })

  it("To verify that  “Remove ELA”, ” Cancel” buttons are provided in Pop-up/EL-3978/ES3978_10", function () {
    teacherELAPage.getELAPopupCancelBtn().should('be.visible')
  })

  it("To verify that when user clicks on 'Cancel' button in the pop-up, it's navigating to previous page/EL-3978/ES3978_12", function () {
    teacherELAPage.getELAPopupCancelBtn().click()
    teacherELAPage.getAssessmentTab().should('be.enabled')
  })

  it("To verify that teacher is able to scroll and view the old or Completed 'ELA' cards/EL-3978/ES3978_13", function () {
    teacherELAPage.getELACardLst().should('have.length.above', 1)
  })

  it("To verify that filter Dropdown is provided in ELA Detailed Card view/EL-4045/ES4045_01", function () {
    teacherELAPage.getELACardFilterDrpDwn().should('be.visible')
  })

  it("To verifiy that ELA cards can be filtered on the basis of the “All, pending and Evaluated/EL-4045/ES4045_02", function () {
    teacherELAPage.getELACardFilterDrpDwn().click()
    teacherELAPage.getELACardFilterDrpDwnLst().should('contain.text', "ALL").should('contain.text', "Evaluated").should('contain.text', "Pending")
  })

  it("To verify that when teacher select 'All' option from the dropdown, all the pending and Evaluted tabs/EL-4045/ES4045_03", function () {
    teacherELAPage.getELACardFilterDrpDwnLst().contains("ALL").click()
    teacherELAPage.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that when teacher select “Pending” option, all the pending ELA that is yet to evaluate and can be removed as the evaluation is not yet submitted/EL-4045/ES4045_04", function () {
    teacherELAPage.getELACardFilterDrpDwn().click()
    teacherELAPage.getELACardFilterDrpDwnLst().contains("Pending").click()
    teacherELAPage.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that when user select 'Evaluated' option from filter drop down all pending 'ELA cards' are displayed/EL-4045/ES4045_05", function () {
    teacherELAPage.getELACardFilterDrpDwn().click()
    teacherELAPage.getELACardFilterDrpDwnLst().contains("Evaluated").click()
    teacherELAPage.getAssignmentExpandCard().should('be.visible')
  })

  it("To verify that  'roll number', 'profile pic', 'student name', 'Assigned Question', 'Learning Outcome', 'Competency' is provided in the ELA Detailed Card view/EL-4045/ES4045_06", function () {
    teacherELAPage.getELACardFilterDrpDwn().click()
    teacherELAPage.getELACardFilterDrpDwnLst().contains("ALL").click()
    teacherELAPage.getELACardTableDataLst().should('contain.text', "ROLL NO").should('be.visible')
    teacherELAPage.getELACardTableDataLst().contains("Student Name").should('be.visible')
    teacherELAPage.getELACardTableDataLst().contains("Q#").should('be.visible')
    teacherELAPage.getELACardTableDataLst().contains("Learning Outcome").should('be.visible')
    teacherELAPage.getELACardTableDataLst().contains("Competency").should('be.visible')
  })

  it("To verify that Student list in the ELA Detailed Card view is same as class chosen by the teacher/EL-4045/ES4045_07", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getViewIcnsLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getELACardExpandedTitle().should('contain.text', this.ELA.GradeName).should('be.visible')
    teacherELAPage.getELACardExpandedTitle().should('contain.text', this.ELA.Subject).should('be.visible')
    teacherELAPage.getELAQuestionsSidePanelCloseIcn().click()
  })

  it("To verify that Question numbers are displayed in  'Question Number' Column in ELA Detailed Card view/EL-4045/ES4045_08", function () {
    teacherELAPage.getELACardQuestnNumbersLst().should('be.visible')
  })

  it("To verify that when user mousehover on 'Learning Outcome', 'Able to express logically' tooltip is displayed/EL-4045/ES4045_09", function () {
    teacherELAPage.getELACardLearningOutcomeIcn().trigger('mouseover')
    cy.contains("Able to express logically").should('be.visible')
  })

  it("To verify that when user mousehover on 'Competency', 'Creativity' tooltip is displayed/EL-4045/ES4045_10", function () {
    teacherELAPage.getELACardCompetencyIcn().trigger('mouseover')
    cy.contains("Creativity - Expressive").should('be.visible')
  })

  it("To verify that “Excellent”, “Good”, “Satisfactory”, “Can do better”, Four Scale ranking is provied at top of the ELA Detailed Card view as follows/EL-4045/ES4045_11", function () {
    teacherELAPage.getRankingCheckBxLst().contains("Excellent").should('be.visible')
    teacherELAPage.getRankingCheckBxLst().contains("Good").should('be.visible')
    teacherELAPage.getRankingCheckBxLst().contains("Satisfactory").should('be.visible')
    teacherELAPage.getRankingCheckBxLst().contains("Can do better").should('be.visible')
  })

  it("To verify that Student list will show all the questions assigned to the student/EL-4045/ES4045_12", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().click()
    teacherELAPage.getELACardDltConfrmBtn().click()
    teacherELAPage.getAddELABtn().click()
    cy.wait(1000)
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getViewELABtnInELAAddSect().eq(index).click()
      }
    })
    teacherELAPage.getELAQuestionsCheckBx().eq(0).click()
    teacherELAPage.getELAQuestionsCheckBx().eq(1).click()
    teacherELAPage.getELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELAPage.getAssignELACloseIcn().click()
    cy.wait(4000)
    teacherELAPage.getELACardQuestnNumbersLst().should('have.length', 4)
  })

  it("To verify that For each question teacher is able to rank a student by clicking on the radio button/EL-4045/ES4045_13", function () {
    teacherELAPage.getExcellentRankChckBxLst().eq(0).should('be.enabled').click()
    teacherELAPage.getExcellentRankChckBxLst().eq(1).should('be.enabled').click()
    teacherELAPage.getExcellentRankChckBxLst().eq(2).should('be.enabled').click()
    teacherELAPage.getExcellentRankChckBxLst().eq(3).should('be.enabled').click()
  })

  it.skip("To verify that after evaluation the rank is automatically saved/EL-4045/ES4045_14", function () {
    teacherELAPage.getELACardSubmitBtn().click()
    cy.contains("Successfully Evaluated").should('be.visible')
    teacherELAPage.getELAQuestionsSidePanelCloseIcn().click()
    teacherELAPage.getELACardFilterDrpDwn().click()
    teacherELAPage.getELACardFilterDrpDwnLst().contains("Evaluated").click()
    teacherELAPage.getExcellentRankChckBxLst().should('be.checked')
  })

  it("To verify that Tabs for different ELA groups are created by the teacher while assigning the ELA/EL-4045/ES4045_15", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().click()
    teacherELAPage.getELACardDltConfrmBtn().click()
    teacherELAPage.getAddELABtn().click()
    cy.wait(1000)
    teacherELAPage.getELATitleLstInAddELASect().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
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
    teacherELAPage.getELACreateGrpLnkInRHS().click()
    teacherELAPage.getELAGroupNameTxtBox().type("Bhai")
    teacherELAPage.getELAGroupCreateDescriptionTxtBox().type("blasting")
    teacherELAPage.getELAGroupCreateAddStudentIcon().click()
    teacherELAPage.getELAGroupAddStudentBtn().eq(0).click()
    teacherELAPage.getELAGroupCreatedStudentDetails().should('be.visible')
    teacherELAPage.getELAGroupCreateGroupBtn().click()
    teacherELAPage.getGroupCheckbxlst().eq(0).click()
    teacherELAPage.getGroupCheckbxlst().eq(6).click()
    teacherELAPage.getGroupAddedELAAssignBtn().click()
    cy.contains("Successfully Assigned").should('be.visible')
    teacherELAPage.getAssignELACloseIcn().click()
    teacherELAPage.getGropsLStInELACard().should('have.length', 2)
  })

  it("To verify that below the student’s name, check box is provided to mark the student absent/EL-4045/ES4045_16", function () {
    teacherELAPage.getMarkAbsentTxt().should('be.visible')
  })

  it("To verify that “Submit” button is enabled/EL-4045/ES4045_18", function () {
    teacherELAPage.getExcellentRankChckBxLst().eq(0).should('be.enabled').click()
    teacherELAPage.getExcellentRankChckBxLst().eq(1).should('be.enabled').click()
    teacherELAPage.getELACardSubmitBtn().should('be.enabled')
  })

  it("To verify that teacher is able to view the rank history for each ELA/EL-4045/ES4045_21", function () {
    teacherELAPage.getELACardLst().contains(this.ELA.ManualELAName).click()
    teacherELAPage.getExcellentRankChckBxLst().should('be.checked')
  })

  //post-condition
  it("Delete the assigned ELA Card", function () {
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getELACardLst().eq(index).click({ force: true })
      }
    })
    teacherELAPage.getELACardLst().each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes(this.ELA.ELAName)) {
        teacherELAPage.getDltBtnLstInELACard().eq(index).click()
      }
    })
    teacherELAPage.getDltELACardPopup().should('be.visible')
    teacherELAPage.getDltCnfrmBtnInELA().click()
  })
})