
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class RequestParameters {

	@JsonProperty("PolicyRequests")
	public PolicyRequests policyRequests;

}
