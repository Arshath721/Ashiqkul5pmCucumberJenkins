package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends UtilityBaseClass{

@Given("User must be in facebook login page")
public void user_must_be_in_facebook_login_page() {
    launchUrl("https://en-gb.facebook.com/");
}

@When("User enter invalid username and invalid password")
public void user_enter_invalid_username_and_invalid_password() {
   WebElement username = driver.findElement(By.id("email"));
   WebElement password = driver.findElement(By.id("pass"));
   fill(username, "greens");
   fill(password, "greens@123");
}

@When("User click login button")
public void user_click_login_button() {
	WebElement loginBtn = driver.findElement(By.name("login"));
	loginBtn.click();
  }

@Then("User must be  in invalid credentials page")
public void user_must_be_in_invalid_credentials_page() {
    System.out.println("user is in invalid page");
}



}
