package com.hepstar.productprice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.hepstar.config.DuplicateToArrayJsonNodeDeserializer;
import com.hepstar.productprice.domain.Request;

@Service
public class ProductPriceService {

	@Autowired
	private String getProductUrl;

	public JsonNode convertJsonToXml(Request apiResponse) throws Exception {

		RestTemplate restTemplate = new RestTemplate();
		String result = (String) restTemplate.postForObject(getProductUrl, apiResponse, String.class);

		XmlMapper xmlMapper = new XmlMapper();
		xmlMapper.registerModule(
				new SimpleModule().addDeserializer(JsonNode.class, new DuplicateToArrayJsonNodeDeserializer()));
		JsonNode node = xmlMapper.readTree(result);
		return node;

	}

}
