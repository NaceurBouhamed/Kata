package com.kata.quix.services;

import com.kata.quix.constants.Range;
import com.kata.quix.constants.Words;
import com.kata.quix.exceptions.OutOfRangeException;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class QuizService {

    private static final Map<Character, String> map;

    static {
        map = new HashMap<>();
        map.put('3', Words.FOO.getWord());
        map.put('5', Words.BAR.getWord());
        map.put('7', Words.QUIX.getWord());
    }


    public String convertNumberToString(int value) throws OutOfRangeException {
            if(value >= Range.MIN.getValue() && value <= Range.MAX.getValue()) {
                StringBuilder sb = new StringBuilder();

                if(value % 3 == 0) sb.append(Words.FOO.getWord());
                if(value % 5 == 0) sb.append(Words.BAR.getWord());

                for(char digit: String.valueOf(value).toCharArray()) {
                    sb.append(map.getOrDefault(digit, ""));
                }

                return sb.isEmpty() ? String.valueOf(value) : sb.toString();
            }
            throw new OutOfRangeException(value);
    }

}
