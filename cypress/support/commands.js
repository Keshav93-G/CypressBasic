// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('ClearAndType',()=>{
    cy.get('').clear()
    cy.get('').type('abc')
    //cy.get('').clear('').type()
    })

Cypress.Commands.add('Login',(username,password)=>{


    cy.wait(1000)
    cy.get('fieldset>input[type="email"]').type(username)
    cy.wait(1000)
    cy.get('fieldset>input[type="password"]').type(password)
})  