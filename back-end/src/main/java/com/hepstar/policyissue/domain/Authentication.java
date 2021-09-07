
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Authentication {

	@JsonProperty("Channel")
	public String channel;
	@JsonProperty("Username")
	public String username;
	@JsonProperty("Password")
	public String password;

}
