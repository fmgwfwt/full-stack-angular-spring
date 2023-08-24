package com.example.project.domain.employee.enums;

public enum EmploymentType {
    B2B("B2B"),
    PERMANENT("Permanent"),
    MANDATE_CONTRACT("Mandate Contract");
    private final String employmentType;

    EmploymentType(String employmentType){
        this.employmentType=employmentType;
    }

    public String getEmploymentType(){
        return employmentType;
    }
}
