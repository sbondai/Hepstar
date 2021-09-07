
package com.hepstar.productprice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Authentication {

	@JsonProperty("Channel")
	private String channel;
	@JsonProperty("Username")
	private String username;
	@JsonProperty("Password")
	private String password;

}
