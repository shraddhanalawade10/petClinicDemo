Feature: Validation of Owners page

    Scenario: All dropdown menu
        Given User navigates to Petclinic home page
        When User clicks on Owners tab and selects ALL dropdown menu
        Then User should be navigated to Owners page where he can see the list of owners

    Scenario Outline: Add owners
        Given User navigates to Petclinic welcome page
        When User clicks on Owners tab and selects Add New dropdown menu
        And User enter owners details "<FirstName>" "<LastName>" "<Address>" "<City>" "<Telephone>" and click on Add Owner button to add new owner
        Then User should be navigated to Owners page where newly added owner should get saved

        Examples:
            | FirstName | LastName | Address   | City   | Telephone  |
            | Pooja1    | Pawar    | 10 street | Mumbai | 9874510445 |

    Scenario: Validation of back button
        Given User is on Petclinic welcome page
        And User clicks on Owners tab and selects Add New dropdown menu
        When User clicks on back button from New Owners page
        Then User should be navigated to Owners page where he can see the list of owners