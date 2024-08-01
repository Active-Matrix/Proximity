package com.Proximity.Proximity.Repository;

import com.Proximity.Proximity.Entity.Stories;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StoryRepository extends MongoRepository<Stories, String> {

}
