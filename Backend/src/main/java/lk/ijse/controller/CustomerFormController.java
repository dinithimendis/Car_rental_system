package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("customer")
public class CustomerFormController {
    @Autowired
    public CustomerService customerService;

    /**
     * save customer
     */
    @PostMapping(value = "save_customer", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customerDTO) {
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    /**
     * load all customers in to the customer table
     */
    @GetMapping(value = "get_all", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers() {
        return new ResponseUtil("OK", "Successful", customerService.getAllCustomer());
    }

    /**
     * delete customer
     */
    @DeleteMapping
    public ResponseUtil deleteCustomer(String code) {
        customerService.deleteCustomer(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    /**
     * update customer
     */
    @PutMapping(value = "update_customer")
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.updateCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + customerDTO.getId(), "");
    }

    /**
     * auto generating customer id's
     */
    @GetMapping(params = {"test"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil generateCustomersIds(@RequestParam String test) {
        return new ResponseUtil("Ok", "", customerService.generateCustomerIds());
    }

    /**
     * counting how many registered customers we have ?
     */
    @GetMapping(path = "/customerCount/{count}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countCustomers(@PathVariable String count) {
        return new ResponseUtil("Ok", "Ok", customerService.countCustomer());
    }

}
