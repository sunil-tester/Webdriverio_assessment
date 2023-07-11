Feature: Test Login Functonality

Scenario: login with valid credentials
Given user on login page
When user enters username and password
And click on login button
Then navigate to home page

