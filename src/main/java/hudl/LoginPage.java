package hudl;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

/**
 * using this class to add page objects and methods.
 */

public class LoginPage extends BasePage {
    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    public static void login(String email, String password) {
        driver.findElement(By.cssSelector("a[data-qa-id='login-select']")).click();
        driver.findElement(By.cssSelector("a[data-qa-id='login-hudl']")).click();
        driver.findElement(By.id("email")).sendKeys(email);
        driver.findElement(By.id("password")).sendKeys(password);
        driver.findElement(By.cssSelector("button[data-qa-id='login-btn']")).click();

    }

    public static void errorMsg() {
        String expectErrorMsg = "We didn't recognize that email and/or password.Need help?";
        WebElement msg = driver.findElement(By.cssSelector("p[data-qa-id='error-display']"));
        String actualMsg = msg.getText();
        System.out.println("Error message is: " + actualMsg);
        Assert.assertEquals(expectErrorMsg, actualMsg);

    }

    public static void userDoesNotProvideAnyCred() {
        driver.findElement(By.cssSelector("a[data-qa-id='login-select']")).click();
        driver.findElement(By.cssSelector("a[data-qa-id='login-hudl']")).click();
        driver.findElement(By.cssSelector("button[data-qa-id='login-btn']")).click();

    }
    public static void loginBtnDisable() {
        driver.findElement(By.id("logIn")).isEnabled();
    }
}
