@hudl_smoke
Feature: Login functionality of hudl coach home page

  Scenario Outline: user is able to login with valid username and password
    Given I am on the home page
    When I login in with email "<Email>" and password as "<Password>"
    Then the user is able to login
    Examples:
      | Email                 | Password  |
      | olu.oshin@outlook.com | Geller@59 |

  Scenario Outline: Login page feature hudl with wrong username and password
    Given I am on the home page
    When I login in with email "<Email>" and password as "<Password>"
    Then the user is not able to login
    Examples:
      | Email                     | Password  |
      | WrongUserName@outlook.com | CoachHuld |

  Scenario: user is not able to login when credentials is not provided in the username and password field
    Given I am on the home page
    And The user did not provide any username and password
    Then the login button is disable to the user
