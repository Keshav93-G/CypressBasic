const { describe } = require("mocha")


before('Login to the app',()=>{

    cy.visit('http://react-redux.realworld.io/')   


    cy.Login(Cypress.env("username"),Cypress.env("password"))
})
describe('Perform E2E test using cypress features',()=>{

    it('Verifies Headers',()=>{

        cy.wait('1000')
        cy.get('div>a').should('have.text','conduit')
        cy.wait('1000')
        cy.get('ul>li:nth-child(1)>a').should('have.text','Home')
        cy.wait('1000')
        cy.get('ul>li:nth-child(2)>a>i').should('have.text',' New Post')
        cy.wait('1000')
        cy.get('ul>li:nth-child(2)>a>i').should('have.text',' Settings')
        cy.get('ul>li:nth-child(2)>a>').should('have.text','E2E Test')

    })

    it('Read Fixture file and post a article ',()=>{
        cy.get('ul>li:nth-child(2)>a>i').should('have.text',' New Post').click()
        cy.fixture('article').as('article')
        cy.wait('1000')
        cy.get('form>fieldset>input[placeholder="Article Title"]').type(article.Title)
        cy.wait('1000')
        cy.get('form>fieldset>input[placeholder="What\'s this article about?"]').type(article.Introduction)
        cy.wait('1000')
        cy.get('form>fieldset>input[placeholder="Article Title"]').type(article.Body)
        cy.wait('1000')
        cy.get('form>fieldset>input[placeholder="Article Title"]').type(article.Tags)
        cy.wait('1000')
        cy.contains('form>fieldset>button').click()
        cy.wait('2000')

    })


    it('Verifies Published Article content using Fixture Files',()=>{

    })
})

