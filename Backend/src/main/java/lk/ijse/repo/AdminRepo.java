package lk.ijse.repo;

import lk.ijse.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepo extends JpaRepository<Admin, String> {

    /**
     * query for generating admin id
     */
    @Query(value = "SELECT admin_id FROM admin ORDER BY admin_id DESC LIMIT 1", nativeQuery = true)
    String generateAdminId();
}
