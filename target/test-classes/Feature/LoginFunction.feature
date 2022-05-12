Feature: To validate the login functionallity using invalid credentials

  Scenario: To validate login using invalid username and invalid password
    Given User must be in facebook login page
    When User enter invalid username and invalid password
    And User click login button
    Then User must be  in invalid credentials page
