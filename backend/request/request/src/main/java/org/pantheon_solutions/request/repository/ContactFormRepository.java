package org.pantheon_solutions.request.repository;

import org.pantheon_solutions.request.entity.ContactFormEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface ContactFormRepository extends JpaRepository<ContactFormEntity, Long> {

    Optional<ContactFormEntity> findByReferenceId(String referenceId);
    List<ContactFormEntity> findByEmailOrderBySubmittedAtDesc(String email);
    List<ContactFormEntity> findByStatusOrderBySubmittedAtDesc(String status);
    List<ContactFormEntity> findByRegionOrderBySubmittedAtDesc(String region);

    List<ContactFormEntity> findByIndustryOrderBySubmittedAtDesc(String industry);

    @Query("SELECT c FROM ContactFormEntity c WHERE c.submittedAt BETWEEN :startDate AND :endDater ORDER BY c.submittedAt DESC")
    List<ContactFormEntity> findSubmissionsByDateRange(@Param("startDate")LocalDateTime startDate,
                                                       @Param("endDate")LocalDateTime endDate);
    @Query("SELECT COUNT(c) FROM ContactFormEntity c WHERE c.email = :email AND c.submittedAt>:since")
    Long countRecentSubmissionsByEmail(@Param("email") String email, @Param("since") LocalDateTime since);

}
