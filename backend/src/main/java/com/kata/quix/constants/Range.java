package com.kata.quix.constants;

public enum Range {
    MAX(100),
    MIN(0);

    private final int value;

    Range(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
