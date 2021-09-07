
package com.hepstar.policyissue.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.Data;

@Data
public class Insured {

	@JsonProperty("ID")
	@JacksonXmlProperty(isAttribute = true, localName = "ID")
	public String id;
	@JsonProperty("Firstname")
	public String firstname;
	@JsonProperty("Surname")
	public String surname;
	@JsonProperty("DOB")
	public String dob;
	@JsonProperty("Residency")
	public String residency;
	@JsonProperty("NationalID")
	public String nationalId;
	@JsonProperty("TravelInformation")
	public TravelInformation travelInformation;

}
