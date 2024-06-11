package com.kata.quix.controllers;

import com.kata.quix.exceptions.OutOfRangeException;
import com.kata.quix.services.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class QuizController {

    @Autowired
    QuizService quizService;

    @GetMapping("/{number}")
    public String processNumber(@PathVariable int number) throws OutOfRangeException, InterruptedException {
        Thread.sleep(128);
        return quizService.convertNumberToString(number);
    }
}
