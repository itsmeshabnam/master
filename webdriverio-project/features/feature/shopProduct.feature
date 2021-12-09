Feature: Perform product purchasal

    Feature Description : Perform registration of new user, Signout & SignIn user, verify product purchase

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

    Scenario Outline: Checkout product and verify product details
        Given I am signed in with created user credentials
        When I add product <productName> to cart
        Then I navigate to payments page
        And Verify <productName> Product details
        
        Examples: 
    | productName| 
    |Printed Dress| 