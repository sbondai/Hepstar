package com.hepstar.productprice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.hepstar.productprice.domain.Request;
import com.hepstar.productprice.service.ProductPriceService;

@RestController
public class ProductPriceController {

	@Autowired
	ProductPriceService productPriceService;

	@PostMapping(path = "/api/v1/products", consumes = { MediaType.APPLICATION_JSON_VALUE })
	@ResponseBody
	String requestProducts(@RequestBody Request apiResponse) throws Exception {

		JsonNode convertedXML = productPriceService.convertJsonToXml(apiResponse);

		return convertedXML.toString();

	}

}
