package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.BookingService;
import lk.ijse.service.CustomerService;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    public DriverService driverService;

    @Autowired
    public BookingService bookingService;

    @Autowired
    public CustomerService customerService;

    /**
     * loading all customer id's in to the combo
     */
    @GetMapping(path = "/get_all_customers")
    public ResponseUtil getAllCustomersInToTheCombo(@ModelAttribute CustomerDTO customerDTO) {
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllCustomersInTheCombo());
    }

    /**
     * loading all driver id's in to the combo
     */
    @GetMapping("/get_all_drivers")
    public ResponseUtil getAllDriversInToTheCombo(@ModelAttribute DriverDTO driverDTO) {
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllItemsInTheCombo());
    }

    /**
     * loading all vehicle id's in to the combo
     */
    @GetMapping("/get_all_vehicles")
    public ResponseUtil getAllVehiclesInToTheCombo(@ModelAttribute VehicleDTO vehicleDTO) {
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllVehiclesInToTheCombo());
    }

    /**
     * place booking
     */
    @PostMapping(value = "/place_bookings")
    public ResponseUtil saveBooking(@RequestBody BookingDTO bookingDTO) {
        bookingService.placeBooking(bookingDTO);
        return new ResponseUtil("Ok", "Saved", "");
    }

    /**
     * counting how many bookings are placed ?
     */
    @GetMapping(path = "/bookingCount/{count}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countBooking(@PathVariable String count) {
        return new ResponseUtil("Ok", "", bookingService.countBooking());
    }

    /**
     * load all booking in to the table
     */
    @GetMapping(value = "/load_all_booking_details", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBookings() {
        return new ResponseUtil("OK", "Successful", bookingService.getAllBookings());
    }

    /**
     * get all booking details
     */
    @GetMapping(value = "/get_all_bookings", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllBookingDetails() {
        return new ResponseUtil("OK", "Successful", bookingService.getBookingDetails());
    }
}
