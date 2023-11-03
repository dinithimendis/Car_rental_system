package lk.ijse.service;


import lk.ijse.dto.DriverDTO;

import java.util.List;

public interface DriverService {

    /**
     * save driver
     */
    void saveDriver(DriverDTO driverDTO);

    /**
     * delete driver
     */
    void deleteDriver(String id);

    /**
     * update driver
     */
    void updateDriver(DriverDTO driverDTO);

    /**
     * load all drivers in to the table
     */
    List<DriverDTO> getAllDriver();

    /**
     * counting how many drivers if we have ?
     */
    long countDrivers();

    /**
     * auto generating driver id's option
     */
    String generateDriverIds();

    /**
     * loading driver schedule in to the table
     */
    List<?> gettingDriverSchedule();
}
