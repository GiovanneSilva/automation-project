Scenario: Validar registro de novo usuario
    Given que eu acesso o site
    When clico em Sign In
    And adiciono meu email para criar a conta
    And clico no botao Create an Account
    And sou direcionado para pagina  creation an account
    And preencho todos os campos corretamente
    Then valido que a conta foi criada com sucesso