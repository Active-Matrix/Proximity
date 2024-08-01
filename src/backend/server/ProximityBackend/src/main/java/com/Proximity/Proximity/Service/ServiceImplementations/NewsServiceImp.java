package com.Proximity.Proximity.Service.ServiceImplementations;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Entity.News;
import com.Proximity.Proximity.Exception.CustomExceptions.CustomDataAccessException;
import com.Proximity.Proximity.Exception.CustomExceptions.ResourceNotFoundException;
import com.Proximity.Proximity.Exception.CustomExceptions.UnknownException;
import com.Proximity.Proximity.Repository.NewsRepository;
import com.Proximity.Proximity.Service.Services.NewsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class NewsServiceImp implements NewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsServiceImp(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public ResponseEntity<Response<?>> getNews(int size, int page) {
        try {
            log.info("Fetching news..");
            Pageable pageable = PageRequest.of(page, size);
            Page<News> data = newsRepository.findAll(pageable);
            List<News> news = data.getContent();
            if (news.isEmpty()) throw new ResourceNotFoundException("News data is empty", news);
            Response<List<News>> response = Response.success(HttpStatus.OK, "News articles fetched successfully", news);
            return ResponseEntity.ok(response);
        } catch (DataAccessException e) {
            throw new CustomDataAccessException("Failed To Fetch News ", e);
        } catch (Exception e) {
            throw new UnknownException(e);
        }
    }

    @Override
    public ResponseEntity<Response<?>> createNews(News news) {
        try {
            log.info("News saving...");
            News newNews = saveNews(news);
            Response<News> response = new Response<>(HttpStatus.OK, "News saved successfully", newNews);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("Unable to save news");
            throw new UnknownException(e);
        }
    }

    private News saveNews(News news) {
        try {
            return newsRepository.save(news);
        } catch (DataAccessException e) {
            throw new CustomDataAccessException("Failed To Save News", e);
        }
    }


}
