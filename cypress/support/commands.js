Cypress.Commands.add('clearAndType', {
    prevSubject: true,
  }, (subject, text) => {
    return cy.get(subject)
        .clear()
        .wait(1000)
        .type(text)
        .wait(1000)
})
