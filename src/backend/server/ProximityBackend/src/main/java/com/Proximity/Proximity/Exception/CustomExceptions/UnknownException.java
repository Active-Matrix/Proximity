package com.Proximity.Proximity.Exception.CustomExceptions;

public class UnknownException extends RuntimeException {

    public UnknownException(String message, Exception e) {
        super(message, e);
    }

    public UnknownException(Exception e) {
        super(e);
    }
}
