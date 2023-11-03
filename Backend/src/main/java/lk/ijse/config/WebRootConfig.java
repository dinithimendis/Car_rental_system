package lk.ijse.config;

import lk.ijse.service.IncomeService;
import lk.ijse.service.impl.*;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(JPAConfig.class)
@ComponentScan(basePackageClasses = {CustomerServiceImpl.class, AdminServiceImpl.class, DriverServiceImpl.class, VehicleServiceImpl.class, BookingServiceImpl.class, PaymentServiceImpl.class,SearchingServiceImpl.class, IncomeService.class})
public class WebRootConfig {

    /* introducing all model mapper in to the context */
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}
