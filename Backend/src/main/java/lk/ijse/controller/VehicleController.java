package lk.ijse.controller;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.VehicleService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("vehicle")
public class VehicleController {
    @Autowired
    public VehicleService vehicleService;

    /**
     * save vehicle
     */
    @PostMapping(value = "save_vehicle", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@ModelAttribute VehicleDTO vehicleDTO) {
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    /**
     * delete vehicle
     */
    @DeleteMapping
    public ResponseUtil deleteVehicle(String code) {
        vehicleService.deleteVehicle(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    /**
     * load all vehicle in to the table
     */
    @GetMapping(value = "get_all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicle() {
        return new ResponseUtil("OK", "Successful", vehicleService.getAllVehicle());
    }

    /**
     * update vehicle
     */
    @PutMapping(value = "update")
    public ResponseUtil updateDriver(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + vehicleDTO.getVehicleID(), "");
    }

    /**
     * counting how many registered vehicle's we have ?
     */
    @GetMapping(path = "/vehicleCount/{count}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countVehicles(@PathVariable String count) {
        return new ResponseUtil("Ok", "", vehicleService.countVehicle());
    }

    /**
     * auto generating vehicle id option
     */
    @GetMapping(params = {"test"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateVehicleIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "", vehicleService.generateVehicleIds());
    }

    /**
     * searching vehicle by id
     */
    @GetMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil searchVehicleById(@RequestParam String id) {
        VehicleDTO vehicleDTO = vehicleService.searchVehicle(id);
        return new ResponseUtil("Ok", "Found", vehicleDTO);
    }
}
