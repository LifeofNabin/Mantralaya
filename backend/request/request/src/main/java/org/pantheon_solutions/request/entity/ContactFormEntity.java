package org.pantheon_solutions.request.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "contact_submissions")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContactFormEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String referenceId;

    private String firstName;

    private String lastName;

    private String email;

    private String organization;

    private String region;

    private String industry;

    private String howCanWeHelp;

    private LocalDateTime submittedAt;

    private String status ="PENDING";

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate(){
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate(){
        updatedAt = LocalDateTime.now();
    }

}
