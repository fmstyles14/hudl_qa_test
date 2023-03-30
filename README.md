# Hudl QA Automation Assignment

I have added one tests: the first task is UI.feature
- UI-Test.feature please visit https://www.hudl.com/


## Test Automation Framework for Hudl

- This is a Maven based framework
- `pom.xml` should have everything you need to create and run the tests. Please add further dependencies if you require it.

The following folder `src/test/java/AutomationTest/hudl` contains the following class:

- `Hook` - this is the before and after. This launches and kills the browser.
- `RunnerTest` - contains the CucumberOptions which runs the BDD's

The following folder `src/main/java/AutomationTest/hudl` contains the following class:

- `BrowserSetup` - This contains the setup of a given browser based on what is set to Browser property within `TestData.properties` 

 
## Steps to execute this project

- Pre-requisites
    - JAVA SDK 1.8 or higher
    - Maven CLI-
    - Git
    
- Steps
    - Clone the project to  your local  
    - Use command line or any IDE that supports JAVA & Maven dependencies
    - You may need to import the Maven dependencies (Scope got set to Compile for Newly added dependencies in pom.xml)
    - Execute the command: `mvn clean test` OR Goto RunnerTest.java class to run specfic test using test tag
    - Alternatively, we can run `testng.xml` from IDE after downloading the dependencies
    - Result will be captured in `test-output` folder

- TODO List ( IF i had more time with this task )
   - Split out all element in a separate java class 
   - use of more static constant variable 
   - Add more nagative scenario to loginpage test
   - 