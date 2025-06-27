package org.pantheon_solutions.request.service;

import org.pantheon_solutions.request.dto.ContactFormRequest;
import org.pantheon_solutions.request.dto.ContactFormResponse;

public interface ContactFormService {

    public ContactFormResponse submitContactForm(ContactFormRequest request);

}
