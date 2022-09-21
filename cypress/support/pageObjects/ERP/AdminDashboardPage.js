class AdminDashboardPage {

    getSideMenuFeeManagementIcon() {
        return cy.xpath('//div[@class="side-nav-icon"]/img[contains(@src,"feeManag")]')
    }

    getFeeSetupLink() {
        return cy.xpath('//div[text()="Fee Setup"]')
    }

    getDashboardLink() {
        return cy.xpath('//div[@class="content-popover-feemanagement w-100"]//div[text()="Dashboard"]')
    }

    getFeeAllocationLink() {
        return cy.xpath('//div[text()="Fee Allocation"]')
    }

    getFeeCollectionLink() {
        return cy.xpath('//div[text()="Fee Collection"]')
    }

    getFeeStructureTitle() {
        return cy.xpath('//p[.=" Fees Structure "]')
    }

    navigateToFeeSetUpPage(feeStructurePageTitle) {
        this.getSideMenuFeeManagementIcon().click()
        this.getFeeSetupLink().click()
    }

}
module.exports = new AdminDashboardPage()