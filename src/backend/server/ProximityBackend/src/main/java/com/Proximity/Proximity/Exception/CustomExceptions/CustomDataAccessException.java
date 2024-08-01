package com.Proximity.Proximity.Exception.CustomExceptions;

public class CustomDataAccessException extends RuntimeException {

    public CustomDataAccessException(String message, Exception e) {
        super(message, e);
    }
}
