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
        cy.wait(1000)
        cy.get('body').then(($el) => {
            if ($el.find('[class="popper-sub-list"]').length > 0) {
                this.getFeeSetupLink().click()
            }
        })
        cy.wait(1500)
    }

}
module.exports = new AdminDashboardPage()