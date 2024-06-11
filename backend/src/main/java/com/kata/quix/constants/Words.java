package com.kata.quix.constants;

public enum Words {
    FOO("FOO"),
    BAR("BAR"),
    QUIX("QUIX");

    private final String word;

    Words(String word) {
        this.word = word;
    }

    public String getWord() {
        return word;
    }
}
