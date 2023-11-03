package lk.ijse.repo;

import lk.ijse.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DriverRepo extends JpaRepository<Driver, String> {

    /**
     * query for auto generating driver id
     */
    @Query(value = "SELECT id FROM driver ORDER BY id DESC LIMIT 1", nativeQuery = true)
    String generateDriverId();

}
