Feature: Validation of PetType page

    Scenario: Pet Type
        Given User is navigating to Home page of Pet Clinic application
        When User clicks on Pet Type tab
        Then User should be navigated to Pet Types page where he can see the list of Pet Types and edit, delete, add and home are enabled or not

    Scenario Outline: Add Pet Types
        Given User is navigating to PetClinic home page
        When User clicks on Pet Type tab and then clicks on Add button
        Then User should be navigated to page where he can provide "<petname>" and click on Save button
        Then User should be directed to Pet Types page where he can see newly added Pet type

        Examples:
            | petname |
            | Rabbit  |

    Scenario Outline: Edit Pet Types
        Given User is navigating to PetClinic welcome page
        When User clicks on Pet Type tab and then clicks on Edit button of particular PetType
        Then User shoule be navigated to Edit Pet Type page where he can edit the name of PetType as "<newPetType>"
        And User click on Update button
        And User should be navigated to Pet Types page where he can see updated name of Pet Type

        Examples:
            | newPetType |
            | Fish       |

    Scenario: Delete Pet Types
        Given User is navigating to Welcome page of Pet Clinic application
        When User clicks on Pet Type tab and then clicks on Delete button of particular pet Type
        Then That particular Pet Type should get deleted from the list

    Scenario: Validation of Home button
        Given User is on Pet Clinic application
        When User clicks on Pet Type tab and then clicks on Home button
        Then User should be navigated to Home page of Pet Clinic application