const loginPage = require('../../support/pageObjects/ERP/LoginPage')
const adminDashboardPage = require('../../support/pageObjects/ERP/AdminDashboardPage')
const feeSetUpOnBoardingPage = require('../../support/pageObjects/ERP/FeeSetUpOnBoardingPage')
const discountMasterOnBoardingPage = require('../../support/pageObjects/ERP/DiscountMasterOnBoardingPage')
const dayjs = require('dayjs')

describe("Verify Discount Master OnBoarding functionalities", function () {

  before(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(Cypress.env("urlPreSetupERP"))
    cy.fixture("ERP/LoginCredentials").then(function (loginCredentials) {
      loginPage.login(loginCredentials.adminUsernamePreSetUp, loginCredentials.adminPassword)
    })
    cy.saveLocalStorage();
  })

  beforeEach(function () {
    cy.restoreLocalStorage();
    cy.fixture("ERP/PenaltyMasterCredentials").as("PenaltyMaster")
    cy.viewport(1920,1080)
  })

  it("TC_001 - Validate user is able to create a discount master in fresh page", function () {
    adminDashboardPage.getSideMenuFeeManagementIcon().click()
    cy.wait(1000)
    cy.get('body').then(($el) => {
        if ($el.find('[class="popper-sub-list"]').length > 0) {
          adminDashboardPage.getFeeSetupLink().click()
        }
    })
    cy.wait(1500)
    // feeSetUpOnBoardingPage.getFeeStructureContinueBtn().click()
    // cy.wait(1000)
    // feeSetUpOnBoardingPage.getFeeStructureContinueBtn().click()
    // cy.wait(1000)
    cy.get('div.MuiGrid-container div.MuiGrid-item').eq(3).click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDefaultTxtInDiscountMaster().should('have.text'," No Discount Master Found ")
    discountMasterOnBoardingPage.getSetupDiscountMasters().should('be.visible')
    discountMasterOnBoardingPage.getSetupDiscountMasters().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
    and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
    and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
    discountMasterOnBoardingPage.getGeneralCheckBxLst().should('have.length',2)
    discountMasterOnBoardingPage.getDiscountAmountTxtFld().click().type(1000)
    discountMasterOnBoardingPage.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
    and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
    discountMasterOnBoardingPage.getSaveBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveAndAddNewBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("New Discount Created").should('be.visible')
    cy.wait(1000)
  })

  it("TC_002 - Validate user is able to create a discount master", function () {
    cy.wait(1000)
    cy.uncaughtException()
    discountMasterOnBoardingPage.getDiscountMasterAddNewBtn().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
    and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
    and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
    discountMasterOnBoardingPage.getGeneralCheckBxLst().should('have.length',2)
    discountMasterOnBoardingPage.getDiscountAmountTxtFld().click().type(1000)
    discountMasterOnBoardingPage.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
    and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
    discountMasterOnBoardingPage.getSaveBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveAndAddNewBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("New Discount Created").should('be.visible')
    cy.wait(3000)
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=>{
      const text = $e1.text()
      if(text.includes("Basic")){
        discountMasterOnBoardingPage.getDiscountTypeLst().eq(index).should('have.text',"Quota")
        discountMasterOnBoardingPage.getSubTypeLst().eq(index).should('have.text',"General")
        discountMasterOnBoardingPage.getEditIconsLst().eq(index).should('be.visible')
        discountMasterOnBoardingPage.getDeleteIconsLst().eq(index).should('be.visible')
      }
  })
  })

  it("TC_003 - Validate user is able to create a discount master after click on Save and Add Button", function () {
    cy.wait(3000)
    discountMasterOnBoardingPage.getDiscountMasterAddNewBtn().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
    and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
    and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
    discountMasterOnBoardingPage.getGeneralCheckBxLst().should('have.length',2)
    discountMasterOnBoardingPage.getDiscountAmountTxtFld().click().type(1000)
    discountMasterOnBoardingPage.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
    and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
    discountMasterOnBoardingPage.getSaveBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveAndAddNewBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().should('be.visible')
    discountMasterOnBoardingPage.verifyDisountMasterFunctionalitiesWithSaveAndAdd()
  })

  it("TC_004 - Validate user is able to cancel a new  discount master", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountMasterAddNewBtn().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
    and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
    and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
    discountMasterOnBoardingPage.getGeneralCheckBxLst().should('have.length',2)
    discountMasterOnBoardingPage.getDiscountAmountTxtFld().click().type(1000)
    discountMasterOnBoardingPage.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
    and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
    discountMasterOnBoardingPage.getSaveBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveAndAddNewBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().click()
    discountMasterOnBoardingPage.getAddDiscountPopup().should('not.exist')
  })

  it("TC_008 Validate user is able to delete Discount master", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=> {
      const txt = $e1.text()
      if(txt === "Basic"){
        discountMasterOnBoardingPage.getDicountNameDeleteIconLst().eq(0).click()
          cy.contains("Delete Basic ?").should('be.visible')
          discountMasterOnBoardingPage.getDiscountNameDltCnfirmBtn().click()
          cy.contains("Basic has been deleted from discount master.").should('be.visible')
          discountMasterOnBoardingPage.getCloseDiscountDeletedPopup().click()
          cy.wait(1000)
      }
  })
  })

  it("TC_005 Validate user is able to create a Quota discount with custom quota", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDefaultTxtInDiscountMaster().should('have.text'," No Discount Master Found ")
    discountMasterOnBoardingPage.getSetupDiscountMasters().should('be.visible')
    discountMasterOnBoardingPage.getSetupDiscountMasters().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().should('contain.text',"Quota").and('contain.text',"Sibling").
    and('contain.text',"Scholarship").and('contain.text',"Employees Child Discount").and('contain.text',"Children with special needs").
    and('contain.text',"Economically weaker section").and('contain.text',"Upfront Payment").and('contain.text',"Other")
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Quota").click()
    discountMasterOnBoardingPage.getGeneralCheckBxLst().should('have.length',2)
    discountMasterOnBoardingPage.getDiscountAmountTxtFld().click().type(1000)
    discountMasterOnBoardingPage.getCheckBxNameLst().should('contain.text',"General").and('contain.text',"Flat Amount").and('contain.text',"Percentage").
    and('contain.text',"SC").and('contain.text',"ST").and('contain.text',"OBC")
    discountMasterOnBoardingPage.getSaveBtn().should('be.visible')
    discountMasterOnBoardingPage.getSaveAndAddNewBtn().should('be.visible')
    discountMasterOnBoardingPage.getCancelBtn().should('be.visible')
    discountMasterOnBoardingPage.getAddQuotaBtn().click()
    discountMasterOnBoardingPage.getQuotaNameFld().type("Sports")
    discountMasterOnBoardingPage.getDiscountAmountTxtFldFrCustom().type("3000")
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("New Discount Created").should('be.visible')
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=> {
        const txt = $e1.text()
        if(txt === "Basic"){
          discountMasterOnBoardingPage.getCustomQuotaNotifyIconLst().eq(0).find('span').should('have.text',"+1")
        }
    })
  })

  it("TC_007 Validate user is able to edit discount master",function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=> {
      const txt = $e1.text()
      if(txt === "Basic"){
        discountMasterOnBoardingPage.getDicountNameEditIconLst().eq(0).click()
        return false;
      }
    })
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().clear()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("love")
    cy.wait(1000)
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("Discount details updated successfully").should('be.visible')
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameLst().should('contain.text',"love")
  })

  it("TC_006 Validate user is able to create a discount master with scholorship",function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountMasterAddNewBtn().click()
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameBtn().click().type("Basic")
    discountMasterOnBoardingPage.getDiscountTypeDrpDwn().trigger('mouseover').click({force:true})
    discountMasterOnBoardingPage.getDiscountTypeLstInDiscountTypeDrpDwn().contains("Scholarship").click()
    discountMasterOnBoardingPage.getNewStudentTabInScholarship().should('be.visible').and('be.enabled')
    discountMasterOnBoardingPage.getExistingStudentTabInScholarship().should('be.visible').and('be.enabled')
    discountMasterOnBoardingPage.getDuplicateFrmExistingStudentsCheckBx().check()
    discountMasterOnBoardingPage.getExistingStudentTabInScholarship().click()
    discountMasterOnBoardingPage.getDuplicateFrmNewStudentsCheckBx().check()
    discountMasterOnBoardingPage.getNewStudentTabInScholarship().click()
    discountMasterOnBoardingPage.getAddMarksRange().should('be.visible').click()
    //discountMasterOnBoardingPage.getMarksRangeMinSlider().should('be.visible')
    cy.wait(1000)
    discountMasterOnBoardingPage.getAddMarksRange().should('be.visible').click()
    discountMasterOnBoardingPage.getScholarshipAmountTxtFld1().type('500')
    discountMasterOnBoardingPage.getScholarshipAmountTxtFld2().type('500')
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("Marks range should not overlap.").should('be.visible')
    discountMasterOnBoardingPage.getDeleteMarksRangeDeleteBtnLst().last().click()
    discountMasterOnBoardingPage.getSaveBtn().click()
    cy.contains("New Discount Created").should('be.visible')
    cy.wait(3000)
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=>{
      const text = $e1.text()
      if(text.includes("Basic")){
        discountMasterOnBoardingPage.getDiscountTypeLst().eq(index).should('have.text',"Scholarship")
        discountMasterOnBoardingPage.getSubTypeLst().eq(index).should('have.text',"New")
      }
    })
  })

  it("TC_009 Validate user is able to sort the record by discount name",function () {
    discountMasterOnBoardingPage.getDiscountNameSortIcn().click()
    discountMasterOnBoardingPage.getDiscountNameLst().eq(0).should('have.text',"love")
  })

  it("TC_010 Validate user is able to sort the record by discount type",function () {
    discountMasterOnBoardingPage.getDiscountTypeSortIcn().click()
    discountMasterOnBoardingPage.getDiscountNameLst().eq(0).should('have.text',"Basic")
  })

  //Post-condition

  it("To Delete all the discounts", function () {
    cy.wait(1000)
    discountMasterOnBoardingPage.getDiscountNameLst().each(($e1,index,$list)=> {
      if(index<$list.length){
        discountMasterOnBoardingPage.getDicountNameDeleteIconLst().eq(0).click()
          cy.contains("Delete").should('be.visible')
          discountMasterOnBoardingPage.getDiscountNameDltCnfirmBtn().click()
          cy.contains("has been deleted from discount master.").should('be.visible')
          discountMasterOnBoardingPage.getCloseDiscountDeletedPopup().click()
          cy.wait(1000)
      }
    })
  })

})