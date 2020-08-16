
        function addUser() {
            
            var gender;
            var name = document.getElementById('fullname').value;
            if (document.getElementById('male').checked)
                gender = "Male";
            else if (document.getElementById('female').checked)
                gender = "Female";
            else
                gender = "Others";
            var dob = document.getElementById('dob').value;
            var mobile = document.getElementById('mobile').value;
            
            var email = document.getElementById('useremail').value;
            var pwd = document.getElementById('psw').value;
           
           
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/createUser", true);
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    document.getElementById('regForm').reset();
                    document.getElementById('alertbox').style.display = 'block';

                }

            };


            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`name=${name}&gender=${gender}&dob=${dob}&mobile=${mobile}&email=${email}&pwd=${pwd}`);


        }