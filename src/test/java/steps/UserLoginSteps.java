package steps;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class UserLoginSteps {
	
	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;

	private String ENDPOINT_USER_LOGIN = "https://api.octoperf.com/public/users/login";


	@Given("a user has credentials$")
	public void user_credentials(Map<String,String> credentials){
		request = given();
		for (Map.Entry<String, String> field : credentials.entrySet()) {
			request = request.param(field.getKey(), field.getValue());
		}
	}

	@When("a user login$")
	public void user_login(){
		response = request.when().post(ENDPOINT_USER_LOGIN);
		//Below code will be uncommented for debugging purposes only
		//System.out.println("response: " + response.prettyPrint());
	}
	
	@Then("the status code is (\\d+)")
	public void verify_status_code(int statusCode){
		json = response.then().statusCode(statusCode);
	}

	@And("response includes the following$")
	public void response_equals(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				json.body(field.getKey(), equalTo(field.getValue()));
			}
		}
	}

}
