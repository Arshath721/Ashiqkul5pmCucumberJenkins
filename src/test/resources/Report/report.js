$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Feature/LoginFunction.feature");
formatter.feature({
  "name": "To validate the login functionallity using invalid credentials",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login using invalid username and invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User must be in facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter invalid username and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_invalid_username_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must be  in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Feature/forget_password.feature");
formatter.feature({
  "name": "To validate the forgot password functionallity",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate forgot password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition2.user_is_in_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Forget password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition2.user_click_Forget_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User User must be in find account page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition2.user_User_must_be_in_find_account_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter value in text field and click search",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition2.user_enter_value_in_text_field_and_click_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must identify his account",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition2.user_must_identify_his_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});