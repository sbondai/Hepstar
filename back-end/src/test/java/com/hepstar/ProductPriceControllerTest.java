package com.hepstar;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hepstar.productprice.domain.Request;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class ProductPriceControllerTest {

	private static final String API_V1_PRODUCTS = "/api/v1/products";
	@Autowired
	TestRestTemplate testRestTemplate;

	@Test
	public void postProduct_whenRequestIsValid_receiveOk() throws Exception {

		Request request = createRequest();

		ResponseEntity<Object> response = testRestTemplate.postForEntity(API_V1_PRODUCTS, request, Object.class);
		assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);

	}

	@Test
	public void postRequest_whenRequestIsValid_getPayload_from_ExternalAPI()
			throws JsonMappingException, JsonProcessingException {

		Request request = createRequest();
	}

	private Request createRequest() throws JsonProcessingException, JsonMappingException {

		String json = "{\r\n" + "   \"Authentication\": {\r\n" + "      \"Channel\": \"API\",\r\n"
				+ "      \"Username\": \"impdistributor\",\r\n" + "      \"Password\": \"FFRyEGGmMJYHA\"\r\n"
				+ "   },\r\n" + "   \"RequestParameters\": {\r\n" + "      \"Insureds\": [\r\n" + "         {\r\n"
				+ "            \"ID\": \"1\",\r\n" + "            \"DOB\": \"1983-09-25\",\r\n"
				+ "            \"Residency\": \"AE\"\r\n" + "         },\r\n" + "         {\r\n"
				+ "            \"ID\": \"2\",\r\n" + "            \"DOB\": \"1983-09-25\",\r\n"
				+ "            \"Residency\": \"AE\"\r\n" + "         }\r\n" + "      ],\r\n"
				+ "      \"TravelInformation\": {\r\n" + "         \"StartDate\": \"2021-12-01\",\r\n"
				+ "         \"EndDate\": \"2021-12-10\",\r\n" + "         \"DepartureCountry\": \"ZA\",\r\n"
				+ "         \"CoverCountries\": {\r\n" + "            \"CoverCountry\": \"BH\"\r\n" + "         }\r\n"
				+ "      }\r\n" + "   }\r\n" + "}";

		ObjectMapper objectMapper = new ObjectMapper();

		Request request = objectMapper.readValue(json, Request.class);
		return request;
	}

}
