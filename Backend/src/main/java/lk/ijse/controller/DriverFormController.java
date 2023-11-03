package lk.ijse.controller;

import lk.ijse.dto.DriverDTO;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("driver")
public class DriverFormController {
    @Autowired
    public DriverService driverService;

    /**
     * save diver
     */
    @PostMapping(value = "save_driver", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveDriver(@ModelAttribute DriverDTO driverDTO) {
        driverService.saveDriver(driverDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    /**
     * delete driver
     */
    @DeleteMapping
    public ResponseUtil deleteDriver(String code) {
        driverService.deleteDriver(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    /**
     * load all drivers in to the table
     */
    @GetMapping(value = "get_all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllDrivers() {
        return new ResponseUtil("OK", "Successful", driverService.getAllDriver());
    }

    /**
     * update driver
     */
    @PutMapping(value = "update")
    public ResponseUtil updateDriver(@RequestBody DriverDTO driverDTO) {
        driverService.updateDriver(driverDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + driverDTO.getId(), "");
    }

    /**
     * counting how many drivers we have ?
     */
    @GetMapping(path = "/driverCount/{count}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countDrivers(@PathVariable String count) {
        return new ResponseUtil("Ok", "", driverService.countDrivers());
    }

    /**
     * auto generating driver id's
     */
    @GetMapping(params = {"test"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateDriverIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "", driverService.generateDriverIds());
    }

    /**
     * getting driver schedule
     */
    @GetMapping(value = "get_driver_schedule")
    public ResponseUtil gettingDriversScheduleDetails() {
        return new ResponseUtil("Ok", "", driverService.gettingDriverSchedule());
    }

}
