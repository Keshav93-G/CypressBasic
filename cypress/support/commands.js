Cypress.Commands.add('clearAndType', {
    prevSubject: true,
  }, (subject, text) => {
    return cy.get(subject)
        .clear()
        .wait(2000)
        .type(text)
})
