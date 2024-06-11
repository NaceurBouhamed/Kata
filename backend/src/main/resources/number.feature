Feature: Transforming a number to string

  Scenario: Transform an out of range number to string
    When the client sends a request with a number not in [0, 100]"
    Then the response should indicate an "OutOfRangeException"
    And the status code should be 400

  Scenario Outline: Transform various numbers to strings or throw exceptions
    When the client sends a request to transform the number <number>
    Then the response should contain the string <expected_string>
    And the status code should be 200

    Examples:
      | number  | expected_string |
      | 1       | "1"             |
      | 3       | "FOOFOO"        |
      | 5       | "BARBAR"        |
      | 7       | "QUIX"          |
      | 9       | "FOO"           |
      | 51      | "FOOBAR"        |
      | 53      | "BARFOO"        |
      | 33      | "FOOFOOFOO"     |
      | 15      | "FOOBARBAR"     |