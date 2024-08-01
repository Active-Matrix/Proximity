package com.Proximity.Proximity.Controller;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.Stories;
import com.Proximity.Proximity.Service.Services.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class StoriesController {


    private final StoryService storyService;

    @Autowired
    public StoriesController(StoryService storyService) {
        this.storyService = storyService;
    }


    @GetMapping("/stories")
    public ResponseEntity<Response<?>> getStories() {
        return storyService.getStories();
    }

    @PostMapping("/stories")
    public ResponseEntity<Response<?>> createStory(@RequestBody Stories stories) {
        return storyService.createStory(stories);
    }


}
