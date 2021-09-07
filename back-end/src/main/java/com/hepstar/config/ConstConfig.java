package com.hepstar.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConstConfig {

	@Value("${policyUrl}")
	private String policyUrl;

	@Value("${productUrl}")
	private String productUrl;

	@Bean
	public String getPolicyUrl() {
		return policyUrl;
	}

	@Bean
	public String getProductUrl() {
		return productUrl;
	}

}
