Feature: Create user

        Scenario: Create user
            Given access the website
             When create a new user
             Then must create user successfully

        Scenario: Update user
            Given access the website
              And create a new user
             When click option for update user
             Then the user is updated
