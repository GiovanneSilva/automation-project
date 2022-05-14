
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

/* global Given, Then, When, And */
/// <reference types="Cypress"/> 



Given("que eu acesso o site", () => {
	cy.visit('http://automationpractice.com/')
    cy.validarPaginaIndex()
});

When("clico em Sign In", () => {
	cy.clicarSignIn()
});

And("informo meu email em  Create an Account", () => {
	cy.informarEmail()
});

And("clico no botao Create an Account", () => {
	cy.clicarCreateBtn()
});

Then("valido que minha conta foi criada", () => {
    cy.validarPage()
});


And("sou direcionado para pagina  creation an account", () => {
	cy.validarPage()

});

And("adiciono meu email para criar a conta", () => {
	cy.emailCreateAccount()
})

And("preencho todos os campos corretamente", () => {
	cy.fillForm()
	
});

Then("valido que a conta foi criada com sucesso", () => {
	cy.submitCreateAccount()
});

And("valido que surge a mensagem dizendo que uma conta ja foi registrada com esse email", () => {
	cy.emailAlertRegistered()
});

And("informo meu email de login", () => {
	cy.emailRegistered()
});

And("informo senha de login incorreta", () => {
	cy.fillLoginPssword()
});

And("clico no botao Sign in", () => {
	cy.submitLogin()
});

Then("valido que surge uma mensagem de erro informando que a senha inserida e invalida", () => {
	cy.alertErrorPassword()
});

And("informo minha senha", () => {
	cy.password()
});

Then("valido que o login foi realizado com sucesso", () => {
	cy.validarLoginSucess()
});
