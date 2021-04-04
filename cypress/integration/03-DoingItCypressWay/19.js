beforeEach(()=>{
    cy.visit(Cypress.config().baseurl)
})
describe('Cypress Custom Command',()=>{
    it('Cypress Custom Command',()=>{
        var email = Cypress.env("email");
        cy.get('ul>li:nth-child(2)')
            .should('have.text','Sign in')
            .click()
            .wait(2000)
        cy.get('fieldset>input[type="email"]')
            .type("Hello")
            .wait(2000)
            .clearAndType(email);
    })
})