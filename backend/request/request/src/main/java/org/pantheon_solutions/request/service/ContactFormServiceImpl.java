package org.pantheon_solutions.request.service;

import org.pantheon_solutions.request.dto.ContactFormRequest;
import org.pantheon_solutions.request.dto.ContactFormResponse;
import org.pantheon_solutions.request.entity.ContactFormEntity;
import org.pantheon_solutions.request.repository.ContactFormRepository;
import org.pantheon_solutions.request.util.EmailNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;


@Service
@Transactional
public class ContactFormServiceImpl implements ContactFormService {

    @Autowired
    private ContactFormRepository contactFormRepository;

    @Autowired
    private EmailNotificationService emailNotificationService;


    @Override
    public ContactFormResponse submitContactForm(ContactFormRequest request) {

        //Rate limiting check
        if(isRateLimited(request.getEmail())){
            return new ContactFormResponse("ERROR",
                    "To many submissions. Please try again later.",null);
        }

        // Generate reference ID
        String referenceId = generateReferenceId();

        //Create entity
        ContactFormEntity entity = mapToEntity(request,referenceId);

        //Save to database
        ContactFormEntity savedEntity = contactFormRepository.save(entity);

        //Send notification emails
        try {
            emailNotificationService.sendConfirmationEmail(request.getEmail(),referenceId);
            emailNotificationService.sendInternalNotification(savedEntity);
        } catch (Exception e) {
            //Log error but don't fail the submission
            System.err.println("Failed to send notification emails: "+e.getMessage());

        }
        return new ContactFormResponse(
                "SUCCESS",
                "We've got your request and we'll get back to you as soon as we can.",referenceId
        );
    }

    private boolean isRateLimited(String email) {
        LocalDateTime oneHourAgo = LocalDateTime.now().minusHours(1);
        Long recentSubmissions = contactFormRepository.countRecentSubmissionsByEmail(email,oneHourAgo);
        return recentSubmissions >= 3; //Maximum 3 submissions per hour
    }

    private String generateReferenceId() {
        return "AKNY-" + System.currentTimeMillis() + "-" + UUID.randomUUID().toString().substring(0,8).toUpperCase();
    }

    private ContactFormEntity mapToEntity(ContactFormRequest request, String referenceId) {
        ContactFormEntity entity = new ContactFormEntity();
        entity.setReferenceId(referenceId);
        entity.setFirstName(request.getFirstName());
        entity.setLastName(request.getLastName());
        entity.setEmail(request.getEmail());
        entity.setOrganization(request.getOrganization());
        entity.setRegion(request.getRegion());
        entity.setIndustry(request.getIndustry());
        entity.setHowCanWeHelp(request.getHowCanWeHelp());
        entity.setSubmittedAt(LocalDateTime.now());
        return entity;
    }

}
