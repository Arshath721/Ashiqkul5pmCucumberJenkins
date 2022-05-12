package org.stepdefinition;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.userlab.UtilityBaseClass;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends UtilityBaseClass {

	@Before
	public void beforeFeatureFile() {
		System.out.println("browser launch");
		launchBrowser();

		System.out.println("brower maximize");
		browserMaximize();

		System.out.println("imp wait");

	}

	@After(order = 3)
	public void screensShotManual(Scenario s) throws IOException {

		if (s.isFailed()) {

			String name = s.getName();
			String scName = name.replaceAll(" ", "_");
			takeSnap(scName);

		}

	}

	@After(order = 2)
	public void screensShotAuto(Scenario s) {
		
		if (s.isFailed()) {
			TakesScreenshot ts=(TakesScreenshot)driver;
			byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshot, "image/png");
			
		}

	}

	@After(order = 1)
	public void afterFeatureFile() {
		System.out.println("screenshot");

		System.out.println("quit");

	}

}
