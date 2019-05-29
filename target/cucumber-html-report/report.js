$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/UserLogin.feature");
formatter.feature({
  "name": "BCP API automation exam",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@user"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "a user has credentials",
  "rows": [
    {
      "cells": [
        "password",
        "123456bcp"
      ]
    },
    {
      "cells": [
        "username",
        "examenparabcp@gmail.com"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserLoginSteps.user_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user login",
  "keyword": "When "
});
formatter.match({
  "location": "UserLoginSteps.user_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "token",
        "59c57973-3e9e-405d-92f8-ce5c7f03dccb"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UserLoginSteps.response_equals(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@user"
    },
    {
      "name": "@nologin"
    }
  ]
});
formatter.step({
  "name": "a user has credentials",
  "rows": [
    {
      "cells": [
        "password",
        "123456bco"
      ]
    },
    {
      "cells": [
        "username",
        "examenparabcp@gmail.com"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "UserLoginSteps.user_credentials(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user login",
  "keyword": "When "
});
formatter.match({
  "location": "UserLoginSteps.user_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLoginSteps.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "response includes the following",
  "rows": [
    {
      "cells": [
        "message",
        "The requested Item has not been found"
      ]
    },
    {
      "cells": [
        "type",
        "ItemNotFoundException"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UserLoginSteps.response_equals(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
});