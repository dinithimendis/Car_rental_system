package lk.ijse.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {

    private String paymentId;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private String paymentDate;
    private String invoiceNo;
    private double amount;
    private PaymentType paymentType;
    private BookingDTO bookingDTO;

    public PaymentDTO(String paymentDate, double amount) {
        this.paymentDate = paymentDate;
        this.amount = amount;
    }
}
