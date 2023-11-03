package lk.ijse.entity;

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
@IdClass(BookingDetails_PK.class)
public class BookingDetails {
    @Id
    private String vehicleID;
    @Id
    private String bookingID;

    @ManyToOne
    @JoinColumn(name = "vehicleID", referencedColumnName = "vehicleID", insertable = false, updatable = false)
    private Vehicle vehicle;

    @ManyToOne
    @JoinColumn(name = "bookingID", referencedColumnName = "bookingID", insertable = false, updatable = false)
    private Booking booking;
}
