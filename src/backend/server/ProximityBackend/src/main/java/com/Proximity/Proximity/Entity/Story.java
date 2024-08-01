package com.Proximity.Proximity.Entity;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class Story {

    private String title;

    private String coverImage;

    private Integer readTime;

    private Set<String> tags = new HashSet<>();

    private String href;

}
