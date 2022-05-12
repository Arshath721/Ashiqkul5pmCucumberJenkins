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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027ogin\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-0R60E7M\u0027, ip: \u0027192.168.43.85\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\PARVEZ\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:56755}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c0be1229cd1caef76670e9796738ce77\n*** Element info: {Using\u003dname, value\u003dogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefinition.StepDefinition.user_click_login_button(StepDefinition.java:28)\r\n\tat ✽.User click login button(file:src/test/resources/Feature/LoginFunction.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User must be  in invalid credentials page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_invalid_credentials_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
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