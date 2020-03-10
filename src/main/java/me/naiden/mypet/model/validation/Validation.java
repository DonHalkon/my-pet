package me.naiden.mypet.model.validation;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "validations")
public class Validation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    @NotNull
    protected String expectedResult;

    public Validation() {
    }

    public Validation(String expectedResult) {
        this.expectedResult = expectedResult;
    }

    public String getExpectedResult() {
        return expectedResult;
    }

    public void setExpectedResult(String expectedResult) {
        this.expectedResult = expectedResult;
    }
}
