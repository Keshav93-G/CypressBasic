
beforeEach(()=>{
    cy.visit(Cypress.config().baseurl)
})
describe('Here We explore other options of Cypress',()=>{
    it('Reads Username & password parameter from env File',()=>{
        var email = Cypress.env("email");
        var password = Cypress.env("password")
        cy.get('ul>li:nth-child(2)')
            .should('have.text','Sign in').click()
        cy.wait(2000)
        cy.get('fieldset>input[type="email"]')
            .type(email)
        cy.wait(2000)
        cy.get('fieldset>input[type="password"]')
            .type(password)
        cy.get('button')
            .click()
    })
})