package lk.ijse.service;

import java.util.List;

public interface IncomeService {

    /**
     * generating daily income
     */
    List<?> getCurrentIncomeByDate();

    /**
     * generating monthly income
     */
    List<?> getCurrentIncomeByMonth();

    /**
     * generating yearly income
     */
    List<?> getCurrentIncomeByYear();

}
