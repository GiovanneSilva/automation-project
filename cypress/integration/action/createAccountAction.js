const createAccountPage = require('../page/createAccountPage')
const authenticationPage = require('../page/authenticationPage')
const massa = require('../../fixtures/massa.json')
import loginFactory from'../../factories/loginFactory'
const aceite = require('../../fixtures/aceite.json')


Cypress.Commands.add('validarPage', () => {

    cy.get(createAccountPage.createAccountTitle).should('be.visible')

})

Cypress.Commands.add('fillForm', () => {

    var massaLog =  loginFactory.massaLog()

    cy.get(createAccountPage.masculinoOption).click()
    cy.get(createAccountPage.customerFirstNameTxt).type(massaLog.name)
    cy.get(createAccountPage.customerLastNameTxt).type(massaLog.lastName)
    cy.get(createAccountPage.password).type(massaLog.password)
    cy.get(createAccountPage.birthDay).select('1')
    cy.get(createAccountPage.monthBirth).select('May')
    cy.get(createAccountPage.yearBirth).select('1999')
    cy.get(createAccountPage.company).type(massa.company)
    cy.get(createAccountPage.adress1).type(massaLog.street)
    cy.get(createAccountPage.adress2).type(massa.adress2)
    cy.get(createAccountPage.city).type(massaLog.city)
    cy.get(createAccountPage.state).select('Alaska')
    cy.get(createAccountPage.postalCode).type(massa.postalCode)
    cy.get(createAccountPage.additionalInformation).type(massa.additionalInformation)
    cy.get(createAccountPage.homeFone).type(massaLog.homePhone)
    cy.get(createAccountPage.mobileFone).type(massaLog.mobileFone)
    cy.get(createAccountPage.alternativeAdress).type(massa.alternativeAdress)

})

Cypress.Commands.add('submitCreateAccount', () => {

    cy.get(createAccountPage.submitBtn).click()
    cy.get('.page-heading').should('be.visible')

})

Cypress.Commands.add('emailAlertRegistered', () => {

    cy.get(createAccountPage.emailAlertUsed).should('be.visible')
})

Cypress.Commands.add('fillLoginEmail', () => {

    var massaLog =  loginFactory.massaLog()

    cy.get(createAccountPage.logEmailTxt).type(massaLog.email)

})

Cypress.Commands.add('fillLoginPssword', () => {

    var massaLog =  loginFactory.massaLog()

    cy.get(createAccountPage.passwordLog).type(massaLog.password)

})

Cypress.Commands.add('submitLogin', () => {

    cy.get(createAccountPage.loginButton).click()

})

Cypress.Commands.add('alertErrorPassword', () => {

    cy.get(createAccountPage.alertErrorPassword).should('be.visible')

})

Cypress.Commands.add('emailCreateAccount', () => {

    var massaLog =  loginFactory.massaLog()

    cy.get(authenticationPage.emailAdressCreateTxt).type(massaLog.email)

})

Cypress.Commands.add('password', () => {

    cy.get(createAccountPage.password).type(massa.password)

})

Cypress.Commands.add('emailRegistered', () => {
    cy.get(createAccountPage.emailLog).type(massa.email)
})

Cypress.Commands.add('validarLoginSucess', () => {
    cy.get(createAccountPage.myAccount).should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
})