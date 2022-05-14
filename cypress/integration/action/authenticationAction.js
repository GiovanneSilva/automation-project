const authenticationPage = require ('../page/authenticationPage')
const massa = require('../../fixtures/massa.json')

Cypress.Commands.add('validarPaginaAuthentication', () => {
    cy.get(authenticationPage.authenticationTitle).should('be.visible')

})

Cypress.Commands.add('informarEmail', () => {

    cy.get(authenticationPage.emailAdressCreateTxt).should('be.visible')
    cy.get(authenticationPage.emailAdressCreateTxt).type(massa.email)

})

Cypress.Commands.add('clicarCreateBtn', () => {
    cy.get(authenticationPage.createBtn).should('be.visible')
    cy.get(authenticationPage.createBtn).click()
    cy.wait(4000)

})