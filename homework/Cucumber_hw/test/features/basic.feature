Feature: Basic website

      Scenario: Click on button on webpage
        Given I go to "https://webdriver.io"
		When I click on button
        Then I should see redirect
