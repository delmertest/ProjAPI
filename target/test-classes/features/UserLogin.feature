Feature: BCP API automation exam

  @user @login
  Scenario: Valid credentials
    Given a user has credentials
      | password | 123456bcp               |
      | username | examenparabcp@gmail.com |
    When a user login
    Then the status code is 200
    And response includes the following
      | token | 59c57973-3e9e-405d-92f8-ce5c7f03dccb |

  @user @nologin
  Scenario: Invalid credentials
    Given a user has credentials
      | password | 123456bco               |
      | username | examenparabcp@gmail.com |
    When a user login
    Then the status code is 404
    And response includes the following
      | message | The requested Item has not been found |
      | type    | ItemNotFoundException                 |
