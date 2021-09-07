
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class PolicyRequest {

	@JsonProperty("ProductID")
	public String productID;
	@JsonProperty("Insureds")
	public Insureds insureds;
	@JsonProperty("ContactInformation")
	public ContactInformation contactInformation;
	@JsonProperty("TravelInformation")
	public TravelInformation__1 travelInformation;

}
