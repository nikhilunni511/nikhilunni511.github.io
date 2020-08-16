
      
        var mobile1 = document.getElementById("mobile")
        var myInput = document.getElementById("psw");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function () {
            document.getElementById("message").style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function () {
            document.getElementById("message").style.display = "none";
        }

        // When the user starts to type something inside the password field
        myInput.onkeyup = function () {
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            // Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        }
        function validateMobile(){
           
            // Validate numbers
            var numbers = /[0-9]/g;
            if (mobile1.value.match(numbers)) {
                mobile1.setCustomValidity("")
            } else {
                mobile1.setCustomValidity("Invalid characters found")
            }

            // Validate length
            if (mobile1.value.length !== 10) {
                mobile1.setCustomValidity('Must be 10 digit')
            } else {
                mobile1.setCustomValidity("")
            }



        }




        var date = document.getElementById('dob');
        function validateDate(){
            var inputDate = new Date(date.value);
        var currentDate = new Date()
        if(inputDate<currentDate){
           
            date.setCustomValidity("");
        }
        else{
            date.setCustomValidity("Invalid date");
        }
       
        }
        var password = document.getElementById("psw")
            , confirm_password = document.getElementById("confirm_password");

        function validatePassword() {
            if (password.value !== confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
            } else {
                confirm_password.setCustomValidity('');
            }
        }
        date.onchange = validateDate;
        password.onchange = validatePassword;
        confirm_password.onkeyup = validatePassword;
        mobile1.onkeyup = validateMobile;