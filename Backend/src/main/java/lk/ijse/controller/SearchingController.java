package lk.ijse.controller;

import lk.ijse.embeded.PriceRate;
import lk.ijse.enums.FuelType;
import lk.ijse.enums.TransmissionType;
import lk.ijse.enums.VehicleType;
import lk.ijse.service.SearchingService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
@RequestMapping("searching")
public class SearchingController {
    @Autowired
    SearchingService searchingService;


    /**
     * searching vehicle by passenger count
     */
    @GetMapping(params = {"no_of_passengers"})
    public ResponseUtil sortVehicleNoOfPassenger(@RequestParam int no_of_passengers) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getAllNoOfPassenger(no_of_passengers));
    }

    /**
     * searching vehicle by fuel type
     */
    @GetMapping(params = {"fuel_type"})
    public ResponseUtil sortVehicleFuelType(@RequestParam FuelType fuel_type) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getAllFuelType(fuel_type));
    }

    /**
     * searching vehicle by price rate
     */
    @GetMapping
    public ResponseUtil sortVehiclePriceRate(PriceRate price_rate) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getPriceRate(price_rate));
    }

    /**
     * searching vehicle by vehicle brand
     */
    @GetMapping(params = "brand")
    public ResponseUtil sortVehicleByBrand(@RequestParam String brand) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getVehicleByBrand(brand));
    }

    /**
     * searching vehicle by vehicle type
     */
    @GetMapping(params = "type")
    public ResponseUtil sortVehicleByType(@RequestParam VehicleType type) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getVehicleByType(type));
    }

    /**
     * searching vehicle by transmission type
     */
    @GetMapping(params = "transmission_type")
    public ResponseUtil sortVehicleByTransmissionType(@RequestParam TransmissionType transmission_type) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.getVehicleByTransmissionType(transmission_type));
    }

    /**
     * searching vehicle by pickup date and return date
     */
    @GetMapping(params = {"pickUpDate", "returnDate"})
    public ResponseUtil loadAvailableVehicles(@RequestParam String pickup_date, @RequestParam String return_date) {
        return new ResponseUtil("Ok", "Your request Success", searchingService.load_all_available_vehicles(null, null));
    }

}
