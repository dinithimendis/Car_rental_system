package lk.ijse.repo;

import lk.ijse.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {

    /**
     * finding user by name
     */
    User findByUserName(String username);

    /**
     * if exists user ?
     */
    boolean existsByUserName(String name);

    /**
     * find user by there id
     */
    Optional<User> findByUserId(int userId);

    /**
     * find user by there username and password
     */
    User findByUserNameAndPassword(String userName, String password);

}
