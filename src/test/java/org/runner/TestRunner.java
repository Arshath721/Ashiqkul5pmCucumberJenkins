package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.userlab.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Feature", glue = "org.stepdefinition",
dryRun = false,monochrome=true,
plugin = {"pretty",
		"html:src\\test\\resources\\Report",//------index.html
		"json:src\\test\\resources\\Report\\out.json",
		"junit:src\\test\\resources\\Report\\facebook.xml",
		"rerun:src\\test\\resources\\Rerun\\failedRerun.txt"})
public class TestRunner {
	@AfterClass
	public static void jvmReportGeneration() {
		JvmReport.generateJvmReport(System.getProperty("user.dir")
				+"\\src\\test\\resources\\Report\\out.json");

	}

}
