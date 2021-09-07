
package com.hepstar.productprice.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class CoverCountries {

	@JsonProperty("CoverCountry")
	private String coverCountry;

}
