//const { before } = require("mocha")

before('It Visits the app',()=>{
    it('Visits the application',()=>{
        cy.visit('http://react-redux.realworld.io/')    
     })
})
describe('We Learn how to create and Use custom commands',()=>{

    
    it('Clicks on Sign In button',()=>{

        cy.get('ul>li:nth-child(2)').should('have.text','Sign in').click()

     })
     it('Login to apps Using Command',()=>{
        cy.Login('abc','efg')
     })

})

