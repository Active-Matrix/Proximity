package com.Proximity.Proximity.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class SampleController {

    @GetMapping("/check")
    public String checkServer() {
        return "Server is running....";
    }
}
