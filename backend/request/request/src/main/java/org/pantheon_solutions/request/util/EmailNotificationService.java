package org.pantheon_solutions.request.util;

import org.pantheon_solutions.request.entity.ContactFormEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailNotificationService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${app.contact.from-email:noreply@tcs.com}")
    private String fromEmail;

    @Value("${app.contact.internal-email:contact@tcs.com}")
    private String internalEmail;

    public void sendConfirmationEmail(String customerEmail, String referenceId){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(customerEmail);
        message.setSubject("Thank you for contacting Phanton - Reference: " + referenceId);
        message.setText(buildConfirmationEmailBody( referenceId));

        mailSender.send(message);
    }

    public void sendInternalNotification(ContactFormEntity submission) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(internalEmail);
        message.setSubject("New Contact form Submission - "+submission.getReferenceId());
        message.setText(buildInternalNotificationBody(submission));

        mailSender.send(message);
    }

    private String buildConfirmationEmailBody(String referenceId) {
        return String.format(
                  "Dear Customer, \n\n"+
                  "Thank you for contacting Phanton. We have received your inquiry and we'll get back to you as soon as we can.\n\n" +
                  "Reference ID: %s\n\n" +
                  "Our team will review your message and respond within 24-48 hours.\n\n" +
                  "Best regards,\n" +
                  "Phanton Customer Support Team",
                  referenceId
        );
    }

    private String buildInternalNotificationBody(ContactFormEntity submission) {
        return String.format(
                        "New contact form submission received:\n\n" +
                        "Reference ID: %s\n" +
                        "Name: %s %s\n" +
                        "Email: %s\n" +
                        "Organization: %s\n" +
                        "Region: %s\n" +
                        "Industry: %s\n" +
                        "How can we help: %s\n" +
                        "Submitted At: %s\n\n" +
                        "Please follow up accordingly.",
                        submission.getReferenceId(),
                        submission.getFirstName(),
                        submission.getLastName(),
                        submission.getEmail(),
                        submission.getOrganization(),
                        submission.getRegion(),
                        submission.getIndustry(),
                        submission.getHowCanWeHelp(),
                        submission.getSubmittedAt()
        );
    }


}
