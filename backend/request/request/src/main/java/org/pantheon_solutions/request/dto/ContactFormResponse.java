package org.pantheon_solutions.request.dto;

import lombok.*;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContactFormResponse {
    private String status;

    private String message;

    private String referenceId;

    private LocalDateTime timestamp;

}
