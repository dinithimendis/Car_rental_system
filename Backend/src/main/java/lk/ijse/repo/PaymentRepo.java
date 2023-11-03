package lk.ijse.repo;

import lk.ijse.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PaymentRepo extends JpaRepository<Payment, String> {

    /**
     * query for load all payment details
     */
    @Query(value = "SELECT * FROM payment;", nativeQuery = true)
    List<?> getAllPaymentDetails();
}
