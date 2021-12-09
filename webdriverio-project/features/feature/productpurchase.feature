Feature: Perform product purchasal

    Scenario Outline: Checkout product and verify product details
        Given I Login using user credentials
        When I add product <productName> to cart
        Then I navigate to payments page
        And Verify <productName> Product details
        

 Examples: 
    | productName| 
    |Printed Dress| 