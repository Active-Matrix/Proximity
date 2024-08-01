package com.Proximity.Proximity.Exception.CustomExceptions;

public class ResourceNotFoundException extends RuntimeException {

    Object data;

    public ResourceNotFoundException(String message,Object data) {
        super(message);
        this.data = data;
    }

    public Object getData() {
        return data;
    }

}
