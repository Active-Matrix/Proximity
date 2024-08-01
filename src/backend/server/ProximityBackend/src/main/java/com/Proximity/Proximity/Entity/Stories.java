package com.Proximity.Proximity.Entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document("stories")
public class Stories {

    @Id
    private String storyId;

    private String name;

    private String code;

    private String avatar;

    private List<Story> stories;
}
