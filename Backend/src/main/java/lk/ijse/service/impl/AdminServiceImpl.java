package lk.ijse.service.impl;

import lk.ijse.dto.AdminDTO;
import lk.ijse.entity.Admin;
import lk.ijse.repo.AdminRepo;
import lk.ijse.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;

    /**
     * save admin
     */
    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (adminRepo.existsById(adminDTO.getAdminId())) {
            throw new RuntimeException("Admin Already Exist !");
        } else {
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }
    }

    /**
     * update admin
     */
    @Override
    public void updateAdmin(AdminDTO adminDTO) {

        if (!adminRepo.existsById(adminDTO.getAdminId())) {
            throw new RuntimeException("Cannot find these customer id !");
        } else {
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }
    }

    /**
     * delete admin
     */
    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)) {
            adminRepo.deleteById(id);
        } else {
            throw new RuntimeException("No such a admin !");
        }
    }

    /**
     * load all admins in to the table
     */
    @Override
    public List<AdminDTO> getAllAdmin() {
        return modelMapper.map(adminRepo.findAll(), new TypeToken<ArrayList<AdminDTO>>() {
        }.getType());
    }

    /**
     * generating admin id's
     */
    @Override
    public String generateAdminIds() {
        String adminID = adminRepo.generateAdminId();
        if (adminID != null) {
            int tempId = Integer.
                    parseInt(adminID.split("-")[1]);
            tempId = tempId + 1;
            if (tempId <= 9) {
                return "A00-00" + tempId;
            } else if (tempId <= 99) {
                return "A00-0" + tempId;
            } else {
                return "A00-" + tempId;
            }
        } else {
            return "A00-001";
        }
    }
}
