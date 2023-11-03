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
@IdClass(DriverSchedule_PK.class)
public class DriverSchedule {
    @Id
    @Column(name = "driverID")
    private String driverID;
    @Id
    @Column(name = "bookingID")
    private String bookingID;

    @ManyToOne
    @JoinColumn(name = "driverID", referencedColumnName = "id", insertable = false, updatable = false)
    private Driver driverDTO;

    @ManyToOne
    @JoinColumn(name = "bookingID", referencedColumnName = "bookingID", insertable = false, updatable = false)
    private Booking bookingDTO;
}
