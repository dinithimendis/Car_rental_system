package lk.ijse.service;

import lk.ijse.dto.AdminDTO;

import java.util.List;

public interface AdminService {

    /**
     * save admin
     */
    void saveAdmin(AdminDTO adminDTO);

    /**
     * update admin
     */
    void updateAdmin(AdminDTO adminDTO);

    /**
     * delete admin
     */
    void deleteAdmin(String code);

    /**
     * load all admins in to the table
     */
    List<AdminDTO> getAllAdmin();

    /**
     * generating admin id's
     */
    String generateAdminIds();
}
