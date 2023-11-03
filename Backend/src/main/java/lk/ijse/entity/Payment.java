package lk.ijse.entity;

import lk.ijse.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Payment {

    @Id
    @Column(name = "payment_id")
    private String paymentId;
    @Column(name = "date")
    private String paymentDate;
    @Column(name = "invoice_no")
    private String invoiceNo;
    @Column(name = "amount")
    private double amount;
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_type")
    private PaymentType paymentType;

    @ManyToOne(cascade = {CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "bookingId", referencedColumnName = "bookingId")
    private Booking bookingDTO;

    public Payment(String paymentDate, double amount) {
        this.paymentDate = paymentDate;
        this.amount = amount;
    }
}
