package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;

import java.util.ArrayList;
import java.util.List;

public interface BookingService {

    /**
     * place booking
     */
    void placeBooking(BookingDTO bookingDTO);

    /**
     * load all customers in to the combo box
     */
    ArrayList<CustomerDTO> loadAllCustomersInTheCombo();

    /**
     * load all items in to the combo box
     */
    ArrayList<DriverDTO> loadAllItemsInTheCombo();

    /**
     * load all vehicles in to the combo box
     */
    ArrayList<VehicleDTO> loadAllVehiclesInToTheCombo();

    /**
     * counting how many bookings we have ?
     */
    long countBooking();

    /**
     * load all booking details in t the table
     */
    List<BookingDTO> getAllBookings();

    /**
     * search booking by id
     */
    BookingDTO getBookingById(String id);

    /**
     * getting all booking details
     */
    List<BookingDTO> getBookingDetails();
}
