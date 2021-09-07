
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PolicyRequests {

	@JsonProperty("PolicyRequest")
	public PolicyRequest policyRequest;

}
