
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class TravelInformation__1 {

	@JsonProperty("StartDate")
	public String startDate;
	@JsonProperty("EndDate")
	public String endDate;
	@JsonProperty("DepartureCountry")
	public String departureCountry;
	@JsonProperty("CoverCountries")
	public CoverCountries coverCountries;
	@JsonProperty("BookingValue")
	public String bookingValue;
	@JsonProperty("FlightInformations")
	public FlightInformations flightInformations;

}
