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

    getMostPopularViewAllButton() {
        return cy.xpath('//button[.="Most Popular"]/ancestor::div[@class="MuiBox-root css-8atqhb"]//button[.="View All"]')
    }

    getRiseTextBookText() {
        return cy.xpath("//button[.='RISE TextBook']/ancestor::div[@class='MuiBox-root css-8atqhb']//span[text()='RISE TextBook']")
    }

    getViewRiseTextBookLink() {
        return cy.xpath("//button[normalize-space()='View RISE TextBook']")
    }

    getSearchTextFieldContentLibrary() {
        return cy.get("[type='text']")
    }

    getTagsContentLibrary() {
        return cy.get('[class*="MuiChip-labelMedium"]')
    }

    getSearchIconContentLibrary() {
        return cy.get("[data-testid='SearchIcon']")
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

    getRiseTextBookLink(){
        return cy.get('button.MuiTab-textColorPrimary').contains('RISE TextBook')
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

    getTextBookNameTitle() {
        return cy.get('[class="content-label"] b')
    }

    getContentLibraryViewDocumentBackIcon() {
        return cy.get('[data-testid="ArrowBackIcon"]')
    }

    getMostPopularBooksTextInContentLibrary() {
        return cy.get('[class="cntLibCardTitle"] strong')
    }


    getTopSchoolLibrary(){
        return cy.get('button.MuiToggleButtonGroup-groupedHorizontal').contains('TopSchool Library')
    }


    getContentLibraryCard(){
        return cy.get('h4.cntLibCardTitle strong')
    }

    getContentLibraryThreeDots(Testing){
        return cy.xpath('//strong[text()="'+Testing+'"]/ancestor::div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 css-1ha4th6"]//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-v36qta"]')
    }

    getContentLibraryShareContentLink(){
        return cy.get('li[value="Share Content"]')
    }

    getContentLibraryShareContentEntireSchoolLink(){
        return cy.xpath('//li[text()="Entire School"]')
    }

    getContentLibraryShareContentSpecificMembersLink(){
        return cy.xpath('//li[text()="Specific Members"]')
    }

    getContentLibrarySuccessfulMessageCloseBtn(){
        return cy.get('svg[data-testid="CloseIcon"]')
    }

    getContentLibraryStudentsTab(){
        return cy.get('button.MuiTab-textColorPrimary').contains('Students')
    }

    getContentLibraryTeachersTab(){
        return cy.get('button.MuiTab-textColorPrimary').contains('Teachers')
    }

    getContentLibraryAdminsTab(){
        return cy.get('button.MuiTab-textColorPrimary').contains('Admins')
    }

    getContentLibraryShareBtn(){
        return cy.xpath('//button[text()="Share"]')
    }

    getContentLibraryCancelBtn(){
        return cy.xpath('//button[text()="Cancel"]')
    }

    getContentLibraryGoBackBtn(){
        return cy.get('.customAddMembNav span')
    }

    getContentLibrarypersonsList(){
        return cy.get('div.txtcenter')
    }

    getContentLibraryAddBtn(){
        return cy.get('button.customStdAddBtn')
    }

    getContentLibraryStudentSearchBoxTxt(){
        return cy.get('input[placeholder="Search Students..."]')
    }

    getcontentLibrarySearchBoxTxt(){
        return cy.get('input[type="search"]')
    }

}
module.exports = new AdminContentLibraryPage() 