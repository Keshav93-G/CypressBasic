
describe('Here We explore other options of Cypress',()=>{


    it('Access the url from Cypress.json file',()=>{
        cy.visit(Cypress.config().baseurl)

    })

    it('Set the view port size for current use case',()=>{
        cy.viewport(768,1024)
        cy.get('ul>li:nth-child(2)').should('have.text','Sign in').click()
    })

    it('Reads Username & password parameter from env File',()=>{

        cy.Login(Cypress.env("username"),Cypress.env("password"))

    })

})