Feature: Subscription packages

    validate the subscription packages for all countries 

    Background:
        Given i navigate to the url 
    Scenario: validate all subscriptions

        When user be on  home page
        Then check all type and price and currency for all countries 