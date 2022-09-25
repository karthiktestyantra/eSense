class AdminContentLibraryPage {

    getRiseTextBookTab() {
        return cy.xpath("//button[.='RISE TextBook']").eq(0)
    }

    getElaAssignmentsTab() {
        return cy.xpath("//button[.='ELA Assignments']").eq(0)
    }

    getElaAssignmentsViewAllButton() {
        return cy.xpath('//button[.="ELA Assignments"]/ancestor::div[@class="MuiBox-root css-8atqhb"]//button[.="View All"]')
    }

    getRiseTextBookText() {
        return cy.xpath("//button[.='RISE TextBook']/ancestor::div[@class='MuiBox-root css-8atqhb']//span[text()='RISE TextBook']")
    }

    getViewRiseTextBookLink() {
        return cy.xpath("//button[normalize-space()='View RISE TextBook']")
    }

    getViewElaAssignmentsLink() {
        return cy.xpath("//button[.='View ELA Assignments']")
    }

    getViewRiseTextBookNameInList() {
        return cy.xpath("//button[normalize-space()='View RISE TextBook']/ancestor::div[contains(@class,'MuiPaper')]//strong")
    }

    getContentLibraryViewRiseTextBookIframe() {
        return cy.frameLoaded('#webviewer-1')
    }

    getContentLibraryViewElaAssignmentsIframe() {
        return cy.frameLoaded('#webviewer-2')
    }

    getContentLibraryZoomInIcon() {
        return cy.iframe().find("[aria-label='Zoom in']")
    }

    getContentLibraryZoomOutIcon() {
        return cy.iframe().find("[aria-label='Zoom out']")
    }

    getContentLibraryZoomValue() {
        return cy.iframe().find('[class="textarea"]')
    }

    getContentLibraryZoomFitToWidth() {
        return cy.iframe().find('[aria-label="Fit to width"] span')
    }

    getContentLibraryViewControlsButton() {
        return cy.iframe().find('[aria-label="View Controls"]').eq(0)
    }

    getContentLibraryViewControlsAllButtons() {
        return cy.iframe().find('div[aria-label="View Controls"] div[class="title"]')
    }

    getContentLibraryDocumentNextPageIcon() {
        return cy.iframe().find('[aria-label="Next page"]')
    }

    getContentLibraryDocumentPreviousPageIcon() {
        return cy.iframe().find('[aria-label="Previous page"]')
    }

    getContentLibraryDocumentSetPage() {
        return cy.iframe().find('input[aria-label="Set page"]')
    }

    getContentLibraryDocumentMenuBtn() {
        return cy.iframe().find('[data-element="menuButton"]')
    }

    getContentLibraryDocumentFullScreenBtnText() {
        return cy.iframe().find('[data-element="fullscreenButton"]')
    }

    getContentLibraryDocumentFullScreenBtn() {
        return cy.iframe().find('[data-element="fullscreenButton"] span')
    }

    getPdfImg() {
        return cy.get('img[src*="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAABZVBMVEUAAADBxsvx"]')
    }

    getViewRiseTextBookNameTitle() {
        return cy.get('[class="content-label"]')
    }

    getContentLibraryViewDocumentBackIcon() {
        return cy.get('[data-testid="ArrowBackIcon"]')
    }

}
module.exports = new AdminContentLibraryPage() 