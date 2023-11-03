package lk.ijse.controller;

import lk.ijse.dto.AdminDTO;
import lk.ijse.service.AdminService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("admin")
public class AdminFormController {

    @Autowired
    public AdminService adminService;

    /**
     * save admin
     */
    @PostMapping(value = "save_admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO adminDTO) {
        adminService.saveAdmin(adminDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    /**
     * delete admin
     */
    @DeleteMapping()
    public ResponseUtil deleteAdmin(String code) {
        adminService.deleteAdmin(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    /**
     * update admin
     */
    @PutMapping(value = "update")
    public ResponseUtil updateAdmin(@RequestBody AdminDTO adminDTO) {
        adminService.updateAdmin(adminDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + adminDTO.getAdminId(), "");
    }

    /**
     * get all admin
     */
    @GetMapping(value = "get_all_admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllAdmin() {
        return new ResponseUtil("OK", "Successful", adminService.getAllAdmin());
    }

    /**
     * customer id auto generating option
     */
    @GetMapping(params = {"test"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateCustomersIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "", adminService.generateAdminIds());
    }

}
