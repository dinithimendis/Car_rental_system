package lk.ijse.service;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.PaymentDTO;

import java.util.ArrayList;
import java.util.List;

public interface PaymentService {

    /**
     * load all payment details in to the table
     */
    List<?> gettingAllPaymentDetails();

    /**
     * save payment
     */
    void savePayment(PaymentDTO paymentDTO);

    /**
     * delete payment
     */
    void deletePayment(String id);

    /**
     * update payment
     */
    void updatePayment(PaymentDTO paymentDTO);

    /**
     * search payment
     */
    PaymentDTO searchPayment(String id);

    /**
     * loading all payment details in to the table
     */
    List<PaymentDTO> getAllPayment();

    /**
     * load all booking details in to the table
     */
    ArrayList<BookingDTO> loadAllBookingDetails();
}
