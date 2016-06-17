(
    function (validation) {
        validation.numbersOnly = function (evt, type) {
            console.log(type);
            if (evt.keyCode < 48 || evt.keyCode > 57) {

                evt.preventDefault();
            }
        }


        validation.alphabetsOnly = function (evt) {
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode <= 122 && evt.keyCode >= 97)) {
                console.log("allowed");
            } else {
                evt.preventDefault();
            }
        }
    })(window.validation = {});
