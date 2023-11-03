package lk.ijse.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

public class DateDifferentCalc {
    public static void main(String[] args) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
        Date pickupdate = sdf.parse("11/30/2017");
        Date returndate = sdf.parse("12/30/2017");

        long different_in_milliseconds = Math.abs(returndate.getTime() - pickupdate.getTime());
        long different = TimeUnit.DAYS.convert(different_in_milliseconds, TimeUnit.MILLISECONDS);

        System.out.println(different);
    }
}
