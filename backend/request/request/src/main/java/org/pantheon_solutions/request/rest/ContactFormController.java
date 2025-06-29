package org.pantheon_solutions.request.rest;

import jakarta.validation.Valid;
import org.pantheon_solutions.request.dto.ContactFormRequest;
import org.pantheon_solutions.request.dto.ContactFormResponse;
import org.pantheon_solutions.request.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
public class ContactFormController {

    @Autowired
    private ContactFormService contactFormService;

    @PostMapping("/submit")
    public ResponseEntity<?> submitContactForm(@Valid @RequestBody ContactFormRequest request, BindingResult bindingResult) {

        // Handle validation errors
        if(bindingResult.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            bindingResult.getFieldErrors().forEach(error ->
                    errors.put(error.getField(),
                            error.getDefaultMessage()));

            return ResponseEntity.badRequest().body(Map.of(
                    "status","VALIDATION_ERROR",
                    "message","Please enter the validation errors",
                    "errors",errors
            ));
        }

        try {
            ContactFormResponse response = contactFormService.submitContactForm(request);

            if("SUCCESS".equals(response.getStatus())) {
                return ResponseEntity.ok(response);
            }else {
                return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS).body(response);
            }

        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    new ContactFormResponse("ERROR","An error occurred while processing your request",null));
        }


    }


    @GetMapping("/regions")
    public ResponseEntity<Map<String,String[]>> getRegions() {
        Map<String,String[]> regions = new HashMap<>();
        regions.put("regions", new String[]{
                "North America",
                "South America",
                "Europe",
                "Middle East & Africa",
                "Asia Pacific",
                "India"
        });

        return ResponseEntity.ok(regions);
    }


    @GetMapping("/industries")
    public ResponseEntity<Map<String,String[]>> getIndustries(){
        Map<String,String[]> industries = new HashMap<>();
        industries.put("industries", new String[]{
                "Banking & Financial Services",
                "Insurance",
                "Healthcare & Life Sciences",
                "Retail & Consumer Goods",
                "Manufacturing",
                "Technology, Media & Telecommunications",
                "Energy, Resources & Utilities",
                "Government",
                "Education",
                "Travel & Hospitality",
                "Other"
        });

        return ResponseEntity.ok(industries);
    }

}
