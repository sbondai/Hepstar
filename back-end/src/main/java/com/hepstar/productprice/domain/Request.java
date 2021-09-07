
package com.hepstar.productprice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Request {

	@JsonProperty("Authentication")
	private Authentication authentication;
	@JsonProperty("RequestParameters")
	private RequestParameters requestParameters;

}
