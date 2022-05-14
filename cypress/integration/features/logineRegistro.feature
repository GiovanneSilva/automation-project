Feature: Login

    Scenario: Validar que novo usuario e Registrado
    Given que eu acesso o site
    When clico em Sign In
    And informo meu email em  Create an Account
    And clico no botao Create an Account
    Then valido que minha conta foi criada

    Scenario: Validar mensagem de email ja cadastrado
    Given que eu acesso o site
    When clico em Sign In
    And informo meu email em  Create an Account
    And clico no botao Create an Account
    Then valido que surge a mensagem dizendo que uma conta ja foi registrada com esse email

    Scenario: Validar mensagem de senha incorreta
    Given que eu acesso o site
    When clico em Sign In
    And informo meu email de login
    And informo senha de login incorreta
    And clico no botao Sign in
    Then valido que surge uma mensagem de erro informando que a senha inserida e invalida

    Scenario: Validar login com sucesso
    Given que eu acesso o site
    When clico em Sign In
    And informo meu email de login
    And informo minha senha
    And clico no botao Sign in
    Then valido que o login foi realizado com sucesso
