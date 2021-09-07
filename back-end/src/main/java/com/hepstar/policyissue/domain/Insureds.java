
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Insureds {

	@JsonProperty("Insured")
	public Insured insured;

}
