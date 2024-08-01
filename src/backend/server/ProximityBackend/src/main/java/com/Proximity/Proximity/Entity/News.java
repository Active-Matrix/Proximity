package com.Proximity.Proximity.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Data
@Document("news")
public class News {

    @Id
    private String newsId;

    private String title;

    private String imageUrl;

    private Set<String> tags = new HashSet<>();

    private Integer readTime;

    private String href;

    private String category;

}
