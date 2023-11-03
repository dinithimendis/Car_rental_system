package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.embeded.PriceRate;
import lk.ijse.enums.FuelType;
import lk.ijse.enums.TransmissionType;
import lk.ijse.enums.VehicleType;

import java.util.List;

public interface SearchingService {


    /**
     * searching vehicle by passenger count
     */
    List<VehicleDTO> getAllNoOfPassenger(int no_of_passengers);

    /**
     * searching vehicle by fuel type
     */
    List<VehicleDTO> getAllFuelType(FuelType fuel_type);

    /**
     * searching vehicle by price rate
     */
    List<VehicleDTO> getPriceRate(PriceRate price_rate);

    /**
     * searching vehicle by vehicle brand
     */
    List<VehicleDTO> getVehicleByBrand(String brand);

    /**
     * searching vehicle by vehicle type
     */
    List<VehicleDTO> getVehicleByType(VehicleType type);

    /**
     * searching vehicle by transmission type
     */
    List<VehicleDTO> getVehicleByTransmissionType(TransmissionType transmission_type);

    /**
     * searching vehicle by pickup date and return date
     */
    List<VehicleDTO> load_all_available_vehicles(String pickup_date, String return_date);
}
