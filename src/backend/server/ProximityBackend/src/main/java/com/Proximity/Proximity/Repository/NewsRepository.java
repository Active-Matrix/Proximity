package com.Proximity.Proximity.Repository;

import com.Proximity.Proximity.Entity.News;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsRepository extends MongoRepository<News, ObjectId> {

}
