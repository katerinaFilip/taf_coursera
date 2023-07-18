@coursera @search
Feature: As a user I want to use search box in order to search needed courses

Scenario Outline: Search for course via search box.
    Given user opens "https://www.coursera.org/" page
    When user enters "<searchQuery>" to the Search input
    And user presses Search button
    And user clicks on the first item of the search results
    Then the open page has title which contains "<searchQuery>"

 Examples:
    |searchQuery       |
    |Machine Learning  |
    |Roman Architecture| 
    |Social Psychology |

Scenario Outline: Open list of specific products matching search query.
    Given user opens "https://www.coursera.org/" page
    When user enters "Machine Learning" to the Search input
    And user presses Search button
    And user clicks on the tab "<tabName>" at the product-tabs container
    Then each of the displayed item on the first tab of search results has the value "<productType>" as "product-type"

 Examples:
    |tabName               |productType    |
    |Guided Projects       |Guided Project |
    |Degrees & Certificates|Degree         |  