package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    /**
     * save customer
     */
    void saveCustomer(CustomerDTO customerDTO);

    /**
     * update customer
     */
    void updateCustomer(CustomerDTO customerDTO);

    /**
     * delete customer
     */
    void deleteCustomer(String id);

    /**
     * load all customers
     */
    List<CustomerDTO> getAllCustomer();

    /**
     * auto generating customer id's
     */
    String generateCustomerIds();

    /**
     * counting how many customers we have ?
     */
    long countCustomer();
}
