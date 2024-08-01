package com.Proximity.Proximity.Exception.Advice;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Exception.CustomExceptions.ResourceNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
@Order(Ordered.HIGHEST_PRECEDENCE)
public class DomainExceptionController {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<Response<?>> handleResourceNotFoundException(ResourceNotFoundException e) {
        log.error("...Resource not found: {}", e.getMessage());

        Response<?> response = Response.error(
                HttpStatus.NOT_FOUND,
                e.getData(),
                "Resource not found",
                e.getMessage()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

}