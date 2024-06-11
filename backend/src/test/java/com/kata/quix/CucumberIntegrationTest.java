package com.kata.quix;

import com.kata.quix.exceptions.OutOfRangeException;
import com.kata.quix.utils.RandomNumber;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

public class CucumberIntegrationTest extends SpringIntegrationTest {

    ResponseEntity response;

    private final String BASE_PATH = "/api/";

    @When("the client sends a request to transform the number {int}")
    public void the_client_sends_a_request_to_transform_the_number(Integer number) throws OutOfRangeException, IOException {
        response = executeGet(BASE_PATH + number);
    }

    @Then("the response should contain the string {string}")
    public void the_response_should_contain_the_string(String expectedString) {
        assertEquals(expectedString, response.getBody());
    }

    @When("the client sends a request with a number not in [{int}, {int}]\"")
    public void theClientSendsARequestWithANumberNotIn(int min, int max) {
        int randomNumberOutOfRange = RandomNumber.getRandomNumberOutOfInterval();
        response = executeGet(BASE_PATH + randomNumberOutOfRange);
    }

    @Then("the response should indicate an {string}")
    public void theResponseShouldIndicateAn(String arg0) {
        assertNotNull(response.getBody());
        assertTrue(response.getBody().toString().contains(arg0));
    }

    @And("^the status code should be (\\d+)$")
    public void theStatusCodeShouldBe(int expectedHttpCode) {
        assertEquals(expectedHttpCode, response.getStatusCode().value());
    }

}
