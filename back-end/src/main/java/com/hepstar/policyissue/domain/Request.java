
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Request {

	@JsonProperty("Authentication")
	public Authentication authentication;
	@JsonProperty("RequestParameters")
	public RequestParameters requestParameters;

}
