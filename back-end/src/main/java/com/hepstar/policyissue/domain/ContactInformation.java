
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class ContactInformation {

	@JsonProperty("Email")
	public String email;

}
