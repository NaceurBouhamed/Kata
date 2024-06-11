package com.kata.quix.exceptions;

import com.kata.quix.constants.Range;

public class OutOfRangeException extends Exception {
    private final int MAX = Range.MAX.getValue();
    private final int MIN = Range.MIN.getValue();
    private final int value;

    public OutOfRangeException(int value) {
        super();
        this.value = value;
    }

    @Override
    public String getMessage() {
        return String.format("%s : %d is out of the range [%d, %d]", this.getClass().getSimpleName() ,this.value, this.MIN, this.MAX);
    }
}
