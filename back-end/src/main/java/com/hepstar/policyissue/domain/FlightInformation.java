
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.Data;

@Data
public class FlightInformation {

	@JsonProperty("Segment")
	@JacksonXmlProperty(isAttribute = true)
	public String segment;
	@JsonProperty("FlightNumber")
	public String flightNumber;
	@JsonProperty("StartDate")
	public String startDate;
	@JsonProperty("EndDate")
	public String endDate;
	@JsonProperty("CoverCountries")
	public CoverCountries coverCountries;

}
