package com.Proximity.Proximity.Service.ServiceImplementations;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.Stories;
import com.Proximity.Proximity.Exception.CustomExceptions.CustomDataAccessException;
import com.Proximity.Proximity.Exception.CustomExceptions.ResourceNotFoundException;
import com.Proximity.Proximity.Exception.CustomExceptions.UnknownException;
import com.Proximity.Proximity.Repository.StoryRepository;
import com.Proximity.Proximity.Service.Services.StoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class StoryServiceImp implements StoryService {


    private final StoryRepository storyRepository;

    @Autowired
    public StoryServiceImp(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    @Override
    public ResponseEntity<Response<?>> getStories() {
        try {
            log.info("Fetching stories..");

            List<Stories> stories = storyRepository.findAll();
            if (stories.isEmpty()) throw new ResourceNotFoundException("Story data is empty", stories);
            Response<List<Stories>> response = Response.success(HttpStatus.OK, "Stories fetched successfully", stories);
            return ResponseEntity.ok(response);
        } catch (DataAccessException e) {
            throw new CustomDataAccessException("Failed To Fetch stories ", e);
        } catch (Exception e) {
            throw new UnknownException(e);
        }
    }

    @Override
    public ResponseEntity<Response<?>> createStory(Stories stories) {
        try {
            log.info("Story saving...");

            Stories newStory = saveNews(stories);
            Response<Stories> response = new Response<>(HttpStatus.OK, "Story saved successfully", newStory);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Unable to save story");
            throw new UnknownException(e);
        }
    }

    private Stories saveNews(Stories stories) {
        try {
            return storyRepository.save(stories);
        } catch (DataAccessException e) {
            throw new CustomDataAccessException("Failed to save story", e);
        }
    }
}
