package com.kata.quix.utils;

import com.kata.quix.constants.Range;

import java.util.Random;

public class RandomNumber {

    static Random random;

    static {
        random = new Random();
    }

    public static int getRandomNumberOutOfInterval() {
        int number;
        do {
            number = random.nextInt() * (Range.MAX.getValue() - Range.MIN.getValue() + 1) + Range.MIN.getValue();
        } while (number < Range.MIN.getValue() && number > Range.MAX.getValue());
        return number;
    }
}
