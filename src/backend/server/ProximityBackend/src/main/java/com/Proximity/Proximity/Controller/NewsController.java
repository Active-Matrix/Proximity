package com.Proximity.Proximity.Controller;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.News;
import com.Proximity.Proximity.Service.Services.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/")
public class NewsController {

    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }


    @GetMapping("/news")
    public ResponseEntity<Response<?>> getNews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return newsService.getNews(size,page);
    }

    @PostMapping("/news")
    public ResponseEntity<Response<?>> createNews(
            @RequestBody News news){
        return newsService.createNews(news);
    }


}
