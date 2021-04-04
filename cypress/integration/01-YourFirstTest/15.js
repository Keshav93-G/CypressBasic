describe('My First Real Test',()=>{
    it('Visits app',()=>{
        cy.visit('http://react-redux.realworld.io/')
        cy.get('div>a')
            .should('have.text','conduit')
        cy.get('ul>li:nth-child(2)')
            .should('have.text','Sign in')
            .click()
    }) 
})