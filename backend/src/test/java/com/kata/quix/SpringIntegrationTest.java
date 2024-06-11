package com.kata.quix;

import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;


import java.io.IOException;

@CucumberContextConfiguration
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class SpringIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    public ResponseEntity<String> executeGet(String path) {
       return restTemplate.getForEntity(path, String.class);
    }
}
