
package com.hepstar.productprice.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class RequestParameters {

	@JsonProperty("Insureds")
	private List<Insured> insureds = null;
	@JsonProperty("TravelInformation")
	private TravelInformation travelInformation;

}
