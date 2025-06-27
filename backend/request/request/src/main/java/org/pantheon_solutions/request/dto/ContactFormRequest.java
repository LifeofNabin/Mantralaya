package org.pantheon_solutions.request.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class ContactFormRequest {


    private String firstName;

    private String lastName;

    private String email;

    private String organization;

    private String region;

    private String industry;

    private String howCanWeHelp;

    private LocalDateTime submittedAt;

    public ContactFormRequest(){
        this.submittedAt = LocalDateTime.now();
    }
}
