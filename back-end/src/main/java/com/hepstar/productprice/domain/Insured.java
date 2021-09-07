
package com.hepstar.productprice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

import lombok.Data;

@Data
public class Insured {

	@JsonProperty("ID")
	@JacksonXmlProperty(isAttribute = true, localName = "ID")
	private String id;
	@JsonProperty("DOB")
	private String dob;
	@JsonProperty("Residency")
	private String residency;

}
