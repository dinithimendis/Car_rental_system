package lk.ijse.repo;

import lk.ijse.embeded.PriceRate;
import lk.ijse.entity.Vehicle;
import lk.ijse.enums.FuelType;
import lk.ijse.enums.TransmissionType;
import lk.ijse.enums.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle, String> {

    /**
     * query for auto generating vehicle id
     */
    @Query(value = "SELECT vehicleId FROM vehicle ORDER BY vehicleId DESC LIMIT 1", nativeQuery = true)
    String generateVehicleId();

    /**
     * find vehicle by number of passengers
     */
    List<Vehicle> findAllByNumberOfPassenger(int noOfPassenger);

    /**
     * find vehicle by fuel type
     */
    List<Vehicle> findAllByFuelType(FuelType fuelType);

    /**
     * find vehicle by price rate
     */
    List<Vehicle> findAllByVehiclePriceRate(PriceRate priceRate);

    /**
     * find vehicle by brand
     */
    List<Vehicle> findAllByVehicleBrand(String brand);

    /**
     * find vehicle by transmission type
     */
    List<Vehicle> findAllByTransmissionType(TransmissionType transmissionType);

    /**
     * find vehicle by vehicle type
     */
    List<Vehicle> findAllByVehicleType(VehicleType type);

}
