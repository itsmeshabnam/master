Feature: Perform registration of new user, Signout & SignIn user

    Feature Description

    Scenario: Create a new user account
        Given I am on the home page
        When I navigate to SignUp page
        Then I should create a new user account

    Scenario: Validate firstname and lastname on home page
        Given I am on the My account page
        When I navigate to home page
       Then Verify firstname and lastname 

    Scenario: Sign out and sign in user
        Given I am on the home page 
        When I Sign out from application
        Then Sign in into user account