$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/UI_Test_Cucumber.feature");
formatter.feature({
  "name": "I want to check the UI alignment of the web page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GUItesting"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing the UI alignment of the page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GUItestingIntro"
    }
  ]
});
formatter.step({
  "name": "Navigate to the page",
  "keyword": "Given "
});
formatter.step({
  "name": "Provide the valid details with \"\u003cdeparture_City\u003e\",\"\u003cDestination_place\u003e\",\"\u003cOnward_date\u003e\",\"\u003cReturn_date\u003e\",\"\u003ctext\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "validate the web page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "departure_City",
        "Destination_place",
        "Onward_date",
        "Return_date",
        "text"
      ]
    },
    {
      "cells": [
        "Bangalore",
        "Chennai",
        "29-Sep-2019",
        "30-Sep-2019",
        "Track your bus live with the redBus app"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testing the UI alignment of the page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GUItesting"
    },
    {
      "name": "@GUItestingIntro"
    }
  ]
});
formatter.step({
  "name": "Navigate to the page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_definition_UI.navigate_to_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Provide the valid details with \"Bangalore\",\"Chennai\",\"29-Sep-2019\",\"30-Sep-2019\",\"Track your bus live with the redBus app\"",
  "keyword": "When "
});
formatter.match({
  "location": "Step_definition_UI.provide_the_valid_details_with(String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h3[@class\u003d\u0027helper-text\u0027]\"}\n  (Session info: chrome\u003d78.0.3904.108)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-60RD1T8\u0027, ip: \u0027192.168.0.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\Souradip\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 78.0.3904.108, webStorageEnabled: true}\nSession ID: ab9bd2c54c93e4eb724390cb36b991d3\n*** Element info: {Using\u003dxpath, value\u003d//h3[@class\u003d\u0027helper-text\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat test1.HomePage.searchFor(HomePage.java:94)\r\n\tat test1.HomePage$ByteBuddy$Tw6BRqwe.searchFor$accessor$z0IECeZD(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat test1.HomePage$ByteBuddy$Tw6BRqwe.searchFor(Unknown Source)\r\n\tat test1.Step_definition_UI.provide_the_valid_details_with(Step_definition_UI.java:39)\r\n\tat ✽.Provide the valid details with \"Bangalore\",\"Chennai\",\"29-Sep-2019\",\"30-Sep-2019\",\"Track your bus live with the redBus app\"(src/test/java/feature/UI_Test_Cucumber.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "validate the web page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition_UI.validate_the_web_page()"
});
formatter.result({
  "status": "skipped"
});
});