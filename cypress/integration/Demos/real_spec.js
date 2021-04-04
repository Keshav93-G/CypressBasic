describe('My First Real Test',()=>{

    it('Visits app',()=>{
        cy.visit('http://react-redux.realworld.io/')

    })
    it('Verifies the Title',()=>{

        cy.get('div>a').should('have.text','conduit')
        
    })

    it('Clicks on Sign In button',()=>{

        cy.viewport(768,1024)
        cy.get('ul>li:nth-child(2)').should('have.text','Sign in').click()
     })

     
})