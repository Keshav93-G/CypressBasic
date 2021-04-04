describe('Here We explore other options of Cypress',()=>{
    it('Access the url from Cypress.json file',()=>{
        cy.visit(Cypress.config().baseurl)
    })

    it('Override Viewport Setting',()=>{
        cy.viewport(768,1024)
        cy.visit(Cypress.config().baseurl)
    })
})