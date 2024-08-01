package com.Proximity.Proximity.Dto;

import lombok.Data;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Data
public class Response<T> {

    private HttpStatus status;
    private String message;
    private T data;
    private String errors;
    private LocalDateTime timestamp;


    // Constructor For Success Response
    public Response(HttpStatus status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.errors = null;
        this.timestamp = LocalDateTime.now();
    }

    // Constructor For Error Error Response
    public Response(HttpStatus status, T data, String message, String errors) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.errors = errors;
        this.timestamp = LocalDateTime.now();
    }

    public static <T> Response<T> success(HttpStatus status, String message, T data) {
        return new Response<>(status, message, data);
    }

    public static <T> Response<T> error(HttpStatus status, T data, String message, String errors) {
        return new Response<>(status, data, message, errors);
    }
}