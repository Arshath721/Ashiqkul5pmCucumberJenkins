 Feature: To validate the forgot password functionallity 
 
 
 Scenario: To validate forgot password 
 Given User is in facebook page 
  When User click Forget password
  And  User User must be in find account page
  And User enter value in text field and click search
  Then User must identify his account