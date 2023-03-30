$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HudlLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality of hudl coach home page",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@hudl_smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user is able to login with valid username and password",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;user-is-able-to-login-with-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login in with email \"\u003cEmail\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user is able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;user-is-able-to-login-with-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 9,
      "id": "login-functionality-of-hudl-coach-home-page;user-is-able-to-login-with-valid-username-and-password;;1"
    },
    {
      "cells": [
        "olu.oshin@outlook.com",
        "Geller@59"
      ],
      "line": 10,
      "id": "login-functionality-of-hudl-coach-home-page;user-is-able-to-login-with-valid-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9147452959,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "user is able to login with valid username and password",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;user-is-able-to-login-with-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@hudl_smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login in with email \"olu.oshin@outlook.com\" and password as \"Geller@59\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user is able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 3076380167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "olu.oshin@outlook.com",
      "offset": 23
    },
    {
      "val": "Geller@59",
      "offset": 63
    }
  ],
  "location": "Login_StepDefinition.loginDetails(String,String)"
});
formatter.result({
  "duration": 6713740375,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.verifyPageTitle()"
});
formatter.result({
  "duration": 9169546000,
  "status": "passed"
});
formatter.after({
  "duration": 1643763541,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Login page feature hudl with wrong username and password",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;login-page-feature-hudl-with-wrong-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I login in with email \"\u003cEmail\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user is not able to login",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;login-page-feature-hudl-with-wrong-username-and-password;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 17,
      "id": "login-functionality-of-hudl-coach-home-page;login-page-feature-hudl-with-wrong-username-and-password;;1"
    },
    {
      "cells": [
        "WrongUserName@outlook.com",
        "CoachHuld"
      ],
      "line": 18,
      "id": "login-functionality-of-hudl-coach-home-page;login-page-feature-hudl-with-wrong-username-and-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5356947583,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login page feature hudl with wrong username and password",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;login-page-feature-hudl-with-wrong-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@hudl_smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I login in with email \"WrongUserName@outlook.com\" and password as \"CoachHuld\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user is not able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 2653834167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WrongUserName@outlook.com",
      "offset": 23
    },
    {
      "val": "CoachHuld",
      "offset": 67
    }
  ],
  "location": "Login_StepDefinition.loginDetails(String,String)"
});
formatter.result({
  "duration": 6871142166,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.userIsNotAbleToLoginIn()"
});
formatter.result({
  "duration": 2245535958,
  "status": "passed"
});
formatter.after({
  "duration": 471586583,
  "status": "passed"
});
formatter.before({
  "duration": 5354830833,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user is not able to login when credentials is not provided in the username and password field",
  "description": "",
  "id": "login-functionality-of-hudl-coach-home-page;user-is-not-able-to-login-when-credentials-is-not-provided-in-the-username-and-password-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "The user did not provide any username and password",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the login button is disable to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_StepDefinition.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 2669795709,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.emptyUserNameAndPassword()"
});
formatter.result({
  "duration": 2761883083,
  "status": "passed"
});
formatter.match({
  "location": "Login_StepDefinition.disableLoginBtn()"
});
formatter.result({
  "duration": 377831666,
  "status": "passed"
});
formatter.after({
  "duration": 458209958,
  "status": "passed"
});
});