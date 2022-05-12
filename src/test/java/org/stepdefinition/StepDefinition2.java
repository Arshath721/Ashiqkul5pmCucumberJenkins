package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition2 extends UtilityBaseClass {
	@Given("User is in facebook page")
	public void user_is_in_facebook_page() {
		launchUrl("https://en-gb.facebook.com/");
	}

	@When("User click Forget password")
	public void user_click_Forget_password() {
		WebElement forgetBtn = driver.findElement(By.xpath("//a[text()='Forgotten password?']"));
		forgetBtn.click();
	}

	@When("User User must be in find account page")
	public void user_User_must_be_in_find_account_page() {
		System.out.println("user is in find account");
	}

	@When("User enter value in text field and click search")
	public void user_enter_value_in_text_field_and_click_search() {
		WebElement forgotTxtBox = driver.findElement(By.xpath("//input[@type='text']"));
		fill(forgotTxtBox, "9876543210");
		WebElement searchBtn = driver.findElement(By.xpath("//button[text()='Search']"));
		searchBtn.click();
		
	}

	@Then("User must identify his account")
	public void user_must_identify_his_account() {
		System.out.println("user must be in identify account page");
	}

}
