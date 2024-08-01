package com.Proximity.Proximity.Service.Services;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.Stories;
import org.springframework.http.ResponseEntity;

public interface StoryService {

    ResponseEntity<Response<?>> getStories();

    ResponseEntity<Response<?>> createStory(Stories stories);
}


