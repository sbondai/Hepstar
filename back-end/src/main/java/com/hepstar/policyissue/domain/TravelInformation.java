
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class TravelInformation {

	@JsonProperty("TravelItemValue")
	public String travelItemValue;

}
