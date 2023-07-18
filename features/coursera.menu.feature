@coursera @menu
Feature: As a user I want to use menu in order to open list of courses

Scenario: Search for free course via menu.
    Given user opens "https://www.coursera.org/" page
    When user clicks Explore button at the header
    And user clicks "Take a free course" option at the Goals section of the menu
    And user clicks on the first item of the search results
    Then the open page has the button with the text "Enroll for Free"

Scenario: Search for Bachelor degrees via menu
    Given user opens "https://www.coursera.org/" page
    When user clicks Explore button at the header
    And user clicks "Earn a Degree" option at the Goals section of the menu
    And user clicks on the link "View all Data Science degrees" at the Data Science section of the Degree menu
    And user clicks "Bachelors Degrees" button at the 'Explore more degrees by category' section
    Then each degrees has title with "Bachelor" world
