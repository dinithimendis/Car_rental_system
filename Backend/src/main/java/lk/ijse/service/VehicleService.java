package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {

    /**
     * search vehicle
     */
    void saveVehicle(VehicleDTO driverDTO);

    /**
     * delete vehicle
     */
    void deleteVehicle(String code);

    /**
     * update vehicle
     */
    void updateVehicle(VehicleDTO driverDTO);

    /**
     * load all vehicle
     */
    List<VehicleDTO> getAllVehicle();

    /**
     * count how many vehicle's if we have ?
     */
    long countVehicle();

    /**
     * auto generating vehicle id option
     */
    String generateVehicleIds();

    /**
     * search vehicle option
     */
    VehicleDTO searchVehicle(String id);

    /**
     * getting vehicle count by brand and type
     */
    int brandAndTypeCount(String brand, String type);

}
