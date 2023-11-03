package lk.ijse.service.impl;

import lk.ijse.dto.UserDTO;
import lk.ijse.entity.User;
import lk.ijse.repo.UserRepo;
import lk.ijse.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    UserRepo userRepo;

    /**
     * validating user by there name and password
     */
    @Override
    public UserDTO loginUser(String userName, String password) {
        User byUserName = userRepo.findByUserName(userName);
        if (byUserName != null) {
            if (byUserName.getPassword().equals(password)) {
                return modelMapper.map(byUserName, UserDTO.class);
            }
            throw new RuntimeException("Password Incorrect");
        }
        throw new RuntimeException("User name Incorrect");
    }
}
