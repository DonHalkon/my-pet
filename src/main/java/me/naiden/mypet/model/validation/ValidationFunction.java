package me.naiden.mypet.model.validation;

public interface ValidationFunction {
    ValidationResultEnum validate(String actualResult);
}
