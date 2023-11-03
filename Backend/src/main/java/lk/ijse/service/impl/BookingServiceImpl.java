package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Booking;
import lk.ijse.repo.*;
import lk.ijse.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    DriverRepo driverRepo;
    @Autowired
    private VehicleRepo vehicleRepo;
    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private BookingDetailsRepo bookingDetailsRepo;

    /**
     * place booking
     */
    @Override
    public void placeBooking(BookingDTO bookingDTO) {
        if (bookingRepo.existsById(bookingDTO.getBookingID())) {
            throw new RuntimeException("already booked try another !");
        } else {
            Booking bb = modelMapper.map(bookingDTO, Booking.class);
            bookingRepo.save(bb);
        }
    }

    /**
     * load all customers in to the combo box
     */
    @Override
    public ArrayList<CustomerDTO> loadAllCustomersInTheCombo() {
        return modelMapper.map(customerRepo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    /**
     * load all items in to the combo box
     */
    @Override
    public ArrayList<DriverDTO> loadAllItemsInTheCombo() {
        return modelMapper.map(driverRepo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }

    /**
     * load all vehicles in to the combo box
     */
    @Override
    public ArrayList<VehicleDTO> loadAllVehiclesInToTheCombo() {
        return modelMapper.map(vehicleRepo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    /**
     * counting how many bookings we have ?
     */
    @Override
    public long countBooking() {
        return bookingRepo.count();
    }

    /**
     * load all booking details in t the table
     */
    @Override
    public List<BookingDTO> getAllBookings() {
        return modelMapper.map(bookingDetailsRepo.findAll(), new TypeToken<ArrayList<BookingDTO>>() {
        }.getType());
    }

    /**
     * search booking by id
     */
    @Override
    public BookingDTO getBookingById(String id) {
        return modelMapper.map(bookingRepo.getBookingByBookingID(id), BookingDTO.class);
    }

    /**
     * getting all booking details
     */
    @Override
    public List<BookingDTO> getBookingDetails() {
        List<BookingDTO> list = new ArrayList<>();
        List<Booking> all = bookingRepo.findAll();
        for (Booking b : all) {
            CustomerDTO dto = modelMapper.map(b.getCustomer(), CustomerDTO.class);
            BookingDTO b1 = new BookingDTO(b.getBookingID(), b.getPickUpDate(), b.getPickUpTime(), b.getReturnDate(), b.getDriverRequestType(), dto, b.getPickUpLocation());
            list.add(b1);
        }
        return list;
    }
}


