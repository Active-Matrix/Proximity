package com.Proximity.Proximity.Exception.Advice;

import com.Proximity.Proximity.Dto.Response;
import com.Proximity.Proximity.Exception.CustomExceptions.CustomDataAccessException;
import com.Proximity.Proximity.Exception.CustomExceptions.UnknownException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionController {

    @ExceptionHandler(CustomDataAccessException.class)
    public ResponseEntity<Response<?>> handleDataAccessException(Exception e) {
        log.error("...Data access error occurred {}", e.getMessage());

        String message = "An error occurred during access database";
        Response<?> response = Response.error(
                HttpStatus.SERVICE_UNAVAILABLE,
                null,
                message,
                e.getMessage()
        );
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response);
    }

    @ExceptionHandler(UnknownException.class)
    public ResponseEntity<Response<?>> handleUnknownException(Exception e) {
        log.error("...UnknownException {}", e.getMessage());

        Response<?> response = Response.error(
                HttpStatus.INTERNAL_SERVER_ERROR,
                null,
                "Un-Expected error occurred",
                e.getMessage()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }

}
