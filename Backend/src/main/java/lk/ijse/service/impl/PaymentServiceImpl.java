package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.PaymentDTO;
import lk.ijse.entity.Booking;
import lk.ijse.entity.Payment;
import lk.ijse.repo.BookingRepo;
import lk.ijse.repo.PaymentRepo;
import lk.ijse.service.PaymentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    BookingRepo bookingRepo;

    /**
     * load all payment details in to the table
     */
    @Override
    public List<?> gettingAllPaymentDetails() {
        return paymentRepo.getAllPaymentDetails();
    }

    /**
     * save payment
     */
    @Override
    public void savePayment(PaymentDTO paymentDTO) {
        if (!paymentRepo.existsById(paymentDTO.getPaymentId())) {
            paymentRepo.save(modelMapper.map(paymentDTO, Payment.class));
        } else {
            throw new RuntimeException("Already Done");
        }
    }

    /**
     * delete payment
     */
    @Override
    public void deletePayment(String id) {

    }

    /**
     * update payment
     */
    @Override
    public void updatePayment(PaymentDTO paymentDTO) {

    }

    /**
     * search payment
     */
    @Override
    public PaymentDTO searchPayment(String id) {
        return null;
    }


    /**
     * loading all payment details in to the table
     */
    @Override
    public List<PaymentDTO> getAllPayment() {
        System.out.println(paymentRepo.findAll());
        return modelMapper.map(paymentRepo.findAll(), new TypeToken<ArrayList<PaymentDTO>>() {
        }.getType());
    }

    /**
     * load all booking details in to the table
     */
    @Override
    public ArrayList<BookingDTO> loadAllBookingDetails() {
        ArrayList<BookingDTO> allIds = new ArrayList<>();
        List<Booking> all = bookingRepo.findAll();
        for (Booking b : all) {
            CustomerDTO dto = modelMapper.map(b.getCustomer(), CustomerDTO.class);
            BookingDTO b1 = new BookingDTO(
                    b.getBookingID(),
                    b.getPickUpDate(),
                    b.getPickUpTime(),
                    b.getReturnDate(),
                    b.getDriverRequestType(),
                    dto, b.getPickUpLocation()
            );
            allIds.add(b1);
        }
        return allIds;
    }
}
