package com.hepstar.policyissue.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.hepstar.policyissue.domain.Request;
import com.hepstar.policyissue.service.PolicyIssueService;

@RestController
public class PolicyIssueController {

	@Autowired
	PolicyIssueService policyIssueService;

	@PostMapping(path = "/api/v1/policyissue", consumes = { MediaType.APPLICATION_JSON_VALUE }, produces = {
			MediaType.APPLICATION_XML_VALUE })
	@ResponseBody
	String requestProducts(@RequestBody Request apiResponse) throws Exception {

		JsonNode convertedXML = policyIssueService.convertJsonToXml(apiResponse);

		return convertedXML.toString();

	}

}