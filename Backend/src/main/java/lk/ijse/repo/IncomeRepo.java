package lk.ijse.repo;

import lk.ijse.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IncomeRepo extends JpaRepository<Payment, String> {

    /**
     * query for generating daily revenue
     */
    @Query(value = "SELECT SUM(amount),date FROM payment GROUP BY date", nativeQuery = true)
    List<?> getRevenueByDate();

    /**
     * query for generating monthly revenue
     */
    @Query(value = "SELECT MONTH(date) AS month, SUM(amount) AS monthly_amount FROM payment GROUP BY MONTH(date)", nativeQuery = true)
    List<?> getRevenueByMonth();

    /**
     * query for generating yearly revenue
     */
    @Query(value = "SELECT SUM(amount)FROM payment;", nativeQuery = true)
    List<?> getRevenueByYear();


}
