package me.naiden.mypet.model.validation;

import java.util.Objects;

public class StringProducerValidation extends Validation implements ValidationFunction {
    @Override
    public ValidationResultEnum validate(String actualResult) {
        if (Objects.equals(expectedResult, actualResult)) return ValidationResultEnum.SUCCESS;
        else return ValidationResultEnum.FAILURE;
    }
}
