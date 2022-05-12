package org.userlab;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	// 1
	public static void generateJvmReport(String jsonPath) {
		// E:\\eclipse Photon Project\\Cucumber12noon
		File f = new File(System.getProperty("user.dir") + "\\src\\test\\resources\\Report\\JvmReport");

		// 2
		Configuration con = new Configuration(f, "facebook");
		con.addClassifications("platfrom", "windows");
		con.addClassifications("platform version", "10");
		con.addClassifications("browser", "chrome");
		con.addClassifications("browser version", "96.0");
		con.addClassifications("sprint day", "3 weeks");
		con.addClassifications("current sprint", "4");

		// 3
		List<String> jsonFile = new ArrayList<String>();
		jsonFile.add(jsonPath);

		// 4
		ReportBuilder r = new ReportBuilder(jsonFile, con);
		r.generateReports();

	}

}
