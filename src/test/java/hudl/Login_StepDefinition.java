package hudl;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import static hudl.BasePage.driver;
import static hudl.LoginPage.*;

public class Login_StepDefinition {

    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
        HomePage.homePage();

    }
    @When("^I login in with email \"(.*)\" and password as \"(.*)\"$")
    public void loginDetails(String Email, String Password) {
        LoginPage.login(Email,Password);

    }

    @Then("^the user is able to login$")
    public void verifyPageTitle() {
        String title = driver.getTitle();
        System.out.println(title);

        Assert.assertEquals("Log In", title);

        if (driver.getTitle().matches("Log In"))
            System.out.println("This Is the Correct Page Title");
        else
            System.out.println("Page Title not Equal to Page Title");
    }

    @And("^the user is not able to login$")
    public void userIsNotAbleToLoginIn(){
        errorMsg();
    }

    @And("^The user did not provide any username and password$")
    public void emptyUserNameAndPassword(){
        userDoesNotProvideAnyCred();

    }
    @And("^the login button is disable to the user$")
    public void disableLoginBtn(){
        loginBtnDisable();
    }
}
