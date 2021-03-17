Feature: Validation of Veterinarian page

    Scenario: All dropdown menu
        Given User directs to the Home page of Pet Clinic application
        When User clicks on Veterinarian tab and selects ALL dropdown menu
        Then User should be navigated to Veterinarian page where he can see the list of Veterinarian

    Scenario: Add Veterinarian
        Given User directs to the Welcome page of Pet Clinic application
        When User clicks on Veterinarian tab and selects Add New dropdown menu
        And User enters Veterinarian details and clicks on Save Vet button
        Then User should be navigated to Veterinarian page and where newly added Veterinarian should get saved

    Scenario: Validation of back button
        Given User directs to the Pet Clinic application url
        And User clicks on Veterinarian tab and selects Add New dropdown menu
        When User clicks on back button from New Veterinarian page
        Then User should be navigated to Veterinarian page where he can see the list of Veterinarian
