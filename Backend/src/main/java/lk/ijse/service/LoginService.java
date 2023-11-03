package lk.ijse.service;

import lk.ijse.dto.UserDTO;

public interface LoginService {

    /**
     * validating user by there name and password
     */
    UserDTO loginUser(String userName, String password);
}
