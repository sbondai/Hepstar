
package com.hepstar.productprice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class TravelInformation {

	@JsonProperty("StartDate")
	private String startDate;
	@JsonProperty("EndDate")
	private String endDate;
	@JsonProperty("DepartureCountry")
	private String departureCountry;
	@JsonProperty("CoverCountries")
	private CoverCountries coverCountries;

}
