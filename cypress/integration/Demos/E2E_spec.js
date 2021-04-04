//const { describe } = require("mocha")


before('Login to the app',()=>{

    cy.visit('http://react-redux.realworld.io/')   


    cy.Login(Cypress.env("email"),Cypress.env("password"))
})
describe('Perform E2E test using cypress features',()=>{

    it('Verifies Headers',()=>{

        cy.wait(2000)
        cy.get('nav>div>a').should('have.text','conduit')
        cy.wait(2000)
        cy.get('nav>div>ul>li:nth-child(1)>a').should('have.text','Home')
        cy.wait(2000)
        
    })

    it('Read Fixture file and post a article ',()=>{
        cy.get('nav>div>ul>li:nth-child(2)>a').click()
        cy.wait(2000)
        cy.fixture('article').then((article)=>{
        cy.wait(2000)
        cy.get('fieldset>input[placeholder="Article Title"]').type(article.Title)
        cy.wait(2000)
        cy.get('fieldset>input[placeholder="What\'s this article about?"]').type(article.Introduction)
        cy.wait(2000)
        cy.get('fieldset>textarea[placeholder="Write your article (in markdown)"]').type(article.Body)
        cy.wait(2000)
        cy.get('fieldset>input[placeholder="Enter tags"]').type(article.Tags)
        cy.wait(2000)
        //cy.get('button').click()
        cy.wait(2000)
    })

    })


    it('Verifies Published Article content using Fixture Files',()=>{
    
        cy.fixture('article').then((article)=>{
        cy.wait(2000)
        cy.get('h1').should('have.text',article.Title)
        cy.wait(2000)
        cy.get('div>p').should('have.text',article.body)

    })

    })
})

