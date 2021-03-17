Feature: Validation of Home page

    Scenario: Verify that User is able to navigate to Petclinic application homepage
        Given User navigates to Petclinic url
        Then User sees Welcome to Petclinic message on homepage
        Then Verify the welcome message of PetClinic application

    Scenario: Verify that User is able to see Five menus on homepage
        Given User is on Petclinic home page
        Then User sees five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties