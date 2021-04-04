describe('We will Learn setting Viewport of Application for specific Test Case',()=>{


    it('Visits app',()=>{
        cy.visit('http://react-redux.realworld.io/')

    })
    it('Verifies the Title',()=>{

        cy.get('div>a').should('have.text','conduit')
        
    })
    it('Sets the Viewport of application for Login Screen',()=>{
        //ipad mini 
        cy.viewport(768,1024)
        cy.get('ul>li:nth-child(2)').should('have.text','Sign in').click()

     })

})