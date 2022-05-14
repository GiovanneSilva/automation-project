const indexPage = require ('../page/indexPage')


Cypress.Commands.add('validarPaginaIndex', () => {
    cy.get(indexPage.logoHomeImg).should('be.visible')

})

Cypress.Commands.add('clicarSignIn', () => {
    cy.get(indexPage.loginBtn).click()

})