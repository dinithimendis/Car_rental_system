function validator(txtField, regXPattern, warningText, errorLbl, nextTxtField) {

    $(txtField).on('keyup', function (e) {

        if (regXPattern.test($(txtField).val())) {
            $(txtField).css('border', '3px solid green');
            $(errorLbl).text('');

            /** this one is compatible for item form */
            if (e.key === "Enter" && txtField !== "#unitPriceTxt") {
                $(nextTxtField).focus();

            } else if (e.key === "Enter" && txtField === "#unitPriceTxt") {
                // saveItem();
                $(nextTxtField).focus();

            } else {
                return false
            }

            /** this one is compatible for customer form */
            if (e.key === "Enter" && txtField !== "#cusContactTxt") {
                $(nextTxtField).focus();

            } else if (e.key === "Enter" && txtField === "#cusContactTxt") {
                // saveCustomer();
                $(nextTxtField).focus();

            } else {
                return false;
            }

        } else {
            $(txtField).css('border', '3px solid red');
            $(errorLbl).text(warningText);

        }
    })
}