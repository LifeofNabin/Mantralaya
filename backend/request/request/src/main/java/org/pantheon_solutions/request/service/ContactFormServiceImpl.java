package org.pantheon_solutions.request.service;

import org.pantheon_solutions.request.dto.ContactFormRequest;
import org.pantheon_solutions.request.dto.ContactFormResponse;
import org.pantheon_solutions.request.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class ContactFormServiceImpl implements ContactFormService {

    @Autowired
    private ContactFormRepository contactFormRepository;
     

    @Override
    public ContactFormResponse submitContactForm(ContactFormRequest request) {
        return null;
    }
}
