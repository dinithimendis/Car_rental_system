package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.PaymentDTO;
import lk.ijse.service.BookingService;
import lk.ijse.service.PaymentService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("payment")
public class PaymentFormController {
    @Autowired
    PaymentService paymentService;

    @Autowired
    BookingService bookingService;

    /**
     * save payment
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "save_payment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@RequestBody PaymentDTO paymentDTO) {
        paymentService.savePayment(paymentDTO);
        return new ResponseUtil("OK", "Saved", null);
    }

    /**
     * loading all payment details in to the table
     */
    @GetMapping(value = "get_all_payment_details", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments() {
        return new ResponseUtil("OK", "Successful", paymentService.gettingAllPaymentDetails());
    }

    /**
     * loading all bookings
     */
    @GetMapping(path = "get_all_bookings")
    public ResponseUtil getAllBookingDetails(@ModelAttribute BookingDTO bookingDTO) {
        return new ResponseUtil("OK", "Successfully Loaded ! ", paymentService.loadAllBookingDetails());
    }
}
