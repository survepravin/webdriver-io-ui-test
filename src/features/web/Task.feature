@task
Feature: Task 2 scenarios

    @scenario1
    Scenario: Create an order
        When User logins with username and password
        And Add product to cart
        And Navigate to cart page and verify product details
        And Checkout
            | firstName | Pravin |
            | lastName  | Surve  |
            | zipCode   | 400092 |
        Then Verify order is complete
        And Logout

    @scenario2
    Scenario: Verify product details on product description page
        When User logins with username and password
        And Get product details from Product page
        And Select a product from Product page
        Then verify product details on product description page
        And Logout
