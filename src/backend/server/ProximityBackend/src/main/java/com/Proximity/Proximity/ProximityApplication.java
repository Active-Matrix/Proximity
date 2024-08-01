package com.Proximity.Proximity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class ProximityApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProximityApplication.class, args);
	}

}
