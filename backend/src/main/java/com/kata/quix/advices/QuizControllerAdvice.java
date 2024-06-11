package com.kata.quix.advices;

import com.kata.quix.exceptions.OutOfRangeException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class QuizControllerAdvice {

    @ExceptionHandler(value = {OutOfRangeException.class})
        public ResponseEntity<String> valueOutOfRangeException(Exception ex) {
        return new ResponseEntity<String>(
                ex.getMessage(),
                HttpStatus.BAD_REQUEST
        );
    }
}
