package com.Proximity.Proximity.Service.Services;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.News;
import org.springframework.http.ResponseEntity;

public interface NewsService {

    ResponseEntity<Response<?>> getNews(int size,int page);

    ResponseEntity<Response<?>> createNews(News news);

}
