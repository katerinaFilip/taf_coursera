@coursera @filter
Feature: As a user I want to use filter buttons in order to filter search results

Scenario Outline: Filter course search results.
    Given user opens "https://www.coursera.org/" page
    When user enters "Machine Learning" to the Search input
    And user presses Search button
    And user clicks "<filterName>" button at the filters section
    And user checks "<filterOptionName>" check-box at the drop-down list
    Then each of the displayed item on the first tab of search results has the value "<optionLabelValue>" as "<optionLabel>"

Examples:
    |filterName      |filterOptionName         |optionLabel  |optionLabelValue        |
    |Level           |Advanced                 |difficulty   |Advanced                |  
    |Partner         |IBM                      |partner-name |IBM                     |
    |Learning Product|Professional Certificates|product-type |Professional Certificate|

Scenario Outline: Filter degree products
    Given user opens "https://www.coursera.org/" page
    When user enters "Machine Learning" to the Search input
    And user presses Search button
    And user clicks on the tab "Degrees & Certificates" at the product-tabs container
    And user clicks "<filterName>" button at the filters section
    And user checks "<filterOptionName>" check-box at the drop-down list
    Then each of the displayed item on the first tab of search results has the value "<optionLabelValue>" as "<optionLabel>"

Examples:
    |filterName      |filterOptionName         |optionLabel  |optionLabelValue|
    |Partner         |Google                   |partner-name |Google          |
    |Learning Product|MasterTrack™ Certificates|product-type |Mastertrack     |